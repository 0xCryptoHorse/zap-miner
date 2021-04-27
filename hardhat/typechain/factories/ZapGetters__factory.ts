/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ZapGetters } from "../ZapGetters";

export class ZapGetters__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: ZapGettersLibraryAddresses,
    signer?: Signer
  ) {
    super(_abi, ZapGetters__factory.linkBytecode(linkLibraryAddresses), signer);
  }

  static linkBytecode(
    linkLibraryAddresses: ZapGettersLibraryAddresses
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
    zapToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZapGetters> {
    return super.deploy(zapToken, overrides || {}) as Promise<ZapGetters>;
  }
  getDeployTransaction(
    zapToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(zapToken, overrides || {});
  }
  attach(address: string): ZapGetters {
    return super.attach(address) as ZapGetters;
  }
  connect(signer: Signer): ZapGetters__factory {
    return super.connect(signer) as ZapGetters__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZapGetters {
    return new Contract(address, _abi, signerOrProvider) as ZapGetters;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "getRequestIdByTimestamp",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
      },
      {
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "getSubmissionsByTimestamp",
    outputs: [
      {
        name: "",
        type: "uint256[5]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_data",
        type: "bytes32",
      },
    ],
    name: "getAddressVars",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getSymbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getName",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getVariablesOnDeck",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalTokenSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_request",
        type: "bytes32",
      },
    ],
    name: "getRequestIdByQueryHash",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "getLastNewValueById",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
      },
      {
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "isInDispute",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "getNewValueCountbyRequestId",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_data",
        type: "bytes32",
      },
    ],
    name: "getUintVar",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getRequestIdByRequestQIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_challenge",
        type: "bytes32",
      },
      {
        name: "_miner",
        type: "address",
      },
    ],
    name: "didMine",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
      },
      {
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "getMinersByRequestIdAndTimestamp",
    outputs: [
      {
        name: "",
        type: "address[5]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_user",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_staker",
        type: "address",
      },
    ],
    name: "getStakerInfo",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_requestID",
        type: "uint256",
      },
      {
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getTimestampbyRequestIDandIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_disputeId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes32",
      },
    ],
    name: "getDisputeUintVars",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
      },
      {
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "retrieveData",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_user",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "allowedToTrade",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getCurrentVariables",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_disputeId",
        type: "uint256",
      },
      {
        name: "_address",
        type: "address",
      },
    ],
    name: "didVote",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_disputeId",
        type: "uint256",
      },
    ],
    name: "getAllDisputeVars",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
      {
        name: "",
        type: "bool",
      },
      {
        name: "",
        type: "bool",
      },
      {
        name: "",
        type: "bool",
      },
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "uint256[9]",
      },
      {
        name: "",
        type: "int256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getRequestQ",
    outputs: [
      {
        name: "",
        type: "uint256[51]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
      },
      {
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "getMinedBlockNum",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "getDisputeIdByDisputeHash",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_user",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes32",
      },
    ],
    name: "getRequestUintVars",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "getRequestVars",
    outputs: [
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "bytes32",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getLastNewValue",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "zapToken",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516020806129fa8339810180604052602081101561003057600080fd5b810190808051906020019092919050505080604b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050612968806100926000396000f3fe608060405260043610610185576000357c0100000000000000000000000000000000000000000000000000000000900480630f0b424d1461018a57806311c98512146101d9578063133bee5e1461025a57806315070401146102d557806317d7de7c1461036557806319e8e03b146103f55780631ca8b6cb146104935780631db842f0146104be5780633180f8df1461050d5780633df0777b1461056757806346eee1c4146105c4578063612c8f7f146106135780636173c0b81461066257806363bb82ad146106b157806369026d631461072457806370a08231146107a5578063733bdef01461080a57806377fbb663146108765780637f6fd5d9146108cf57806393fa491514610928578063999cf26c14610981578063a22e407a146109f4578063a7c438bc14610aa7578063af0b132714610b1a578063b541302914610c59578063c775b54214610cac578063da37994114610d05578063dd62ed3e14610d54578063e0ae93c114610dd9578063e1eee6d614610e32578063fc7cf0a014610f6e575b600080fd5b34801561019657600080fd5b506101c3600480360360208110156101ad57600080fd5b8101908080359060200190929190505050610fa4565b6040518082815260200191505060405180910390f35b3480156101e557600080fd5b5061021c600480360360408110156101fc57600080fd5b810190808035906020019092919080359060200190929190505050610fc1565b6040518082600560200280838360005b8381101561024757808201518184015260208101905061022c565b5050505090500191505060405180910390f35b34801561026657600080fd5b506102936004803603602081101561027d57600080fd5b8101908080359060200190929190505050610fe7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102e157600080fd5b506102ea611004565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561032a57808201518184015260208101905061030f565b50505050905090810190601f1680156103575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561037157600080fd5b5061037a611015565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103ba57808201518184015260208101905061039f565b50505050905090810190601f1680156103e75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561040157600080fd5b5061040a611026565b6040518084815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561045657808201518184015260208101905061043b565b50505050905090810190601f1680156104835780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561049f57600080fd5b506104a8611040565b6040518082815260200191505060405180910390f35b3480156104ca57600080fd5b506104f7600480360360208110156104e157600080fd5b8101908080359060200190929190505050611051565b6040518082815260200191505060405180910390f35b34801561051957600080fd5b506105466004803603602081101561053057600080fd5b810190808035906020019092919050505061106e565b60405180838152602001821515151581526020019250505060405180910390f35b34801561057357600080fd5b506105aa6004803603604081101561058a57600080fd5b81019080803590602001909291908035906020019092919050505061108e565b604051808215151515815260200191505060405180910390f35b3480156105d057600080fd5b506105fd600480360360208110156105e757600080fd5b81019080803590602001909291905050506110ae565b6040518082815260200191505060405180910390f35b34801561061f57600080fd5b5061064c6004803603602081101561063657600080fd5b81019080803590602001909291905050506110cb565b6040518082815260200191505060405180910390f35b34801561066e57600080fd5b5061069b6004803603602081101561068557600080fd5b81019080803590602001909291905050506110e8565b6040518082815260200191505060405180910390f35b3480156106bd57600080fd5b5061070a600480360360408110156106d457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611105565b604051808215151515815260200191505060405180910390f35b34801561073057600080fd5b506107676004803603604081101561074757600080fd5b810190808035906020019092919080359060200190929190505050611125565b6040518082600560200280838360005b83811015610792578082015181840152602081019050610777565b5050505090500191505060405180910390f35b3480156107b157600080fd5b506107f4600480360360208110156107c857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061114b565b6040518082815260200191505060405180910390f35b34801561081657600080fd5b506108596004803603602081101561082d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061124a565b604051808381526020018281526020019250505060405180910390f35b34801561088257600080fd5b506108b96004803603604081101561089957600080fd5b81019080803590602001909291908035906020019092919050505061126a565b6040518082815260200191505060405180910390f35b3480156108db57600080fd5b50610912600480360360408110156108f257600080fd5b81019080803590602001909291908035906020019092919050505061128a565b6040518082815260200191505060405180910390f35b34801561093457600080fd5b5061096b6004803603604081101561094b57600080fd5b8101908080359060200190929190803590602001909291905050506112aa565b6040518082815260200191505060405180910390f35b34801561098d57600080fd5b506109da600480360360408110156109a457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112ca565b604051808215151515815260200191505060405180910390f35b348015610a0057600080fd5b50610a096113b8565b6040518087815260200186815260200185815260200180602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b83811015610a67578082015181840152602081019050610a4c565b50505050905090810190601f168015610a945780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b348015610ab357600080fd5b50610b0060048036036040811015610aca57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113e0565b604051808215151515815260200191505060405180910390f35b348015610b2657600080fd5b50610b5360048036036020811015610b3d57600080fd5b8101908080359060200190929190505050611400565b604051808a81526020018915151515815260200188151515158152602001871515151581526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183600960200280838360005b83811015610c38578082015181840152602081019050610c1d565b50505050905001828152602001995050505050505050505060405180910390f35b348015610c6557600080fd5b50610c6e611448565b6040518082603360200280838360005b83811015610c99578082015181840152602081019050610c7e565b5050505090500191505060405180910390f35b348015610cb857600080fd5b50610cef60048036036040811015610ccf57600080fd5b81019080803590602001909291908035906020019092919050505061145f565b6040518082815260200191505060405180910390f35b348015610d1157600080fd5b50610d3e60048036036020811015610d2857600080fd5b810190808035906020019092919050505061147f565b6040518082815260200191505060405180910390f35b348015610d6057600080fd5b50610dc360048036036040811015610d7757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061149c565b6040518082815260200191505060405180910390f35b348015610de557600080fd5b50610e1c60048036036040811015610dfc57600080fd5b8101908080359060200190929190803590602001909291905050506115d0565b6040518082815260200191505060405180910390f35b348015610e3e57600080fd5b50610e6b60048036036020811015610e5557600080fd5b81019080803590602001909291905050506115f0565b604051808060200180602001878152602001868152602001858152602001848152602001838103835289818151815260200191508051906020019080838360005b83811015610ec7578082015181840152602081019050610eac565b50505050905090810190601f168015610ef45780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b83811015610f2d578082015181840152602081019050610f12565b50505050905090810190601f168015610f5a5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b348015610f7a57600080fd5b50610f83611622565b60405180838152602001821515151581526020019250505060405180910390f35b6000610fba82600061163790919063ffffffff16565b9050919050565b610fc96128ae565b610fdf838360006116579092919063ffffffff16565b905092915050565b6000610ffd8260006116cd90919063ffffffff16565b9050919050565b6060611010600061170d565b905090565b6060611021600061174c565b905090565b6000806060611035600061178b565b925092509250909192565b600061104c60006118bf565b905090565b600061106782600061191390919063ffffffff16565b9050919050565b60008061108583600061193390919063ffffffff16565b91509150915091565b60006110a6838360006119ae9092919063ffffffff16565b905092915050565b60006110c48260006119f090919063ffffffff16565b9050919050565b60006110e1826000611a1690919063ffffffff16565b9050919050565b60006110fe826000611a3690919063ffffffff16565b9050919050565b600061111d83836000611a669092919063ffffffff16565b905092915050565b61112d6128d1565b61114383836000611ad19092919063ffffffff16565b905092915050565b6000604b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561120857600080fd5b505afa15801561121c573d6000803e3d6000fd5b505050506040513d602081101561123257600080fd5b81019080805190602001909291905050509050919050565b600080611261836000611b7d90919063ffffffff16565b91509150915091565b600061128283836000611c159092919063ffffffff16565b905092915050565b60006112a283836000611c509092919063ffffffff16565b905092915050565b60006112c283836000611c859092919063ffffffff16565b905092915050565b60008073__$946cc509dcf4b4c97ecabc42418c409021$__63b9290ca5909185856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060206040518083038186803b15801561137557600080fd5b505af4158015611389573d6000803e3d6000fd5b505050506040513d602081101561139f57600080fd5b8101908080519060200190929190505050905092915050565b600080600060606000806113cc6000611cba565b955095509550955095509550909192939495565b60006113f883836000611fc49092919063ffffffff16565b905092915050565b60008060008060008060006114136128f4565b60006114298a600061203290919063ffffffff16565b9850985098509850985098509850985098509193959799909294969850565b611450612918565b61145a6000612409565b905090565b6000611477838360006124589092919063ffffffff16565b905092915050565b600061149582600061248d90919063ffffffff16565b9050919050565b6000604b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e84846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561158d57600080fd5b505afa1580156115a1573d6000803e3d6000fd5b505050506040513d60208110156115b757600080fd5b8101908080519060200190929190505050905092915050565b60006115e8838360006124ad9092919063ffffffff16565b905092915050565b60608060008060008061160d8760006124e290919063ffffffff16565b95509550955095509550955091939550919395565b60008061162f6000612741565b915091509091565b600082604201600083815260200190815260200160002054905092915050565b61165f6128ae565b83604801600084815260200190815260200160002060090160008381526020019081526020016000206005806020026040519081016040528092919082600580156116bf576020028201915b8154815260200190600101908083116116ab575b505050505090509392505050565b600082603f01600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905092915050565b60606040805190810160405280600281526020017f54540000000000000000000000000000000000000000000000000000000000008152509050919050565b60606040805190810160405280600981526020017f5a617020546f6b656e00000000000000000000000000000000000000000000008152509050919050565b6000806060600061179b85612803565b905080856048016000838152602001908152602001600020600401600060405180807f746f74616c54697000000000000000000000000000000000000000000000000081525060080190506040518091039020815260200190815260200160002054866048016000848152602001908152602001600020600001808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118aa5780601f1061187f576101008083540402835291602001916118aa565b820191906000526020600020905b81548152906001019060200180831161188d57829003601f168201915b50505050509050935093509350509193909250565b600081604001600060405180807f746f74616c5f737570706c790000000000000000000000000000000000000000815250600c01905060405180910390208152602001908152602001600020549050919050565b600082604901600083815260200190815260200160002054905092915050565b6000806000846048016000858152602001908152602001600020905060008160030180549050111561199b5761198f858583600301600185600301805490500381548110151561197f57fe5b9060005260206000200154611c85565b600192509250506119a7565b60008081915092509250505b9250929050565b6000836048016000848152602001908152602001600020600701600083815260200190815260200160002060009054906101000a900460ff1690509392505050565b600082604801600083815260200190815260200160002060030180549050905092915050565b600082604001600083815260200190815260200160002054905092915050565b600060328211151515611a4857600080fd5b82604301600083815260200190815260200160002054905092915050565b600083604101600084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690509392505050565b611ad96128d1565b8360480160008481526020019081526020016000206008016000838152602001908152602001600020600580602002604051908101604052809291908260058015611b6f576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611b25575b505050505090509392505050565b6000808360470160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001548460470160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154915091509250929050565b600083604801600084815260200190815260200160002060030182815481101515611c3c57fe5b906000526020600020015490509392505050565b600083604401600084815260200190815260200160002060050160008381526020019081526020016000205490509392505050565b600083604801600084815260200190815260200160002060060160008381526020019081526020016000205490509392505050565b60008060006060600080866000015487604001600060405180807f63757272656e74526571756573744964000000000000000000000000000000008152506010019050604051809103902081526020019081526020016000205488604001600060405180807f646966666963756c747900000000000000000000000000000000000000000000815250600a01905060405180910390208152602001908152602001600020548960480160008b604001600060405180807f63757272656e74526571756573744964000000000000000000000000000000008152506010019050604051809103902081526020019081526020016000205481526020019081526020016000206000018a60480160008c604001600060405180807f63757272656e7452657175657374496400000000000000000000000000000000815250601001905060405180910390208152602001908152602001600020548152602001908152602001600020600401600060405180807f6772616e756c6172697479000000000000000000000000000000000000000000815250600b01905060405180910390208152602001908152602001600020548b60480160008d604001600060405180807f63757272656e7452657175657374496400000000000000000000000000000000815250601001905060405180910390208152602001908152602001600020548152602001908152602001600020600401600060405180807f746f74616c54697000000000000000000000000000000000000000000000000081525060080190506040518091039020815260200190815260200160002054828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611fa85780601f10611f7d57610100808354040283529160200191611fa8565b820191906000526020600020905b815481529060010190602001808311611f8b57829003601f168201915b5050505050925095509550955095509550955091939550919395565b600083604401600084815260200190815260200160002060060160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690509392505050565b60008060008060008060006120456128f4565b6000808b60440160008c8152602001908152602001600020905080600001548160020160009054906101000a900460ff168260020160019054906101000a900460ff168360020160029054906101000a900460ff168460020160039054906101000a900473ffffffffffffffffffffffffffffffffffffffff168560030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166101206040519081016040528089600501600060405180807f726571756573744964000000000000000000000000000000000000000000000081525060090190506040518091039020815260200190815260200160002054815260200189600501600060405180807f74696d657374616d70000000000000000000000000000000000000000000000081525060090190506040518091039020815260200190815260200160002054815260200189600501600060405180807f76616c756500000000000000000000000000000000000000000000000000000081525060050190506040518091039020815260200190815260200160002054815260200189600501600060405180807f6d696e457865637574696f6e446174650000000000000000000000000000000081525060100190506040518091039020815260200190815260200160002054815260200189600501600060405180807f6e756d6265724f66566f74657300000000000000000000000000000000000000815250600d0190506040518091039020815260200190815260200160002054815260200189600501600060405180807f626c6f636b4e756d626572000000000000000000000000000000000000000000815250600b0190506040518091039020815260200190815260200160002054815260200189600501600060405180807f6d696e6572536c6f74000000000000000000000000000000000000000000000081525060090190506040518091039020815260200190815260200160002054815260200189600501600060405180807f71756f72756d000000000000000000000000000000000000000000000000000081525060060190506040518091039020815260200190815260200160002054815260200189600501600060405180807f6665650000000000000000000000000000000000000000000000000000000000815250600301905060405180910390208152602001908152602001600020548152508860010154995099509950995099509950995099509950509295985092959850929598565b612411612918565b8160010160338060200260405190810160405280929190826033801561244c576020028201915b815481526020019060010190808311612438575b50505050509050919050565b600083604801600084815260200190815260200160002060050160008381526020019081526020016000205490509392505050565b600082604a01600083815260200190815260200160002054905092915050565b600083604801600084815260200190815260200160002060040160008381526020019081526020016000205490509392505050565b606080600080600080600088604801600089815260200190815260200160002090508060000181600101826002015483600401600060405180807f6772616e756c6172697479000000000000000000000000000000000000000000815250600b019050604051809103902081526020019081526020016000205484600401600060405180807f7265717565737451506f736974696f6e000000000000000000000000000000008152506010019050604051809103902081526020019081526020016000205485600401600060405180807f746f74616c54697000000000000000000000000000000000000000000000000081525060080190506040518091039020815260200190815260200160002054858054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156126875780601f1061265c57610100808354040283529160200191612687565b820191906000526020600020905b81548152906001019060200180831161266a57829003601f168201915b50505050509550848054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127235780601f106126f857610100808354040283529160200191612723565b820191906000526020600020905b81548152906001019060200180831161270657829003601f168201915b50505050509450965096509650965096509650509295509295509295565b6000806127f88384604201600086604001600060405180807f74696d654f664c6173744e657756616c756500000000000000000000000000008152506012019050604051809103902081526020019081526020016000205481526020019081526020016000205485604001600060405180807f74696d654f664c6173744e657756616c7565000000000000000000000000000081525060120190506040518091039020815260200190815260200160002054611c85565b600191509150915091565b600080600061285084600101603380602002604051908101604052809291908260338015612846576020028201915b815481526020019060010190808311612832575b5050505050612877565b80925081935050508360430160008281526020019081526020016000205492505050919050565b60008060005b60338110156128a857602081028401518084101561289c578093508192505b5060018101905061287d565b50915091565b60a060405190810160405280600590602082028038833980820191505090505090565b60a060405190810160405280600590602082028038833980820191505090505090565b61012060405190810160405280600990602082028038833980820191505090505090565b6106606040519081016040528060339060208202803883398082019150509050509056fea165627a7a723058208af1250e850ff7f8a4a362fc04fb6adcfbdce452db9b12dc023710f6aca4186f0029";

export interface ZapGettersLibraryAddresses {
  ["__$946cc509dcf4b4c97ecabc42418c409021$__"]: string;
}
