// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Calend3 {
    uint rate;
    address owner;

    constructor(){
        owner=msg.sender;
    }

    function getRate () view public returns(uint){
        return rate;
    }
     function setRate (uint _rate) public{  
        require(msg.sender==owner,"Only owner can set the rate");
        rate=_rate;
     }
     
}
