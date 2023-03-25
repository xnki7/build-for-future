require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const POLYGON_MUMBAI_RPC = process.env.POLYGON_MUMBAI_RPC;
const POLYGON_MUMBAI_KEY = process.env.POLYGON_MUMBAI_KEY;

module.exports = {
  solidity: "0.8.17",

  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
      gas: 50000000,
      maxFeePerGas: 250000000000,
      maxPriorityFeePerGas: 250000000000,
    },
    goerli: {
      chainId: 5,
      blockConfirmations: 6,
      url: GOERLI_RPC_URL,
      accounts: [GOERLI_PK],
      gas: 50000000,
      maxFeePerGas: 250000000000,
      maxPriorityFeePerGas: 250000000000,
    },
    polygon: {
      chainId: 80001,
      blockConfirmations: 6,
      url: POLYGON_MUMBAI_RPC,
      accounts: [POLYGON_MUMBAI_KEY],
      gas: 50000000,
      maxFeePerGas: 250000000000,
      maxPriorityFeePerGas: 250000000000,
    },
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
};
