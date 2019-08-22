import FlightSuretyApp from "./contracts/FlightSuretyApp.json";
import FlightSuretyData from "./contracts/FlightSuretyData.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [FlightSuretyData, FlightSuretyApp],
  // events: {
  //   SimpleStorage: ["StorageSet"],
  // },
  polls: {
    accounts: 1500,
  },
};

export default options;
