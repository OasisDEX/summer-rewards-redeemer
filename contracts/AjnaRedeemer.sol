// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
import { MerkleProof } from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";
import { IAjnaDripper } from "./interfaces/IAjnaDripper.sol";
import { IAjnaRedeemer } from "./interfaces/IAjnaRedeemer.sol";

contract AjnaRedeemer is AccessControl, IAjnaRedeemer {
    mapping(uint256 => bytes32) public weeklyRoots;
    mapping(address => uint256) private hasClaimed;

    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");
    bytes32 public constant EMERGENCY_ROLE = keccak256("EMERGENCY_ROLE");
    uint256 public immutable deploymentWeek;
    address public immutable drip;
    IERC20 public immutable ajnaToken;

    event Claimed(address indexed user, uint256 indexed week, uint256 amount);

    constructor(IERC20 _ajnaToken, address _operator, address _drip) {
        deploymentWeek = block.timestamp / 1 weeks;
        ajnaToken = _ajnaToken;
        drip = _drip;
        _setupRole(OPERATOR_ROLE, _operator);
        _setupRole(EMERGENCY_ROLE, _operator);
        _setupRole(EMERGENCY_ROLE, msg.sender);
    }

    /* @inheritdoc IAjnaRedeemer */
    function getCurrentWeek() public view returns (uint256) {
        return block.timestamp / 1 weeks;
    }

    /* @inheritdoc IAjnaRedeemer */
    function addRoot(uint256 week, bytes32 root) external onlyRole(OPERATOR_ROLE) {
        require((week >= deploymentWeek && week <= getCurrentWeek()), "redeemer/invalid-week");
        require(weeklyRoots[week] == bytes32(0), "redeemer/root-already-added");
        require(IAjnaDripper(drip).drip(week), "redeemer/transfer-from-failed");
        weeklyRoots[week] = root;
    }

    /* @inheritdoc IAjnaRedeemer */
    function getRoot(uint256 week) public view returns (bytes32) {
        bytes32 root = weeklyRoots[week];
        require(root != bytes32(0), "redeemer/no-root");
        return root;
    }

    /* @inheritdoc IAjnaRedeemer */
    function claimMultiple(
        uint256[] calldata _weeks,
        uint256[] calldata amounts,
        bytes32[][] calldata proofs
    ) external {
        require(_weeks.length > 0, "redeemer/cannot-claim-zero");
        require(
            _weeks.length == amounts.length && amounts.length == proofs.length,
            "redeemer/invalid-params"
        );

        uint256 total;
        uint256 alreadyClaimed = hasClaimed[msg.sender];
        uint256 accumulatedClaimed = 0;
        for (uint256 i = 0; i < _weeks.length; i += 1) {
            require(canClaim(proofs[i], _weeks[i], amounts[i]), "redeemer/cannot-claim");

            uint256 thisWeekClaimed = 1 << (_weeks[i] - deploymentWeek);
            require((accumulatedClaimed & thisWeekClaimed) == 0);

            accumulatedClaimed = accumulatedClaimed | thisWeekClaimed;
            total += amounts[i];
            emit Claimed(msg.sender, _weeks[i], amounts[i]);
        }
        require((accumulatedClaimed & alreadyClaimed) == 0, "redeemer/already-claimed");
        hasClaimed[msg.sender] = alreadyClaimed | accumulatedClaimed;
        require(ajnaToken.transfer(msg.sender, total), "redeemer/transfer-failed");
    }

    /* @inheritdoc IAjnaRedeemer */
    function canClaim(
        bytes32[] memory proof,
        uint256 week,
        uint256 amount
    ) public view returns (bool) {
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender, amount));
        return MerkleProof.verify(proof, weeklyRoots[week], leaf);
    }

    /**
     * @dev Withdraw all remaining AJNA tokens from the contract in case of emergency.
     * Only callable by users with the EMERGENCY_ROLE permission.
     * Transfers the entire balance of the contract to the designated drip address.
     * Emits a {Transfer} event indicating the transfer to the drip address.
     */
    function emergencyWithdraw() external onlyRole(EMERGENCY_ROLE) {
        require(
            ajnaToken.transfer(drip, ajnaToken.balanceOf(address(this))),
            "redeemer/transfer-failed"
        );
    }
}
