require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${ process.env.INFURA_ID }`
      }
    }
  },
  solidity: "0.7.4",
};

