import FlightSuretyApp from '../../build/contracts/FlightSuretyApp.json';
import FlightSuretyData from '../../build/contracts/FlightSuretyData.json';

import Config from './config.json';
import Web3 from 'web3';
import express from 'express';


let config = Config['localhost'];
let web3 = new Web3(new Web3.providers.WebsocketProvider(config.url.replace('http', 'ws')));
web3.eth.defaultAccount = web3.eth.accounts[0];
let flightSuretyApp = new web3.eth.Contract(FlightSuretyApp.abi, config.appAddress);
let flightSuretyData = new web3.eth.Contract(FlightSuretyData.abi, config.dataAddress);
 web3.eth.getAccounts().then(e => console.log(e));


const myContract = new web3.eth.Contract( '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
    from: FlightSuretyApp.json.abi, // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});

const REGISTRATION_FEE = web3.utils.toWei('10', 'ether');


const initializeOracle = async () => {
 let contractAccounts = await web3.eth.getAccounts();

 for(let id = 0; id <= 30; i++)
 let acount = contractAccounts[10 + id];

}

 //make sure acount is registered
 for(let id=10; id < 30; id++) {
 flightSuretyApp.registerOracle(myContract, REGISTRATION_FEE).send({from: FlightSuretyData.accounts[id]})
 
 }
 flightSuretyApp.events.OracleRequest()
 

 for(let id=10; id < 30; id++) {
    flightSuretyApp.registerOracle()
    .send({from: accounts[id], 10 })
 }





flightSuretyApp.registerOracle()



flightSuretyApp.events.OracleRequest({
    fromBlock: 0
  }, function (error, event) {
    if (error) console.log(error)
    console.log(event)
});

const app = express();
app.get('/api', (req, res) => {
    res.send({
      message: 'An API for use with your Dapp!'
    })
})

export default app;


