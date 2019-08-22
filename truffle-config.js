const path = require("path");



const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = "";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    rinkeby: {
      provider: function() {
          return new HDWalletProvider(mnemonic, "");
      },
      network_id: 4,
      gas: 7000000,
      gasPrice: 10000000000
  }
  }
};