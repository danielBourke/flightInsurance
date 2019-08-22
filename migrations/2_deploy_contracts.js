const FlightSuretyApp = artifacts.require("FlightSuretyApp");
const FlightSuretyData = artifacts.require("FlightSuretyData");

module.exports = function(deployer) {
  deployer.deploy(FlightSuretyApp);
  deployer.deploy(FlightSuretyData);
};
