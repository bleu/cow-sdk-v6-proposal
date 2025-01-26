/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "@cowprotocol/common";

export declare namespace IConditionalOrder {
  export type ConditionalOrderParamsStruct = {
    handler: string;
    salt: BytesLike;
    staticInput: BytesLike;
  };

  export type ConditionalOrderParamsStructOutput = [string, string, string] & {
    handler: string;
    salt: string;
    staticInput: string;
  };
}

export declare namespace ComposableCoW {
  export type ProofStruct = { location: BigNumberish; data: BytesLike };

  export type ProofStructOutput = [BigNumber, string] & {
    location: BigNumber;
    data: string;
  };
}

export declare namespace GPv2Order {
  export type DataStruct = {
    sellToken: string;
    buyToken: string;
    receiver: string;
    sellAmount: BigNumberish;
    buyAmount: BigNumberish;
    validTo: BigNumberish;
    appData: BytesLike;
    feeAmount: BigNumberish;
    kind: BytesLike;
    partiallyFillable: boolean;
    sellTokenBalance: BytesLike;
    buyTokenBalance: BytesLike;
  };

  export type DataStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    string,
    BigNumber,
    string,
    boolean,
    string,
    string,
  ] & {
    sellToken: string;
    buyToken: string;
    receiver: string;
    sellAmount: BigNumber;
    buyAmount: BigNumber;
    validTo: number;
    appData: string;
    feeAmount: BigNumber;
    kind: string;
    partiallyFillable: boolean;
    sellTokenBalance: string;
    buyTokenBalance: string;
  };
}

export interface ComposableCoWInterface extends utils.Interface {
  functions: {
    "cabinet(address,bytes32)": FunctionFragment;
    "create((address,bytes32,bytes),bool)": FunctionFragment;
    "createWithContext((address,bytes32,bytes),address,bytes,bool)": FunctionFragment;
    "domainSeparator()": FunctionFragment;
    "getTradeableOrderWithSignature(address,(address,bytes32,bytes),bytes,bytes32[])": FunctionFragment;
    "hash((address,bytes32,bytes))": FunctionFragment;
    "isValidSafeSignature(address,address,bytes32,bytes32,bytes32,bytes,bytes)": FunctionFragment;
    "remove(bytes32)": FunctionFragment;
    "roots(address)": FunctionFragment;
    "setRoot(bytes32,(uint256,bytes))": FunctionFragment;
    "setRootWithContext(bytes32,(uint256,bytes),address,bytes)": FunctionFragment;
    "setSwapGuard(address)": FunctionFragment;
    "singleOrders(address,bytes32)": FunctionFragment;
    "swapGuards(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cabinet"
      | "create"
      | "createWithContext"
      | "domainSeparator"
      | "getTradeableOrderWithSignature"
      | "hash"
      | "isValidSafeSignature"
      | "remove"
      | "roots"
      | "setRoot"
      | "setRootWithContext"
      | "setSwapGuard"
      | "singleOrders"
      | "swapGuards"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cabinet",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [IConditionalOrder.ConditionalOrderParamsStruct, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "createWithContext",
    values: [
      IConditionalOrder.ConditionalOrderParamsStruct,
      string,
      BytesLike,
      boolean,
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "domainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTradeableOrderWithSignature",
    values: [
      string,
      IConditionalOrder.ConditionalOrderParamsStruct,
      BytesLike,
      BytesLike[],
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hash",
    values: [IConditionalOrder.ConditionalOrderParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSafeSignature",
    values: [
      string,
      string,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
    ]
  ): string;
  encodeFunctionData(functionFragment: "remove", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "roots", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setRoot",
    values: [BytesLike, ComposableCoW.ProofStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setRootWithContext",
    values: [BytesLike, ComposableCoW.ProofStruct, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapGuard",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "singleOrders",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "swapGuards", values: [string]): string;

  decodeFunctionResult(functionFragment: "cabinet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createWithContext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "domainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTradeableOrderWithSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidSafeSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRootWithContext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwapGuard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "singleOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapGuards", data: BytesLike): Result;

  events: {
    "ConditionalOrderCreated(address,(address,bytes32,bytes))": EventFragment;
    "MerkleRootSet(address,bytes32,(uint256,bytes))": EventFragment;
    "SwapGuardSet(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConditionalOrderCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MerkleRootSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapGuardSet"): EventFragment;
}

export interface ConditionalOrderCreatedEventObject {
  owner: string;
  params: IConditionalOrder.ConditionalOrderParamsStructOutput;
}
export type ConditionalOrderCreatedEvent = TypedEvent<
  [string, IConditionalOrder.ConditionalOrderParamsStructOutput],
  ConditionalOrderCreatedEventObject
>;

export type ConditionalOrderCreatedEventFilter =
  TypedEventFilter<ConditionalOrderCreatedEvent>;

export interface MerkleRootSetEventObject {
  owner: string;
  root: string;
  proof: ComposableCoW.ProofStructOutput;
}
export type MerkleRootSetEvent = TypedEvent<
  [string, string, ComposableCoW.ProofStructOutput],
  MerkleRootSetEventObject
>;

export type MerkleRootSetEventFilter = TypedEventFilter<MerkleRootSetEvent>;

export interface SwapGuardSetEventObject {
  owner: string;
  swapGuard: string;
}
export type SwapGuardSetEvent = TypedEvent<
  [string, string],
  SwapGuardSetEventObject
>;

export type SwapGuardSetEventFilter = TypedEventFilter<SwapGuardSetEvent>;

export interface ComposableCoW extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComposableCoWInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cabinet(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    create(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      dispatch: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    createWithContext(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      factory: string,
      data: BytesLike,
      dispatch: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    domainSeparator(overrides?: CallOverrides): Promise<[string]>;

    getTradeableOrderWithSignature(
      owner: string,
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      offchainInput: BytesLike,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<
      [GPv2Order.DataStructOutput, string] & {
        order: GPv2Order.DataStructOutput;
        signature: string;
      }
    >;

    hash(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isValidSafeSignature(
      safe: string,
      sender: string,
      _hash: BytesLike,
      _domainSeparator: BytesLike,
      arg4: BytesLike,
      encodeData: BytesLike,
      payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { magic: string }>;

    remove(
      singleOrderHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    roots(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    setRoot(
      root: BytesLike,
      proof: ComposableCoW.ProofStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setRootWithContext(
      root: BytesLike,
      proof: ComposableCoW.ProofStruct,
      factory: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setSwapGuard(
      swapGuard: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    singleOrders(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    swapGuards(arg0: string, overrides?: CallOverrides): Promise<[string]>;
  };

  cabinet(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  create(
    params: IConditionalOrder.ConditionalOrderParamsStruct,
    dispatch: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  createWithContext(
    params: IConditionalOrder.ConditionalOrderParamsStruct,
    factory: string,
    data: BytesLike,
    dispatch: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  domainSeparator(overrides?: CallOverrides): Promise<string>;

  getTradeableOrderWithSignature(
    owner: string,
    params: IConditionalOrder.ConditionalOrderParamsStruct,
    offchainInput: BytesLike,
    proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<
    [GPv2Order.DataStructOutput, string] & {
      order: GPv2Order.DataStructOutput;
      signature: string;
    }
  >;

  hash(
    params: IConditionalOrder.ConditionalOrderParamsStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  isValidSafeSignature(
    safe: string,
    sender: string,
    _hash: BytesLike,
    _domainSeparator: BytesLike,
    arg4: BytesLike,
    encodeData: BytesLike,
    payload: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  remove(
    singleOrderHash: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  roots(arg0: string, overrides?: CallOverrides): Promise<string>;

  setRoot(
    root: BytesLike,
    proof: ComposableCoW.ProofStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setRootWithContext(
    root: BytesLike,
    proof: ComposableCoW.ProofStruct,
    factory: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setSwapGuard(
    swapGuard: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  singleOrders(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  swapGuards(arg0: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cabinet(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    create(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      dispatch: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    createWithContext(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      factory: string,
      data: BytesLike,
      dispatch: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    domainSeparator(overrides?: CallOverrides): Promise<string>;

    getTradeableOrderWithSignature(
      owner: string,
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      offchainInput: BytesLike,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<
      [GPv2Order.DataStructOutput, string] & {
        order: GPv2Order.DataStructOutput;
        signature: string;
      }
    >;

    hash(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    isValidSafeSignature(
      safe: string,
      sender: string,
      _hash: BytesLike,
      _domainSeparator: BytesLike,
      arg4: BytesLike,
      encodeData: BytesLike,
      payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    remove(
      singleOrderHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    roots(arg0: string, overrides?: CallOverrides): Promise<string>;

    setRoot(
      root: BytesLike,
      proof: ComposableCoW.ProofStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setRootWithContext(
      root: BytesLike,
      proof: ComposableCoW.ProofStruct,
      factory: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapGuard(swapGuard: string, overrides?: CallOverrides): Promise<void>;

    singleOrders(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    swapGuards(arg0: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ConditionalOrderCreated(address,(address,bytes32,bytes))"(
      owner?: string | null,
      params?: null
    ): ConditionalOrderCreatedEventFilter;
    ConditionalOrderCreated(
      owner?: string | null,
      params?: null
    ): ConditionalOrderCreatedEventFilter;

    "MerkleRootSet(address,bytes32,(uint256,bytes))"(
      owner?: string | null,
      root?: null,
      proof?: null
    ): MerkleRootSetEventFilter;
    MerkleRootSet(
      owner?: string | null,
      root?: null,
      proof?: null
    ): MerkleRootSetEventFilter;

    "SwapGuardSet(address,address)"(
      owner?: string | null,
      swapGuard?: null
    ): SwapGuardSetEventFilter;
    SwapGuardSet(
      owner?: string | null,
      swapGuard?: null
    ): SwapGuardSetEventFilter;
  };

  estimateGas: {
    cabinet(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    create(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      dispatch: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    createWithContext(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      factory: string,
      data: BytesLike,
      dispatch: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    getTradeableOrderWithSignature(
      owner: string,
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      offchainInput: BytesLike,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidSafeSignature(
      safe: string,
      sender: string,
      _hash: BytesLike,
      _domainSeparator: BytesLike,
      arg4: BytesLike,
      encodeData: BytesLike,
      payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remove(
      singleOrderHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    roots(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setRoot(
      root: BytesLike,
      proof: ComposableCoW.ProofStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setRootWithContext(
      root: BytesLike,
      proof: ComposableCoW.ProofStruct,
      factory: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setSwapGuard(
      swapGuard: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    singleOrders(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapGuards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cabinet(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    create(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      dispatch: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    createWithContext(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      factory: string,
      data: BytesLike,
      dispatch: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTradeableOrderWithSignature(
      owner: string,
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      offchainInput: BytesLike,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash(
      params: IConditionalOrder.ConditionalOrderParamsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidSafeSignature(
      safe: string,
      sender: string,
      _hash: BytesLike,
      _domainSeparator: BytesLike,
      arg4: BytesLike,
      encodeData: BytesLike,
      payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remove(
      singleOrderHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    roots(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRoot(
      root: BytesLike,
      proof: ComposableCoW.ProofStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setRootWithContext(
      root: BytesLike,
      proof: ComposableCoW.ProofStruct,
      factory: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setSwapGuard(
      swapGuard: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    singleOrders(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapGuards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
