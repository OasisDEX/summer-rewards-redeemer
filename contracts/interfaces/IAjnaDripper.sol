// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
import { IAjnaRedeemer } from "./IAjnaRedeemer.sol";

interface IAjnaDripper {
    // @deprecated
    function emergencyWithdraw() external;

    /**
     * @dev Gets the current week number since the UNIX epoch.
     *
     * The week is defined as a 7 day period starting from Thursday at 00:00:00 UTC. This means that
     * the week number changes on Thursdays, and that Thursday is always considered part of the current week.
     *
     * Effects:
     * - Calculates the current week by dividing the block timestamp by 1 week.
     *
     * @return The current week number since the UNIX epoch as a uint256 value.
     */
    function getCurrentWeek() external view returns (uint256);

    /**
     * @dev Changes the weekly amount of tokens to be distributed, given new input '_newAmount' and updates the 'lastUpdate' timestamp.
     * @param _newAmount The new value representing the weekly amount of tokens to be distributed.
     *
     * Requirements:
     * - Only the user with 'DEFAULT_ADMIN_ROLE' can call this function.
     * - '_newAmount' must be greater than 0, but less than 110% of the current weeklyAmount.
     * - 'lastUpdate' timestamp should be at least 4 weeks prior to the current block.timestamp.
     * Effects:
     * - Updates the value of the 'weeklyAmount' variable to the new input '_newAmount'.
     * - Updates the value of 'lastUpdate' to the current block.timestamp.
     */

    function changeWeeklyAmount(uint256 _newAmount) external;

    /**
     * @dev Changes the address of the designated 'redeemer' by revoking the previous 'REDEEMER_ROLE' and granting it to the new 'IAjnaRedeemer' instance.
     * @param _redeemer The new 'IAjnaRedeemer' instance to be designated as the 'redeemer'.
     *
     * Requirements:
     * - Only the user with 'DEFAULT_ADMIN_ROLE' can call this function.
     *
     * Effects:
     * - Revokes the previous designated 'redeemer' role from its address.
     * - Grants the 'REDEEMER_ROLE' to the new 'IAjnaRedeemer' instance address.
     * - Sets the 'redeemer' variable to the new 'IAjnaRedeemer' instance.
     */
    function changeRedeemer(IAjnaRedeemer _redeemer) external;

    /**
     * @dev Allows the contract with 'REDEEMER_ROLE' to transfer a weekly amount of tokens to the designated 'redeemer' address.
     * @param week The week number for which to initiate the drip.
     * @return status A boolean indicating whether the token transfer was successful or not.
     *
     * Requirements:
     * - Only the user with 'REDEEMER_ROLE' can call this function.
     * - The weekly drip should not have already taken place for the given week.
     * - The requested week should not be earlier than the deployment week of the dripper contract and not later than the current week.
     *
     * Effects:
     * - Marks the given week as dripped in the 'weeklyDrip' mapping.
     * - Transfers the weekly amount of AJNA tokens to the 'redeemer' address.
     * - Emits a 'Dripped' event with the information about the week and the amount dripped.
     */

    function drip(uint256 week) external returns (bool status);
}
