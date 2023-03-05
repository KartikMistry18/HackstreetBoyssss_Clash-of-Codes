// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract LendingContract {
    
    // Variables
    mapping(address => uint) public balances;
    mapping(address => uint) public loanAmounts;
    mapping(address => uint) public loanInterests;
    mapping(address => uint) public loanCollaterals;
    uint public totalCollateral;
    
    // Events
    event Deposit(address indexed _from, uint _value);
    event Borrow(address indexed _from, uint _loanAmount, uint _loanInterest, uint _loanCollateral);
    event Repay(address indexed _from, uint _repayAmount);
    event Liquidate(address indexed _from, address indexed _to, uint _collateralAmount);
    
    // Deposit function
    function deposit() public payable {
        require(msg.value > 0, "Deposit value must be greater than 0");
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }
    
    // Borrow function
    function borrow(uint _loanAmount, uint _loanInterest, uint _loanCollateral) public {
        require(_loanAmount > 0, "Loan amount must be greater than 0");
        require(balances[msg.sender] >= _loanCollateral, "Insufficient collateral");
        loanAmounts[msg.sender] = _loanAmount;
        loanInterests[msg.sender] = _loanInterest;
        loanCollaterals[msg.sender] = _loanCollateral;
        totalCollateral += _loanCollateral;
        balances[msg.sender] -= _loanCollateral;
        emit Borrow(msg.sender, _loanAmount, _loanInterest, _loanCollateral);
    }
    
    // Repay function
    function repay() public payable {
        require(msg.value > 0, "Repay value must be greater than 0");
        require(balances[msg.sender] >= msg.value, "Insufficient balance");
        balances[msg.sender] -= msg.value;
        loanAmounts[msg.sender] -= msg.value;
        emit Repay(msg.sender, msg.value);
    }
    
    // Liquidate function
    function liquidate(address _borrower) public {
        require(loanAmounts[_borrower] > 0, "No loan amount to liquidate");
        require(totalCollateral > 0, "No collateral to liquidate");
        uint liquidationAmount = loanAmounts[_borrower] + loanInterests[_borrower];
        require(balances[msg.sender] >= liquidationAmount, "Insufficient balance");
        balances[msg.sender] -= liquidationAmount;
        balances[_borrower] += loanCollaterals[_borrower];
        totalCollateral -= loanCollaterals[_borrower];
        loanAmounts[_borrower] = 0;
        loanInterests[_borrower] = 0;
        loanCollaterals[_borrower] = 0;
        emit Liquidate(msg.sender, _borrower, loanCollaterals[_borrower]);
    }
}