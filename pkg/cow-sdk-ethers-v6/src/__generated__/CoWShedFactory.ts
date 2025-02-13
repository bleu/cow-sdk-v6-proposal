/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type CallStruct = {
  target: AddressLike;
  value: BigNumberish;
  callData: BytesLike;
  allowFailure: boolean;
  isDelegateCall: boolean;
};

export type CallStructOutput = [
  target: string,
  value: bigint,
  callData: string,
  allowFailure: boolean,
  isDelegateCall: boolean
] & {
  target: string;
  value: bigint;
  callData: string;
  allowFailure: boolean;
  isDelegateCall: boolean;
};

export interface CoWShedFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addr"
      | "baseName"
      | "baseNode"
      | "executeHooks"
      | "forwardResolutionNodeToAddress"
      | "implementation"
      | "initializeEns"
      | "initializeProxy"
      | "name"
      | "ownerOf"
      | "proxyOf"
      | "reverseResolutionNodeToAddress"
      | "supportsInterface"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "COWShedBuilt"): EventFragment;

  encodeFunctionData(functionFragment: "addr", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "baseName", values?: undefined): string;
  encodeFunctionData(functionFragment: "baseNode", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeHooks",
    values: [CallStruct[], BytesLike, BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "forwardResolutionNodeToAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeEns",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeProxy",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reverseResolutionNodeToAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseNode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeHooks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forwardResolutionNodeToAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeEns",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proxyOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reverseResolutionNodeToAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
}

export namespace COWShedBuiltEvent {
  export type InputTuple = [user: AddressLike, shed: AddressLike];
  export type OutputTuple = [user: string, shed: string];
  export interface OutputObject {
    user: string;
    shed: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CoWShedFactory extends BaseContract {
  connect(runner?: ContractRunner | null): CoWShedFactory;
  waitForDeployment(): Promise<this>;

  interface: CoWShedFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addr: TypedContractMethod<[node: BytesLike], [string], "view">;

  baseName: TypedContractMethod<[], [string], "view">;

  baseNode: TypedContractMethod<[], [string], "view">;

  executeHooks: TypedContractMethod<
    [
      calls: CallStruct[],
      nonce: BytesLike,
      deadline: BigNumberish,
      user: AddressLike,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  forwardResolutionNodeToAddress: TypedContractMethod<
    [arg0: BytesLike],
    [string],
    "view"
  >;

  implementation: TypedContractMethod<[], [string], "view">;

  initializeEns: TypedContractMethod<[user: AddressLike], [void], "nonpayable">;

  initializeProxy: TypedContractMethod<
    [user: AddressLike, withEns: boolean],
    [void],
    "nonpayable"
  >;

  name: TypedContractMethod<[node: BytesLike], [string], "view">;

  ownerOf: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  proxyOf: TypedContractMethod<[who: AddressLike], [string], "view">;

  reverseResolutionNodeToAddress: TypedContractMethod<
    [arg0: BytesLike],
    [string],
    "view"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addr"
  ): TypedContractMethod<[node: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "baseName"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "baseNode"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "executeHooks"
  ): TypedContractMethod<
    [
      calls: CallStruct[],
      nonce: BytesLike,
      deadline: BigNumberish,
      user: AddressLike,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "forwardResolutionNodeToAddress"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "implementation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initializeEns"
  ): TypedContractMethod<[user: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initializeProxy"
  ): TypedContractMethod<
    [user: AddressLike, withEns: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[node: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "ownerOf"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "proxyOf"
  ): TypedContractMethod<[who: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "reverseResolutionNodeToAddress"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  getEvent(
    key: "COWShedBuilt"
  ): TypedContractEvent<
    COWShedBuiltEvent.InputTuple,
    COWShedBuiltEvent.OutputTuple,
    COWShedBuiltEvent.OutputObject
  >;

  filters: {
    "COWShedBuilt(address,address)": TypedContractEvent<
      COWShedBuiltEvent.InputTuple,
      COWShedBuiltEvent.OutputTuple,
      COWShedBuiltEvent.OutputObject
    >;
    COWShedBuilt: TypedContractEvent<
      COWShedBuiltEvent.InputTuple,
      COWShedBuiltEvent.OutputTuple,
      COWShedBuiltEvent.OutputObject
    >;
  };
}
