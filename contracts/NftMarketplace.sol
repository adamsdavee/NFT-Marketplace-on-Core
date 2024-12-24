// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NftMarketplace is ERC721URIStorage {
    
    //// VARIABLES
    uint256 private tokenIds;
    uint256 private itemsSold;
    uint256 private listingPrice = 0.05 ether;

    address payable owner;

    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    /////// EVENTS

    event idMarketItemCreated(uint256 indexed tokenId, address seller, address owner, uint256 price, bool sold);


    /////// MODIFIERS
    modifier onlyOwner {
        require(msg.sender == owner, "Not owner");
        _;
    }
    constructor() ERC721("NFT Metaverse Token", "MYNFT") {
        owner = payable(msg.sender);
    }

    // function withdraw() public {
    //     // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
    //     // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

    //     require(block.timestamp >= unlockTime, "You can't withdraw yet");
    //     require(msg.sender == owner, "You aren't the owner");

    //     emit Withdrawal(address(this).balance, block.timestamp);

    //     owner.transfer(address(this).balance);
    // }

    //For the owner of the marketplace to increase or reduce listing price for creators
    function updateListingPrice(uint256 _listingPrice) public onlyOwner {
        listingPrice = _listingPrice;
    }

    function getListingprice() public view returns (uint256) {
        return listingPrice;
    }

    /////// Creating NFT Token tokens
    function createToken(string memory tokenURI, uint256 price) public payable returns(uint256) {
        ++tokenIds;

        uint256 newTokenId = tokenIds;
        _mint(msg.sender, newTokenId);
        _setTokenURI(tokenId, tokenURI);

        CreateMarketItem(newTokenId, price);

        return newTokenId;
    }

    /// Create Market Items
    function createMarketItem(unt256 tokenId, uint256 price) private {
        require(price > 0, "price greater than zero");
        require(msg.value == listingPrice, "price not equal to listing price");

        idMarketItem[tokenId] = MarketItem(tokenId, payable(msg.sender), payable(address(this)), price, false);

        transferFrom(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(tokenId, msg.sender, address(this), price, false);
    }

    // Function For Resale Token
    function resellToken(uint256 tokenId, uint256 price) public payable {
        require(idMarketItem[tokenId].owner == msg.sender, "Not owner");
        require(msg.value == listingPrice, "Price not enough");

        idMarketItem[tokenId].price = price;
    }

    function buyNft(uint256 tokenId) public payable {
        uint256 price = idMarketItem[tokenId].price;
        require(msg.value == price, "Not asking price");

        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;

        itemsSold =+ 1;
        transferFrom(address(this), msg.sender, tokenId);

        owner.transfer(listingprice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }
}
