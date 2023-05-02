// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";
import { IAjnaDripper } from "./interfaces/IAjnaDripper.sol";
import { IAjnaRedeemer } from "./interfaces/IAjnaRedeemer.sol";
//import { console } from "hardhat/console.sol";

contract AjnaDripper is IAjnaDripper, AccessControl {
    mapping(uint256 => bool) public weeklyDrip;
    uint256 constant MAX_WEEKLY_AMOUNT = 10_000 * 10 ** 18;
    address public immutable beneficiary;
    uint256 public immutable dripperDeploymentWeek;
    IERC20 public immutable ajnaToken;
    IAjnaRedeemer public redeemer;
    uint256 public weeklyAmount;
    uint256 public lastUpdate;

    bytes32 public constant REDEEMER_ROLE = keccak256("REDEEMER_ROLE");

    event Dripped(uint256 indexed week, uint256 amount);
    event RedeemerChanged(uint256 indexed week, address oldRedeemer, address indexed newRedeemer);

    constructor(IERC20 _ajnaToken, address _multisig) {
        ajnaToken = _ajnaToken;
        beneficiary = _multisig;
        dripperDeploymentWeek = getCurrentWeek();
        _setupRole(DEFAULT_ADMIN_ROLE, _multisig);
    }

    /* @inheritdoc IAjnaDripper */
    function getCurrentWeek() public view returns (uint256) {
        return block.timestamp / 1 weeks;
    }

    /* @inheritdoc IAjnaDripper */
    function drip(uint256 week) external onlyRole(REDEEMER_ROLE) returns (bool status) {
        require(weeklyDrip[week] == false, "drip/already-dripped");
        require(week >= dripperDeploymentWeek && week <= getCurrentWeek(), "drip/invalid-week");
        weeklyDrip[week] = true;
        status = ajnaToken.transfer(address(redeemer), weeklyAmount);
        require(status, "drip/transfer-from-failed");
        emit Dripped(week, weeklyAmount);
    }

    function validateWeeklyAmount(uint256 _weeklyAmount) private {
        //console.log("weeklyAmount", weeklyAmount);
        //console.log("_weeklyAmount", _weeklyAmount);
        require(_weeklyAmount <= MAX_WEEKLY_AMOUNT, "drip/amount-exceeds-max");
        require(
            (_weeklyAmount > (90 * weeklyAmount) / 100 && _weeklyAmount < (110 * weeklyAmount) / 100) || weeklyAmount == 0,
            "drip/invalid-amount"
        );
    }

    /* @inheritdoc IAjnaDripper */
    function changeRedeemer(
        IAjnaRedeemer _redeemer,
        uint256 _weeklyAmount
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        validateWeeklyAmount(_weeklyAmount);
        revokeRole(REDEEMER_ROLE, address(redeemer));
        grantRole(REDEEMER_ROLE, address(_redeemer));
        weeklyAmount = _weeklyAmount;
        lastUpdate = block.timestamp;
        emit RedeemerChanged(getCurrentWeek(), address(redeemer), address(_redeemer));
        redeemer = _redeemer;
    }

    /* @inheritdoc IAjnaDripper */
    function changeWeeklyAmount(uint256 _weeklyAmount) public onlyRole(DEFAULT_ADMIN_ROLE) {
        validateWeeklyAmount(_weeklyAmount);
        require(lastUpdate + 4 weeks < block.timestamp, "drip/invalid-timestamp");
        weeklyAmount = _weeklyAmount;
        lastUpdate = block.timestamp;
    }
}
