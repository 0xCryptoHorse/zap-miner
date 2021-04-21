pragma solidity >=0.5.0;

import "./SafeMath.sol";
import "./BerryStorage.sol";
import "./Utilities.sol";

/**
* @title Berry Getters Library
* @dev This is the getter library for all variables in the Berry Tributes system. BerryGetters references this
* libary for the getters logic
*/
library BerryGettersLibrary {
    using SafeMath for uint256;

    event NewBerryAddress(address _newBerry); //emmited when a proposed fork is voted true

    /*Functions*/

    //The next two functions are onlyOwner functions.  For Berry to be truly decentralized, we will need to transfer the Deity to the 0 address.
    //Only needs to be in library
    /**
    * @dev This function allows us to set a new Deity (or remove it)
    * @param _newDeity address of the new Deity of the berry system
    */
    function changeDeity(BerryStorage.BerryStorageStruct storage self, address _newDeity) internal {
        require(self.addressVars[keccak256("_deity")] == msg.sender, "Sender is not deity");
        self.addressVars[keccak256("_deity")] = _newDeity;
    }

    //Only needs to be in library
    /**
    * @dev This function allows the deity to upgrade the Berry System
    * @param _berryContract address of new updated BerryCore contract
    */
    function changeBerryContract(BerryStorage.BerryStorageStruct storage self, address _berryContract) internal {
        require(self.addressVars[keccak256("_deity")] == msg.sender, "Sender is not deity");
        self.addressVars[keccak256("berryContract")] = _berryContract;
        emit NewBerryAddress(_berryContract);
    }

    /*Berry Getters*/

    /**
    * @dev This function tells you if a given challenge has been completed by a given miner
    * @param _challenge the challenge to search for
    * @param _miner address that you want to know if they solved the challenge
    * true if the _miner address provided solved the
    */
    function didMine(BerryStorage.BerryStorageStruct storage self, bytes32 _challenge, address _miner) public view returns (bool) {
        return self.minersByChallenge[_challenge][_miner];
    }

    /**
    * @dev Checks if an address voted in a dispute
    * @param _disputeId to look up
    * @param _address of voting party to look up
    * bool of whether or not party voted
    */
    function didVote(BerryStorage.BerryStorageStruct storage self, uint256 _disputeId, address _address) internal view returns (bool) {
        return self.disputesById[_disputeId].voted[_address];
    }

    /**
    * @dev allows Berry to read data from the addressVars mapping
    * @param _data is the keccak256("variable_name") of the variable that is being accessed.
    * These are examples of how the variables are saved within other functions:
    * addressVars[keccak256("_owner")]
    * addressVars[keccak256("berryContract")]
    */
    function getAddressVars(BerryStorage.BerryStorageStruct storage self, bytes32 _data) internal view returns (address) {
        return self.addressVars[_data];
    }

    /**
    */
    function getAllDisputeVars(BerryStorage.BerryStorageStruct storage self, uint256 _disputeId)
        internal
        view
        returns (bytes32, bool, bool, bool, address, address, address, uint256[9] memory, int256)
    {
        BerryStorage.Dispute storage disp = self.disputesById[_disputeId];
        return (
            disp.hash,
            disp.executed,
            disp.disputeVotePassed,
            disp.isPropFork,
            disp.reportedMiner,
            disp.reportingParty,
            disp.proposedForkAddress,
            [
                disp.disputeUintVars[keccak256("requestId")],
                disp.disputeUintVars[keccak256("timestamp")],
                disp.disputeUintVars[keccak256("value")],
                disp.disputeUintVars[keccak256("minExecutionDate")],
                disp.disputeUintVars[keccak256("numberOfVotes")],
                disp.disputeUintVars[keccak256("blockNumber")],
                disp.disputeUintVars[keccak256("minerSlot")],
                disp.disputeUintVars[keccak256("quorum")],
                disp.disputeUintVars[keccak256("fee")]
            ],
            disp.tally
        );
    }

    /**
    * @dev Getter function for variables for the requestId being currently mined(currentRequestId)
    * current challenge, curretnRequestId, level of difficulty, api/query string, and granularity(number of decimals requested), total tip for the request
    */
    function getCurrentVariables(BerryStorage.BerryStorageStruct storage self)
        internal
        view
        returns (bytes32, uint256, uint256, string memory, uint256, uint256)
    {
        return (
            self.currentChallenge,
            self.uintVars[keccak256("currentRequestId")],
            self.uintVars[keccak256("difficulty")],
            self.requestDetails[self.uintVars[keccak256("currentRequestId")]].queryString,
            self.requestDetails[self.uintVars[keccak256("currentRequestId")]].apiUintVars[keccak256("granularity")],
            self.requestDetails[self.uintVars[keccak256("currentRequestId")]].apiUintVars[keccak256("totalTip")]
        );
    }

    /**
    * @dev Checks if a given hash of miner,requestId has been disputed
    * @param _hash is the sha256(abi.encodePacked(_miners[2],_requestId));
    * uint disputeId
    */
    function getDisputeIdByDisputeHash(BerryStorage.BerryStorageStruct storage self, bytes32 _hash) internal view returns (uint256) {
        return self.disputeIdByDisputeHash[_hash];
    }

    /**
    * @dev Checks for uint variables in the disputeUintVars mapping based on the disuputeId
    * @param _disputeId is the dispute id;
    * @param _data the variable to pull from the mapping. _data = keccak256("variable_name") where variable_name is
    * the variables/strings used to save the data in the mapping. The variables names are
    * commented out under the disputeUintVars under the Dispute struct
    * uint value for the bytes32 data submitted
    */
    function getDisputeUintVars(BerryStorage.BerryStorageStruct storage self, uint256 _disputeId, bytes32 _data)
        internal
        view
        returns (uint256)
    {
        return self.disputesById[_disputeId].disputeUintVars[_data];
    }

    /**
    * @dev Gets the a value for the latest timestamp available
    * value for timestamp of last proof of work submited
    * true if the is a timestamp for the lastNewValue
    */
    function getLastNewValue(BerryStorage.BerryStorageStruct storage self) internal view returns (uint256, bool) {
        return (
            retrieveData(
                self,
                self.requestIdByTimestamp[self.uintVars[keccak256("timeOfLastNewValue")]],
                self.uintVars[keccak256("timeOfLastNewValue")]
            ),
            true
        );
    }

    /**
    * @dev Gets the a value for the latest timestamp available
    * @param _requestId being requested
    * value for timestamp of last proof of work submited and if true if it exist or 0 and false if it doesn't
    */
    function getLastNewValueById(BerryStorage.BerryStorageStruct storage self, uint256 _requestId) internal view returns (uint256, bool) {
        BerryStorage.Request storage _request = self.requestDetails[_requestId];
        if (_request.requestTimestamps.length > 0) {
            return (retrieveData(self, _requestId, _request.requestTimestamps[_request.requestTimestamps.length - 1]), true);
        } else {
            return (0, false);
        }
    }

    /**
    * @dev Gets blocknumber for mined timestamp
    * @param _requestId to look up
    * @param _timestamp is the timestamp to look up blocknumber
    * uint of the blocknumber which the dispute was mined
    */
    function getMinedBlockNum(BerryStorage.BerryStorageStruct storage self, uint256 _requestId, uint256 _timestamp)
        internal
        view
        returns (uint256)
    {
        return self.requestDetails[_requestId].minedBlockNum[_timestamp];
    }

    /**
    * @dev Gets the 5 miners who mined the value for the specified requestId/_timestamp
    * @param _requestId to look up
    * @param _timestamp is the timestamp to look up miners for
    * the 5 miners' addresses
    */
    function getMinersByRequestIdAndTimestamp(BerryStorage.BerryStorageStruct storage self, uint256 _requestId, uint256 _timestamp)
        internal
        view
        returns (address[5] memory)
    {
        return self.requestDetails[_requestId].minersByValue[_timestamp];
    }

    /**
    * @dev Get the name of the token
    * string of the token name
    */
/*    function getName(BerryStorage.BerryStorageStruct storage self) internal pure returns (string memory) {
        return "Berry Tributes";
    }*/

    /**
    * @dev Counts the number of values that have been submited for the request
    * if called for the currentRequest being mined it can tell you how many miners have submitted a value for that
    * request so far
    * @param _requestId the requestId to look up
    * uint count of the number of values received for the requestId
    */
    function getNewValueCountbyRequestId(BerryStorage.BerryStorageStruct storage self, uint256 _requestId) internal view returns (uint256) {
        return self.requestDetails[_requestId].requestTimestamps.length;
    }

    /**
    * @dev Getter function for the specified requestQ index
    * @param _index to look up in the requestQ array
    * uint of reqeuestId
    */
    function getRequestIdByRequestQIndex(BerryStorage.BerryStorageStruct storage self, uint256 _index) internal view returns (uint256) {
        require(_index <= 50, "RequestQ index is above 50");
        return self.requestIdByRequestQIndex[_index];
    }

    /**
    * @dev Getter function for requestId based on timestamp
    * @param _timestamp to check requestId
    * uint of reqeuestId
    */
    function getRequestIdByTimestamp(BerryStorage.BerryStorageStruct storage self, uint256 _timestamp) internal view returns (uint256) {
        return self.requestIdByTimestamp[_timestamp];
    }

    /**
    * @dev Getter function for requestId based on the qeuaryHash
    * @param _queryHash hash(of string api and granularity) to check if a request already exists
    * uint requestId
    */
    function getRequestIdByQueryHash(BerryStorage.BerryStorageStruct storage self, bytes32 _queryHash) internal view returns (uint256) {
        return self.requestIdByQueryHash[_queryHash];
    }

    /**
    * @dev Getter function for the requestQ array
    * the requestQ arrray
    */
    function getRequestQ(BerryStorage.BerryStorageStruct storage self) internal view returns (uint256[51] memory) {
        return self.requestQ;
    }

    /**
    * @dev Allowes access to the uint variables saved in the apiUintVars under the requestDetails struct
    * for the requestId specified
    * @param _requestId to look up
    * @param _data the variable to pull from the mapping. _data = keccak256("variable_name") where variable_name is
    * the variables/strings used to save the data in the mapping. The variables names are
    * commented out under the apiUintVars under the requestDetails struct
    * uint value of the apiUintVars specified in _data for the requestId specified
    */
    function getRequestUintVars(BerryStorage.BerryStorageStruct storage self, uint256 _requestId, bytes32 _data)
        internal
        view
        returns (uint256)
    {
        return self.requestDetails[_requestId].apiUintVars[_data];
    }

    /**
    * @dev Gets the API struct variables that are not mappings
    * @param _requestId to look up
    * string of api to query
    * string of symbol of api to query
    * bytes32 hash of string
    * bytes32 of the granularity(decimal places) requested
    * uint of index in requestQ array
    * uint of current payout/tip for this requestId
    */
    function getRequestVars(BerryStorage.BerryStorageStruct storage self, uint256 _requestId)
        internal
        view
        returns (string memory, string memory, bytes32, uint256, uint256, uint256)
    {
        BerryStorage.Request storage _request = self.requestDetails[_requestId];
        return (
            _request.queryString,
            _request.dataSymbol,
            _request.queryHash,
            _request.apiUintVars[keccak256("granularity")],
            _request.apiUintVars[keccak256("requestQPosition")],
            _request.apiUintVars[keccak256("totalTip")]
        );
    }

    /**
    * @dev This function allows users to retireve all information about a staker
    * @param _staker address of staker inquiring about
    * uint current state of staker
    * uint startDate of staking
    */
    function getStakerInfo(BerryStorage.BerryStorageStruct storage self, address _staker) internal view returns (uint256, uint256) {
        return (self.stakerDetails[_staker].currentStatus, self.stakerDetails[_staker].startDate);
    }

    /**
    * @dev Gets the 5 miners who mined the value for the specified requestId/_timestamp
    * @param _requestId to look up
    * @param _timestamp is the timestampt to look up miners for
    * address[5] array of 5 addresses ofminers that mined the requestId
    */
    function getSubmissionsByTimestamp(BerryStorage.BerryStorageStruct storage self, uint256 _requestId, uint256 _timestamp)
        internal
        view
        returns (uint256[5] memory)
    {
        return self.requestDetails[_requestId].valuesByTimestamp[_timestamp];
    }

    /**
    * @dev Get the symbol of the token
    * string of the token symbol
    */
/*    function getSymbol(BerryStorage.BerryStorageStruct storage self) internal pure returns (string memory) {
        return "TT";
    }*/

    /**
    * @dev Gets the timestamp for the value based on their index
    * @param _requestID is the requestId to look up
    * @param _index is the value index to look up
    * uint timestamp
    */
    function getTimestampbyRequestIDandIndex(BerryStorage.BerryStorageStruct storage self, uint256 _requestID, uint256 _index)
        internal
        view
        returns (uint256)
    {
        return self.requestDetails[_requestID].requestTimestamps[_index];
    }

    /**
    * @dev Getter for the variables saved under the BerryStorageStruct uintVars variable
    * @param _data the variable to pull from the mapping. _data = keccak256("variable_name") where variable_name is
    * the variables/strings used to save the data in the mapping. The variables names are
    * commented out under the uintVars under the BerryStorageStruct struct
    * This is an example of how data is saved into the mapping within other functions:
    * self.uintVars[keccak256("stakerCount")]
    * uint of specified variable
    */
    function getUintVar(BerryStorage.BerryStorageStruct storage self, bytes32 _data) internal view returns (uint256) {
        return self.uintVars[_data];
    }

    /**
    * @dev Getter function for next requestId on queue/request with highest payout at time the function is called
    * onDeck/info on request with highest payout-- RequestId, Totaltips, and API query string
    */
    function getVariablesOnDeck(BerryStorage.BerryStorageStruct storage self) internal view returns (uint256, uint256, string memory) {
        uint256 newRequestId = getTopRequestID(self);
        return (
            newRequestId,
            self.requestDetails[newRequestId].apiUintVars[keccak256("totalTip")],
            self.requestDetails[newRequestId].queryString
        );
    }

    /**
    * @dev Getter function for the request with highest payout. This function is used within the getVariablesOnDeck function
    * uint _requestId of request with highest payout at the time the function is called
    */
    function getTopRequestID(BerryStorage.BerryStorageStruct storage self) internal view returns (uint256 _requestId) {
        uint256 _max;
        uint256 _index;
        (_max, _index) = Utilities.getMax(self.requestQ);
        _requestId = self.requestIdByRequestQIndex[_index];
    }

    /**
    * @dev Gets the 5 miners who mined the value for the specified requestId/_timestamp
    * @param _requestId to looku p
    * @param _timestamp is the timestamp to look up miners for
    * bool true if requestId/timestamp is under dispute
    */
    function isInDispute(BerryStorage.BerryStorageStruct storage self, uint256 _requestId, uint256 _timestamp) internal view returns (bool) {
        return self.requestDetails[_requestId].inDispute[_timestamp];
    }

    /**
    * @dev Retreive value from oracle based on requestId/timestamp
    * @param _requestId being requested
    * @param _timestamp to retreive data/value from
    * uint value for requestId/timestamp submitted
    */
    function retrieveData(BerryStorage.BerryStorageStruct storage self, uint256 _requestId, uint256 _timestamp)
        internal
        view
        returns (uint256)
    {
        return self.requestDetails[_requestId].finalValues[_timestamp];
    }

    /**
    * @dev Getter for the total_supply of oracle tokens
    * uint total supply
    */
    function totalSupply(BerryStorage.BerryStorageStruct storage self) internal view returns (uint256) {
        return self.uintVars[keccak256("total_supply")];
    }

}
