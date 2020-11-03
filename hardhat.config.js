require("@nomiclabs/hardhat-waffle");
const URL = process.env.URL

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: URL
      }
    }
  },
  solidity: "0.7.4",
};

