// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract Swap {

    address public owner;
    uint balance = 0;

    constructor() public {
        owner = msg.sender;
    }

    receive() external payable {
        balance = 0;
    }

    fallback() external payable {}

}