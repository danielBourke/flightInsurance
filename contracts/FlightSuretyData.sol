pragma solidity ^0.5.0;

import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract FlightSuretyData {
    using SafeMath for uint256;

    /********************************************************************************************/
    /*                                       DATA VARIABLES                                     */
    /********************************************************************************************/
    address private contractOwner;                                      // Account used to deploy contract
    bool private operational = true;                                    // Blocks all state changes throughout the contract if false

    /********************************************************************************************/
    /*                                       EVENT DEFINITIONS                                  */
    /********************************************************************************************/
    mapping(address => uint256) authorizedContracts;

    mapping(address => AirLine) registeredAirLines;

    mapping(address => Passenger) public Insured;

    uint256 private Balance = 0 ether;

    struct Passenger {
        bool Insured;
        uint256[] Paid;
        mapping(string => flight) flights;
    }

    struct flight {
        string name;
        uint time;
    }
    struct AirLine {
        Status status;
        bool isFunded;
        uint airline_address;
    }

uint registeredAirlineCount = 0;

uint internal registeredCount = 0;


enum Status {unregistered, registered }

mapping (address=>AirLine) internal airlines;

    /**
    * @dev Constructor
    *      The deploying account becomes contractOwner
    */

    constructor
                                (
                                ) 
                                public 
    {
        contractOwner = msg.sender;
        airlines[contractOwner].status = Status.registered;
        registeredCount ++;
    }




    /********************************************************************************************/
    /*                                       FUNCTION MODIFIERS                                 */
    /********************************************************************************************/

    // Modifiers help avoid duplication of code. They are typically used to validate something
    // before a function is allowed to be executed.

    /**
    * @dev Modifier that requires the "operational" boolean variable to be "true"
    *      This is used on all state changing functions to pause the contract in 
    *      the event there is an issue that needs to be fixed
    */
    modifier requireIsOperational() 
    {
        require(operational, "Contract is currently not operational");
        _;  // All modifiers require an "_" which indicates where the function body will be added
    }

    /**
    * @dev Modifier that requires the "ContractOwner" account to be the function caller
    */
    modifier requireContractOwner()
    {
        require(msg.sender == contractOwner, "Caller is not contract owner");
        _;
    }

        modifier isCallerAuthorized()
    {
      require(authorizedContracts[msg.sender] == 1, "The contract is not authorized");
        _;
    }

    /********************************************************************************************/
    /*                                       UTILITY FUNCTIONS                                  */
    /********************************************************************************************/

    /**
    * @dev Get operating status of contract
    *
    * @return A bool that is the current operating status
    */    



    function registerAirline(address _airline) external {
        registeredAirLines[_airline] = Airline({status: registered, isFunded: false, airline_address: _airline });
        registeredAirlineCount++;

    }

    function authorizedContract(address dataContract) external requireContractOwner(){
        authorizedContracts[dataContract] = 1;
    }
        function deauthorizedContract(address dataContract) external requireContractOwner(){
      delete  authorizedContracts[dataContract];
    }

    function isOperational() 
                            public 
                            view 
                            returns(bool) 
    {
        return operational;
    }


    /**
    * @dev Sets contract operations on/off
    *
    * When operational mode is disabled, all write transactions except for this one will fail
    */    
    function setOperatingStatus
                            (
                                bool mode
                            ) 
                            external
                            requireContractOwner 
    {
        operational = mode;
    }

    /********************************************************************************************/
    /*                                     SMART CONTRACT FUNCTIONS                             */
    /********************************************************************************************/

   /**
    * @dev Add an airline to the registration queue
    *      Can only be called from FlightSuretyApp contract
    *
    */   
    function registerAirline
                            (   
                            )
                            external
                             payable
    {
        require(msg.value == 10 ether);
    }


   /**
    * @dev Buy insurance for a flight
    *
    */   
    function buy
                            (   
                                string memory _flightPurchase,

                                uint256 _amount
                            )
                            external
                            payable
    {

            Insured[Passenger].Paid.push(_amount);
            Insured[Passenger].flights.push(_flightPurchase);
            
            Balance = Balance.add(_amount);
            Passengers[_flightPurchase].push(msg.sender)
    }

    /**
     *  @dev Credits payouts to insurees
    */
    function creditInsurees
                                (
                                    bytes32 index
                                )
                                external
                                pure
    {
        delete Insured.Paid[index];
        return Insured.Paid[index];
    }
    

    /**
     *  @dev Transfers eligible payout funds to insuree
     *
    */
    function pay
                            (
                            )
                            external
                            pure
    {
    }

   /**
    * @dev Initial funding for the insurance. Unless there are too many delayed flights
    *      resulting in insurance payouts, the contract should be self-sustaining
    *
    */   
    function fund
                            (   
                            )
                            public
                            payable
    {
    }

    function getFlightKey
                        (
                            address airline,
                            string memory flight,
                            uint256 timestamp
                        )
                        pure
                        internal
                        returns(bytes32) 
    {
        return keccak256(abi.encodePacked(airline, flight, timestamp));
    }

    /**
    * @dev Fallback function for funding smart contract.
    *
    */
    function() 
                            external 
                            payable 
    {
        fund();
    }


}

