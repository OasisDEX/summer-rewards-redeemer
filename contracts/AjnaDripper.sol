// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";
import { IAjnaDripper } from "./interfaces/IAjnaDripper.sol";
import { IAjnaRedeemer } from "./interfaces/IAjnaRedeemer.sol";

contract AjnaDripper is IAjnaDripper, AccessControl {
    mapping(uint256 => bool) public weeklyDrip;
    address public immutable beneficiary;
    address public immutable self;
    uint256 public weeklyAmount;
    uint256 public lastUpdate;
    IERC20 public immutable ajnaToken;
    IAjnaRedeemer public redeemer;
    bytes32 public constant REDEEMER_ROLE = keccak256("REDEEMER_ROLE");

    event Dripped(uint256 indexed week, uint256 amount);

    constructor(IERC20 _ajnaToken, address _multisig) {
        weeklyAmount = 2000 * 10 ** 18;
        ajnaToken = _ajnaToken;
        beneficiary = _multisig;
        self = address(this);
        _setupRole(DEFAULT_ADMIN_ROLE, _multisig);
    }

    /* @inheritdoc IAjnaDripper */
    function getCurrentWeek() public view returns (uint256) {
        return block.timestamp / 1 weeks;
    }

    /* @inheritdoc IAjnaDripper */
    function drip() external onlyRole(REDEEMER_ROLE) returns (bool status) {
        uint256 week = getCurrentWeek();
        require(weeklyDrip[week] == false, "drip/already-dripped");
        weeklyDrip[week] = true;
        status = ajnaToken.transfer(address(redeemer), weeklyAmount);
        require(status, "drip/transfer-from-failed");
        emit Dripped(week, weeklyAmount);
    }

    /* @inheritdoc IAjnaDripper */
    function changeRedeemer(IAjnaRedeemer _redeemer) external onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(REDEEMER_ROLE, address(redeemer));
        grantRole(REDEEMER_ROLE, address(_redeemer));
        redeemer = _redeemer;
    }

    /* @inheritdoc IAjnaDripper */
    function changeWeeklyAmount(uint256 _newAmount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_newAmount > 0 && _newAmount < (110 * weeklyAmount) / 100, "drip/invalid-amount");
        require(lastUpdate + 4 weeks < block.timestamp, "drip/invalid-timestamp");
        weeklyAmount = _newAmount;
        lastUpdate = block.timestamp;
    }

    /* @inheritdoc IAjnaDripper */
    function emergencyWithdraw() external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(
            ajnaToken.transfer(beneficiary, ajnaToken.balanceOf(address(this))),
            "drip/transfer-failed"
        );
    }
}
