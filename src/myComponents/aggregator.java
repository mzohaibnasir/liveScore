//SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;


import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
contract FundMe{
    // uint256 public number;

    uint256 public minimumUSD=50;
    function fund()public payable{
        /*Every transaction will have 
        -nonce,
        -GasPrice
        -GasLimit
        -to
        -value
        -data
        -v,r,s compomemts of tx signature
        */
        // smart contracts can hold fund just like wallets. 
        // msg.value:means how much value is being sent
        // number=5;// first number will be initialized 5 , but  because of require it will be undone to 0// gas is spent on changing to 5 and remaining gas is returnrd
        //we want people to send atleast 1 eth
        require(msg.value>=minimumUSD,"Didn't went theough. Send more than 1 eth!"); //money math is done in terms of wei
        // require(condiyion, revert(undo any action that has happened before and send remaining gas back))
    }

    function getPrice()public{
        //to interact with contract outside project we need ABI and address
        // -get contract address from ethDATA feeds: 0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
        // ABI: getting ABI with help of interfaces. when we get interfaces, we get ABI. function definitons are going to be stored in contracts
        // ABI = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e).version()
        AggregatorV3Interface priceFeed=AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
        (,int price ,, ,)=priceFeed.latestRoundData();
        //price of eth in terms of USD
        // solidity doen't work with decimals but it shows a flag showing # of decimals associated with priceFeed.we can even call decimal fn in priceFeed
    }

    function getVersion() public view returns(uint256){
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
        return priceFeed.version();
        // interfaces are compiled down to ABI and thenwe combine ABI to the address of contract to call a function.

    }
    function getConversionRate()public{}

    function withdraw()public{}
}


// IMPORTING AGGREGATORV3INTERFACE
// -copy code from github same it as AggregatorV3Interface and import it
// OR
// import directly from github
// import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
// npm install @chainlink/contracts --save