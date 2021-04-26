/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ZapStake } from "../ZapStake";

export class ZapStake__factory extends ContractFactory {
  constructor(linkLibraryAddresses: ZapStakeLibraryAddresses, signer?: Signer) {
    super(_abi, ZapStake__factory.linkBytecode(linkLibraryAddresses), signer);
  }

  static linkBytecode(linkLibraryAddresses: ZapStakeLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$a129b1b574282adaa6f30b90cf6e0e269c\\$__", "g"),
      linkLibraryAddresses["__$a129b1b574282adaa6f30b90cf6e0e269c$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

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
  ): Promise<ZapStake> {
    return super.deploy(overrides || {}) as Promise<ZapStake>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ZapStake {
    return super.attach(address) as ZapStake;
  }
  connect(signer: Signer): ZapStake__factory {
    return super.connect(signer) as ZapStake__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZapStake {
    return new Contract(address, _abi, signerOrProvider) as ZapStake;
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
    ],
    name: "depositStake",
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
    name: "requestStakingWithdraw",
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
    name: "init",
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
    name: "withdrawStake",
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
        name: "_sender",
        type: "address",
      },
    ],
    name: "NewStake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_sender",
        type: "address",
      },
    ],
    name: "StakeWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_sender",
        type: "address",
      },
    ],
    name: "StakeWithdrawRequested",
    type: "event",
  },
];

const _bytecode =
  "0x610ebc610030600b82828239805160001a6073146000811461002057610022565bfe5b5030600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610610073576000357c010000000000000000000000000000000000000000000000000000000090048063326991a3146100785780633c734827146100b357806347b024eb146100ee57806378bfa27714610129575b600080fd5b81801561008457600080fd5b506100b16004803603602081101561009b57600080fd5b8101908080359060200190929190505050610164565b005b8180156100bf57600080fd5b506100ec600480360360208110156100d657600080fd5b81019080803590602001909291905050506101f4565b005b8180156100fa57600080fd5b506101276004803603602081101561011157600080fd5b8101908080359060200190929190505050610392565b005b81801561013557600080fd5b506101626004803603602081101561014c57600080fd5b8101908080359060200190929190505050610aaa565b005b61016e8133610b7b565b73__$a129b1b574282adaa6f30b90cf6e0e269c$__639264b888826040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060006040518083038186803b1580156101d957600080fd5b505af41580156101ed573d6000803e3d6000fd5b5050505050565b60008160470160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506001816000015414151561024c57600080fd5b60028160000181905550620151804281151561026457fe5b0642038160010181905550600182604001600060405180807f7374616b6572436f756e74000000000000000000000000000000000000000000815250600b019050604051809103902081526020019081526020016000206000828254039250508190555073__$a129b1b574282adaa6f30b90cf6e0e269c$__639264b888836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060006040518083038186803b15801561033357600080fd5b505af4158015610347573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff167f453865710d0cb4b14ad25de371c860da196368895daa9662e5087711d14daecf60405160405180910390a25050565b600081604001600060405180807f646563696d616c73000000000000000000000000000000000000000000000000815250600801905060405180910390208152602001908152602001600020541415156103eb57600080fd5b73__$946cc509dcf4b4c97ecabc42418c409021$__632dfd89088260450160003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000207ffffffffffffffffffffffffffffffffffffffffffffffebabd45ed5cc83fffff6040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060006040518083038186803b1580156104be57600080fd5b505af41580156104d2573d6000803e3d6000fd5b505050506104de610e6d565b60c06040519081016040528073df3e18d64bc6a983f673ab319ccae4f1a57c709773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173cd3b766ccdd6ae721141f452c550ca635964ce7173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001732546bcd3c84621e976d8185a91a922ae77ecec3073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173bda5747bfd65f08deb54cb465eb87d40e51b197e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173dd2fd4581271e230360230f9337d5c0430bf44c073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001738626f6940e2eb28930efb4cef49b2d1f2c9c119973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250905060008090505b60068110156107ac5773__$946cc509dcf4b4c97ecabc42418c409021$__632dfd890884604501600085856006811015156106cb57fe5b602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020683635c9adc5dea000006040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060006040518083038186803b15801561076b57600080fd5b505af415801561077f573d6000803e3d6000fd5b5050505061079f83838360068110151561079557fe5b6020020151610b7b565b8080600101915050610694565b5069014542ba12a337c0000082604001600060405180807f746f74616c5f737570706c790000000000000000000000000000000000000000815250600c0190506040518091039020815260200190815260200160002060008282540192505081905550601282604001600060405180807f646563696d616c730000000000000000000000000000000000000000000000008152506008019050604051809103902081526020019081526020016000208190555060c882604001600060405180807f7461726765744d696e6572730000000000000000000000000000000000000000815250600c0190506040518091039020815260200190815260200160002081905550683635c9adc5dea0000082604001600060405180807f7374616b65416d6f756e74000000000000000000000000000000000000000000815250600b01905060405180910390208152602001908152602001600020819055506834957444b840e8000082604001600060405180807f6469737075746546656500000000000000000000000000000000000000000000815250600a019050604051809103902081526020019081526020016000208190555061025882604001600060405180807f74696d6554617267657400000000000000000000000000000000000000000000815250600a019050604051809103902081526020019081526020016000208190555081604001600060405180807f74696d6554617267657400000000000000000000000000000000000000000000815250600a019050604051809103902081526020019081526020016000205442811515610a0557fe5b06420382604001600060405180807f74696d654f664c6173744e657756616c7565000000000000000000000000000081525060120190506040518091039020815260200190815260200160002081905550600182604001600060405180807f646966666963756c747900000000000000000000000000000000000000000000815250600a01905060405180910390208152602001908152602001600020819055505050565b60008160470160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905062093a8081600101546201518042811515610b0657fe5b0642030310151515610b1757600080fd5b60028160000154141515610b2a57600080fd5b600081600001819055503373ffffffffffffffffffffffffffffffffffffffff167f4a7934670bd8304e7da22378be1368f7c4fef17c5aee81804beda8638fe428ec60405160405180910390a25050565b81604001600060405180807f7374616b65416d6f756e74000000000000000000000000000000000000000000815250600b019050604051809103902081526020019081526020016000205473__$946cc509dcf4b4c97ecabc42418c409021$__63f07528dd84846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015610c6557600080fd5b505af4158015610c79573d6000803e3d6000fd5b505050506040513d6020811015610c8f57600080fd5b810190808051906020019092919050505010151515610cad57600080fd5b60008260470160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541480610d44575060028260470160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154145b1515610d4f57600080fd5b600182604001600060405180807f7374616b6572436f756e74000000000000000000000000000000000000000000815250600b01905060405180910390208152602001908152602001600020600082825401925050819055506040805190810160405280600181526020016201518042811515610dc857fe5b0642038152508260470160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101559050508073ffffffffffffffffffffffffffffffffffffffff167f46d8ab1385f70e5a3673e97c23c764f7600f7ed7a09b6687deae7131d51752e260405160405180910390a25050565b60c06040519081016040528060069060208202803883398082019150509050509056fea165627a7a72305820bbafd65b7800c71ed000f3bd55ba5d0b4f86a9ba9719ee836bed16e920a4833a0029";

export interface ZapStakeLibraryAddresses {
  ["__$a129b1b574282adaa6f30b90cf6e0e269c$__"]: string;
  ["__$946cc509dcf4b4c97ecabc42418c409021$__"]: string;
}
