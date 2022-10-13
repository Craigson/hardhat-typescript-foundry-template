pragma solidity 0.8.15;

import "forge-std/Test.sol";

contract DemoTest is Test {
    event Success();

    // function setUp() external {}

    function test_demo() external {
        // assertEq(2, 2);
        emit Success();
    }
}
