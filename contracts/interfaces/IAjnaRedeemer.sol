// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

interface IAjnaRedeemer {
    function deploymentWeek() external returns (uint256);

    /**
     * @dev Returns the current week number based on the timestamp of the latest mined block.
     * Uses integer division to calculate the number of elapsed seconds since the Unix epoch (1970-01-01T00:00:00Z),
     * then divides by the number of seconds in a week to get the number of elapsed weeks.
     * @return The current week number as a uint256.
     */
    function getCurrentWeek() external view returns (uint256);

    /**
     * @dev Add a Merkle root for a given week.
     * @param week The current week for which the Merkle root is being added.
     * @param root The Merkle root to be added.
     * Emits a {RootAdded} event indicating that a new root has been added for the specified week.
     * Requirements:
     * - Only the operator role can call this function.
     * - The specified week must be greater than or equal to the current week.
     * - The Merkle root for the specified week must not have already been added.
     * - The transfer operation to retrieve the tokens to be dripped from the dripper contract must succeed.
     */
    function addRoot(uint256 week, bytes32 root) external;

    /**
     * @dev Retrieve the Merkle root for a specified week.
     * @param week The week for which to retrieve the Merkle root.
     * @return The Merkle root for the specified week.
     * Requirements:
     * - The Merkle root for the specified week must have been added previously.
     */
    function getRoot(uint256 week) external view returns (bytes32);

    /**
     * @dev Claim tokens for multiple weeks using a list of Merkle proofs and amounts.
     * @param _weeks An array containing the week numbers for each claim.
     * @param amounts An array containing the amount of tokens to claim for each week.
     * @param proofs An array containing the Merkle proof for each claim.
     * Requirements:
     * - The number of weeks, amounts, and proofs arrays must be the same.
     * - Each claim must not have been previously claimed.
     * - The total number of tokens being claimed must be available in the contract balance.
     * - Each Merkle proof must be valid for its respective claim and week.
     * Emits a {Claimed} event for each successful claim.
     */
    function claimMultiple(
        uint256[] calldata _weeks,
        uint256[] calldata amounts,
        bytes32[][] calldata proofs
    ) external;

    /**
     * @dev Check if a given user can claim a specified amount of tokens for a designated week using a Merkle proof.
     * @param proof The Merkle proof for the claim.
     * @param week The week number for the claim.
     * @param amount The amount of tokens to be claimed.
     * Returns true if the Merkle proof is valid for the given parameters, and false otherwise.
     */
    function canClaim(
        bytes32[] memory proof,
        uint256 week,
        uint256 amount
    ) external view returns (bool);

    function emergencyWithdraw() external;
}
