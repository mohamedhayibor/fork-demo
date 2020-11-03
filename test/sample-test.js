const { expect } = require("chai");

const UNI_ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
const SUSHI_ROUTER = "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F"
const DAI = "0x6b175474e89094c44da98b954eedeac495271d0f"
const WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"

describe("Aggregator", function() {
  it("Should return the correct prices for Uniswap and SushiSwap", async function() {
    const Aggregator = await ethers.getContractFactory("Aggregator");
    const agg = await Aggregator.deploy(UNI_ROUTER, SUSHI_ROUTER);
    
    await agg.deployed();
    const prices = await agg.getPrices([WETH, DAI], 100)
    console.log("Uni: " + prices[0].toString());
    console.log("Sushi: " + prices[1].toString());
  });
});
