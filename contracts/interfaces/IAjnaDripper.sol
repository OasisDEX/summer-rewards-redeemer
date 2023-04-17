// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
import { IAjnaRedeemer } from "./IAjnaRedeemer.sol";

interface IAjnaDripper {
    //TODO: add documentation
    function emergencyWithdraw() external;

    /**
     * @dev Gets the current week number since the UNIX epoch.
     *
     * The week is defined as a 7 day period starting from Thursday at 00:00:00 UTC. This means that
     * the week number changes on Thursdays, and that Thursday is always considered part of the current week.
     *
     * @return The current week number since the UNIX epoch.
     */
    function getCurrentWeek() external view returns (uint256);

    /**
     * @dev Changes the amount that is dripped weekly to the token holders.
     * Only the contract owner can call this function. The new amount must be greater than 0
     * and less than 110% of the current weekly amount.
     *
     * Note: The timestamp of the last update is checked to ensure that the function cannot be called
     * more frequently than once every 4 weeks.
     *
     * @param _newAmount The new amount to drip weekly.
     *
     * Requirements:
     * - `_newAmount` must be greater than 0 and less than 110% of the current weekly amount.
     * - The time since the last update must be at least 4 weeks.
     */
    function changeWeeklyAmount(uint256 _newAmount) external;

    /**
     * @dev Changes the contract that is responsible for redeeming tokens.
     * Only the contract owner can call this function. The new redeemer address must implement
     * the IAjnaRedeemer interface and have a valid deployment week.
     *
     * Note: The deployment week of the new redeemer is checked to ensure that it is valid.
     *
     * @param _redeemer The new redeemer contract address.
     *
     * Requirements:
     * - `_redeemer` must be a valid contract address.
     * - `_redeemer` must implement the IAjnaRedeemer interface.
     * - `_redeemer` must have a valid deployment week.
     */
    function changeRedeemer(IAjnaRedeemer _redeemer) external;

    /**
     * @dev Transfers a fixed amount of tokens to the redeemer, but only if the current week has changed since the last drip.
     * @return status A boolean indicating whether the transfer was successful.
     *
     * Requirements:
     *  - The caller must be the redeemer.
     *  - The current week must be different than the last week that the function was called.
     *  - The transfer must succeed.
     *
     * Emits a {Transfer} event.
     */
    function drip() external returns (bool status);
}
