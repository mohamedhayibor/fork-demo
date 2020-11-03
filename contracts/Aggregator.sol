//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

abstract contract Router {
  function getAmountsOut(uint amountIn, address[] memory path) public virtual view returns (uint[] memory amounts);
}

contract Aggregator {
  Router uniRouter;
  Router sushiRouter;

  constructor(address uniRouter, address sushiRouter) {
    uniRouter = Router(uniRouter);
    sushiRouter = Router(sushiRouter);
  }

  function getPrices(address[] memory path, uint inputAmount) public view returns (uint[2] memory prices) {
    uint uniPrice = getUniswapPrice(path, inputAmount);
    uint sushiPrice = getSushiPrice(path, inputAmount);
    return [uniPrice, sushiPrice];
  }

  function getUniswapPrice(address[] memory path, uint inputAmount) public view returns (uint) {
    return uniRouter.getAmountsOut(inputAmount, path)[0];
  }

  function getSushiPrice(address[] memory path, uint inputAmount) public view returns (uint) {
    return sushiRouter.getAmountsOut(inputAmount, path)[0];
  }
}
