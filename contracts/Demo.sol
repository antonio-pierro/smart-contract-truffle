pragma solidity ^0.4.17;

contract Demo {

    string public name = 'Antonio';

    address public owner = msg.sender;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function setName(string _name) public onlyOwner {
        name = _name;
    }
}
