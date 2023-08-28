// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.19;

/**
 * @title Rewards Redeemer Implementation
 * @notice Allows the owner to add rewards to the contract and users to claim them
 * 
 * @dev The Redeemer uses a Bitmap to keep track of which users have claimed rewards for a given index.
 *      An index is a number that represents a period of time, this could be a day, a week, a month, etc.
 *      Due to the fact that the Bitmap can only store a maximum of 256 indices, if the index represents
 *      a day, the contract will only be able to manage rewards for 256 days. In such case a new contract
 *      will need to be deployed.
 */
interface IRewardsRedeemer {
    /// EVENTS 
    event Claimed(address indexed user, uint256 indexed week, uint256 amount);

    /// ERRORS
    error InvalidRewardsToken(address token);
    error RootAlreadyAdded(uint256 index, bytes32 root);
    error UserCannotClaim(address user, uint256 index, uint256 amount);
    error UserAlreadyClaimed(address user, uint256 index, uint256 amount);
    error TokenTransferFailed(address user, address token, uint256 amount);
    error ClaimMultipleEmpty(uint256[] weekIds, uint256[] amounts, bytes32[][] proofs);
    error ClaimMultipleLengthMismatch(uint256[] weekIds, uint256[] amounts, bytes32[][] proofs);

    /// INITIALIZER
    
    /**
     * @notice Initializes the contract
     *
     * @param rewardsToken The address of the rewards token
     */
    function initialize(address rewardsToken) external;

    /// FUNCTIONS

    /**
     * @notice Adds a new root to the contract
     *
     * @param index The index for the root
     * @param root The root hash
     * 
     * @dev The index is used to identify the root hash for a given period of time, this could be
     *      a day, a week, a month, etc. Please be aware that the contract can only manage 256 indexes,
     *      so if you want to use a different index for each day, you will need to deploy a new contract
     *      after 256 days.
     * @dev The root hash is the hash of the merkle tree root node
     */
    function addRoot(uint256 index, bytes32 root) external;

    /**
     * @notice Returns the root hash for a given week
     *
     * @param index The index for the root
     * 
     * @return root The root hash
     * 
     * @dev The root hash is the hash of the merkle tree root node
     */
    function getRoot(uint256 index) external view returns (bytes32);

    /**
     * @notice Checks if a user has claimed rewards for a given index
     *
     * @param user The user to check
     * @param index The index for the root
     * 
     * @return hasClaimed True if the user has claimed rewards for the given index
     */
    function hasClaimed(address user, uint256 index) external view returns (bool);
    
    /**
     * @notice Claims rewards for a given index
     *
     * @param index The index for the root
     * @param amount The amount to claim
     * @param proof The merkle proof for the user
     * 
     * @dev The root hash is the hash of the merkle tree root node
     */
    function claim(
        uint256 index,
        uint256 amount,
        bytes32[] calldata proof
    ) external;
    /**
     * @notice Claims rewards for several weeks at once
     *
     * @param weekIds The week numbers to claim
     * @param amounts The amounts to claim for each week
     * @param proofs The merkle proofs for each week
     * 
     * @dev The root hash is the hash of the merkle tree root node
     */
    function claimMultiple(
        uint256[] calldata weekIds,
        uint256[] calldata amounts,
        bytes32[][] calldata proofs
    ) external;

    /**
     * @notice Checks if the user can claim rewards for a given week
     * 
     * @param proof The merkle proof for the user
     * @param week The week number to check
     * @param amount The amount to check
     */
    function canClaim(
        bytes32[] memory proof,
        uint256 week,
        uint256 amount
    ) external view returns (bool);

    /**
     * @notice Allows the owner to withdraw any ERC20 token from the contract
     *
     * @param token The address of the ERC20 token to withdraw
     * @param amount The amount to withdraw
     */
    function emergencyWithdraw(address token, address to, uint256 amount) external;
}
