/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ZapDispute } from "../ZapDispute";

export class ZapDispute__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: ZapDisputeLibraryAddresses,
    signer?: Signer
  ) {
    super(_abi, ZapDispute__factory.linkBytecode(linkLibraryAddresses), signer);
  }

  static linkBytecode(
    linkLibraryAddresses: ZapDisputeLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$946cc509dcf4b4c97ecabc42418c409021\\$__", "g"),
      linkLibraryAddresses["__$946cc509dcf4b4c97ecabc42418c409021$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZapDispute> {
    return super.deploy(overrides || {}) as Promise<ZapDispute>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ZapDispute {
    return super.attach(address) as ZapDispute;
  }
  connect(signer: Signer): ZapDispute__factory {
    return super.connect(signer) as ZapDispute__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZapDispute {
    return new Contract(address, _abi, signerOrProvider) as ZapDispute;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "self",
        type: "ZapStorage.ZapStorageStruct storage",
      },
      {
        name: "_disputeId",
        type: "uint256",
      },
    ],
    name: "tallyVotes",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "self",
        type: "ZapStorage.ZapStorageStruct storage",
      },
      {
        name: "_requestId",
        type: "uint256",
      },
      {
        name: "_timestamp",
        type: "uint256",
      },
      {
        name: "_minerIndex",
        type: "uint256",
      },
    ],
    name: "beginDispute",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "self",
        type: "ZapStorage.ZapStorageStruct storage",
      },
      {
        name: "_propNewZapAddress",
        type: "address",
      },
    ],
    name: "proposeFork",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "self",
        type: "ZapStorage.ZapStorageStruct storage",
      },
    ],
    name: "updateDisputeFee",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "self",
        type: "ZapStorage.ZapStorageStruct storage",
      },
      {
        name: "_disputeId",
        type: "uint256",
      },
      {
        name: "_supportsDispute",
        type: "bool",
      },
    ],
    name: "vote",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_disputeId",
        type: "uint256",
      },
      {
        indexed: true,
        name: "_requestId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "_timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        name: "_miner",
        type: "address",
      },
    ],
    name: "NewDispute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_disputeID",
        type: "uint256",
      },
      {
        indexed: false,
        name: "_position",
        type: "bool",
      },
      {
        indexed: true,
        name: "_voter",
        type: "address",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_disputeID",
        type: "uint256",
      },
      {
        indexed: false,
        name: "_result",
        type: "int256",
      },
      {
        indexed: true,
        name: "_reportedMiner",
        type: "address",
      },
      {
        indexed: false,
        name: "_reportingParty",
        type: "address",
      },
      {
        indexed: false,
        name: "_active",
        type: "bool",
      },
    ],
    name: "DisputeVoteTallied",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_newZap",
        type: "address",
      },
    ],
    name: "NewZapAddress",
    type: "event",
  },
];

const _bytecode =
  "0x6123bc610030600b82828239805160001a6073146000811461002057610022565bfe5b5030600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061007e576000357c0100000000000000000000000000000000000000000000000000000000900480633cedafe51461008357806360dd6c35146100c8578063804b8931146101215780639264b8881461017c578063bcc7a8a8146101b7575b600080fd5b81801561008f57600080fd5b506100c6600480360360408110156100a657600080fd5b810190808035906020019092919080359060200190929190505050610208565b005b8180156100d457600080fd5b5061011f600480360360808110156100eb57600080fd5b8101908080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610d86565b005b81801561012d57600080fd5b5061017a6004803603604081101561014457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061173a565b005b81801561018857600080fd5b506101b56004803603602081101561019f57600080fd5b8101908080359060200190929190505050611d2a565b005b8180156101c357600080fd5b50610206600480360360608110156101da57600080fd5b810190808035906020019092919080359060200190929190803515159060200190929190505050611fa7565b005b60008260440160008381526020019081526020016000209050600083604801600083600501600060405180807f72657175657374496400000000000000000000000000000000000000000000008152506009019050604051809103902081526020019081526020016000205481526020019081526020016000209050600015158260020160009054906101000a900460ff1615151415156102a857600080fd5b81600501600060405180807f6d696e457865637574696f6e4461746500000000000000000000000000000000815250601001905060405180910390208152602001908152602001600020544211151561030057600080fd5b600015158260020160029054906101000a900460ff1615151415610a665760008460470160008460020160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600083600101541315610802576000816000018190555062015180428115156103ac57fe5b064203816001018190555084604001600060405180807f7374616b6572436f756e74000000000000000000000000000000000000000000815250600b01905060405180910390208152602001908152602001600020600081548092919060019003919050555061041b85611d2a565b73__$946cc509dcf4b4c97ecabc42418c409021$__63a93a4d03868560020160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1689604001600060405180807f7374616b65416d6f756e74000000000000000000000000000000000000000000815250600b01905060405180910390208152602001908152602001600020546040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060006040518083038186803b15801561058857600080fd5b505af415801561059c573d6000803e3d6000fd5b5050505073__$946cc509dcf4b4c97ecabc42418c409021$__63a93a4d0386308660030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1687600501600060405180807f6665650000000000000000000000000000000000000000000000000000000000815250600301905060405180910390208152602001908152602001600020546040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060006040518083038186803b1580156106e957600080fd5b505af41580156106fd573d6000803e3d6000fd5b5050505060018360020160016101000a81548160ff0219169083151502179055506001151582600701600085600501600060405180807f74696d657374616d70000000000000000000000000000000000000000000000081525060090190506040518091039020815260200190815260200160002054815260200190815260200160002060009054906101000a900460ff16151514156107fd57600082600601600085600501600060405180807f74696d657374616d700000000000000000000000000000000000000000000000815250600901905060405180910390208152602001908152602001600020548152602001908152602001600020819055505b610a60565b6001816000018190555073__$946cc509dcf4b4c97ecabc42418c409021$__63a93a4d0386308660020160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1687600501600060405180807f6665650000000000000000000000000000000000000000000000000000000000815250600301905060405180910390208152602001908152602001600020546040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060006040518083038186803b15801561095557600080fd5b505af4158015610969573d6000803e3d6000fd5b505050506001151582600701600085600501600060405180807f74696d657374616d70000000000000000000000000000000000000000000000081525060090190506040518091039020815260200190815260200160002054815260200190815260200160002060009054906101000a900460ff1615151415610a5f57600082600701600085600501600060405180807f74696d657374616d70000000000000000000000000000000000000000000000081525060090190506040518091039020815260200190815260200160002054815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b50610c77565b600082600101541315610c76576064601485604001600060405180807f746f74616c5f737570706c790000000000000000000000000000000000000000815250600c019050604051809103902081526020019081526020016000205402811515610acc57fe5b0482600501600060405180807f71756f72756d000000000000000000000000000000000000000000000000000081525060060190506040518091039020815260200190815260200160002054111515610b2457600080fd5b8160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684603f01600060405180807f7a6170436f6e7472616374000000000000000000000000000000000000000000815250600b0190506040518091039020815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018260020160016101000a81548160ff0219169083151502179055507f4a9a276906262ed9ed5e1fd15850a5f2b951b97198cc2fc0d32625f1bf3ab2708260040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5b60018260020160006101000a81548160ff0219169083151502179055508160020160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16837f21459c2f5447ebcf83a7f0a238c32c71076faef0d12295e771c0cb1e1043473984600101548560030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660020160019054906101000a900460ff16604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182151515158152602001935050505060405180910390a350505050565b60008460480160008581526020019081526020016000209050609081600501600085815260200190815260200160002054430311151515610dc657600080fd5b600081600501600085815260200190815260200160002054111515610dea57600080fd5b600582101515610df957600080fd5b600081600801600085815260200190815260200160002083600581101515610e1d57fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000818686604051602001808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018381526020018281526020019350505050604051602081830303815290604052805190602001209050600087604a01600083815260200190815260200160002054141515610edb57600080fd5b73__$946cc509dcf4b4c97ecabc42418c409021$__63a93a4d038833308b604001600060405180807f6469737075746546656500000000000000000000000000000000000000000000815250600a01905060405180910390208152602001908152602001600020546040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060006040518083038186803b15801561100057600080fd5b505af4158015611014573d6000803e3d6000fd5b50505050600187604001600060405180807f64697370757465436f756e740000000000000000000000000000000000000000815250600c01905060405180910390208152602001908152602001600020540187604001600060405180807f64697370757465436f756e740000000000000000000000000000000000000000815250600c0190506040518091039020815260200190815260200160002081905550600087604001600060405180807f64697370757465436f756e740000000000000000000000000000000000000000815250600c019050604051809103902081526020019081526020016000205490508088604a0160008481526020019081526020016000208190555061010060405190810160405280838152602001600081526020016000151581526020016000151581526020016000151581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815250886044016000838152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548160ff02191690831515021790555060608201518160020160016101000a81548160ff02191690831515021790555060808201518160020160026101000a81548160ff02191690831515021790555060a08201518160020160036101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505086886044016000838152602001908152602001600020600501600060405180807f72657175657374496400000000000000000000000000000000000000000000008152506009019050604051809103902081526020019081526020016000208190555085886044016000838152602001908152602001600020600501600060405180807f74696d657374616d70000000000000000000000000000000000000000000000081525060090190506040518091039020815260200190815260200160002081905550836009016000878152602001908152602001600020856005811015156113ee57fe5b0154886044016000838152602001908152602001600020600501600060405180807f76616c75650000000000000000000000000000000000000000000000000000008152506005019050604051809103902081526020019081526020016000208190555062093a804201886044016000838152602001908152602001600020600501600060405180807f6d696e457865637574696f6e44617465000000000000000000000000000000008152506010019050604051809103902081526020019081526020016000208190555043886044016000838152602001908152602001600020600501600060405180807f626c6f636b4e756d626572000000000000000000000000000000000000000000815250600b019050604051809103902081526020019081526020016000208190555084886044016000838152602001908152602001600020600501600060405180807f6d696e6572536c6f7400000000000000000000000000000000000000000000008152506009019050604051809103902081526020019081526020016000208190555087604001600060405180807f6469737075746546656500000000000000000000000000000000000000000000815250600a0190506040518091039020815260200190815260200160002054886044016000838152602001908152602001600020600501600060405180807f6665650000000000000000000000000000000000000000000000000000000000815250600301905060405180910390208152602001908152602001600020819055506002851415611679576001886048016000898152602001908152602001600020600701600088815260200190815260200160002060006101000a81548160ff0219169083151502179055505b60038860470160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555086817feceec1aebf67772b2440120c4b4dc913a1fe1b865509219f9456785c23b9da648886604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a35050505050505050565b600081604051602001808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051602081830303815290604052805190602001209050600083604a016000838152602001908152602001600020541415156117c457600080fd5b73__$946cc509dcf4b4c97ecabc42418c409021$__63a93a4d0384333087604001600060405180807f6469737075746546656500000000000000000000000000000000000000000000815250600a01905060405180910390208152602001908152602001600020546040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060006040518083038186803b1580156118e957600080fd5b505af41580156118fd573d6000803e3d6000fd5b5050505082604001600060405180807f64697370757465436f756e740000000000000000000000000000000000000000815250600c0190506040518091039020815260200190815260200160002060008154809291906001019190505550600083604001600060405180807f64697370757465436f756e740000000000000000000000000000000000000000815250600c019050604051809103902081526020019081526020016000205490508084604a0160008481526020019081526020016000208190555061010060405190810160405280838152602001600081526020016000151581526020016000151581526020016001151581526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815250846044016000838152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548160ff02191690831515021790555060608201518160020160016101000a81548160ff02191690831515021790555060808201518160020160026101000a81548160ff02191690831515021790555060a08201518160020160036101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505043846044016000838152602001908152602001600020600501600060405180807f626c6f636b4e756d626572000000000000000000000000000000000000000000815250600b019050604051809103902081526020019081526020016000208190555083604001600060405180807f6469737075746546656500000000000000000000000000000000000000000000815250600a0190506040518091039020815260200190815260200160002054846044016000838152602001908152602001600020600501600060405180807f66656500000000000000000000000000000000000000000000000000000000008152506003019050604051809103902081526020019081526020016000208190555062093a804201846044016000838152602001908152602001600020600501600060405180807f6d696e457865637574696f6e44617465000000000000000000000000000000008152506010019050604051809103902081526020019081526020016000208190555050505050565b6103e881604001600060405180807f7461726765744d696e6572730000000000000000000000000000000000000000815250600c01905060405180910390208152602001908152602001600020546103e883604001600060405180807f7374616b6572436f756e74000000000000000000000000000000000000000000815250600b019050604051809103902081526020019081526020016000205402811515611dd057fe5b041015611f4c57611ef967d02ab486cedc00006103e8611eea84604001600060405180807f7461726765744d696e6572730000000000000000000000000000000000000000815250600c01905060405180910390208152602001908152602001600020546103e886604001600060405180807f7374616b6572436f756e74000000000000000000000000000000000000000000815250600b019050604051809103902081526020019081526020016000205402811515611e8c57fe5b046103e80385604001600060405180807f7374616b65416d6f756e74000000000000000000000000000000000000000000815250600b019050604051809103902081526020019081526020016000205461234490919063ffffffff16565b811515611ef357fe5b04612377565b81604001600060405180807f6469737075746546656500000000000000000000000000000000000000000000815250600a0190506040518091039020815260200190815260200160002081905550611fa4565b67d02ab486cedc000081604001600060405180807f6469737075746546656500000000000000000000000000000000000000000000815250600a01905060405180910390208152602001908152602001600020819055505b50565b60008360440160008481526020019081526020016000209050600073__$946cc509dcf4b4c97ecabc42418c409021$__63c6f7efe0863385600501600060405180807f626c6f636b4e756d626572000000000000000000000000000000000000000000815250600b01905060405180910390208152602001908152602001600020546040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060206040518083038186803b1580156120b357600080fd5b505af41580156120c7573d6000803e3d6000fd5b505050506040513d60208110156120dd57600080fd5b81019080805190602001909291905050509050600115158260060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415151561215257600080fd5b60008111151561216157600080fd5b60038560470160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154141515156121b557600080fd5b60018260060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600182600501600060405180807f6e756d6265724f66566f74657300000000000000000000000000000000000000815250600d01905060405180910390208152602001908152602001600020600082825401925050819055508082600501600060405180807f71756f72756d00000000000000000000000000000000000000000000000000008152506006019050604051809103902081526020019081526020016000206000828254019250508190555082156122da578082600101540182600101819055506122ea565b8082600101540382600101819055505b3373ffffffffffffffffffffffffffffffffffffffff16847f86abfce99b7dd908bec0169288797f85049ec73cbe046ed9de818fab3a497ae085604051808215151515815260200191505060405180910390a35050505050565b60008082840290506000841480612365575082848281151561236257fe5b04145b151561236d57fe5b8091505092915050565b60008183116123865781612388565b825b90509291505056fea165627a7a72305820ff9c840a2ad1ed7c0b047e85a29ba82c4d9599cc8353258337383e47167d2b200029";

export interface ZapDisputeLibraryAddresses {
  ["__$946cc509dcf4b4c97ecabc42418c409021$__"]: string;
}
