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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace EthFlowOrder {
  export type DataStruct = {
    buyToken: AddressLike;
    receiver: AddressLike;
    sellAmount: BigNumberish;
    buyAmount: BigNumberish;
    appData: BytesLike;
    feeAmount: BigNumberish;
    validTo: BigNumberish;
    partiallyFillable: boolean;
    quoteId: BigNumberish;
  };

  export type DataStructOutput = [
    buyToken: string,
    receiver: string,
    sellAmount: bigint,
    buyAmount: bigint,
    appData: string,
    feeAmount: bigint,
    validTo: bigint,
    partiallyFillable: boolean,
    quoteId: bigint
  ] & {
    buyToken: string;
    receiver: string;
    sellAmount: bigint;
    buyAmount: bigint;
    appData: string;
    feeAmount: bigint;
    validTo: bigint;
    partiallyFillable: boolean;
    quoteId: bigint;
  };
}

export interface EthFlowInterface extends Interface {
  getFunction(
    nameOrSignature: "createOrder" | "invalidateOrder" | "orders"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createOrder",
    values: [EthFlowOrder.DataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "invalidateOrder",
    values: [EthFlowOrder.DataStruct]
  ): string;
  encodeFunctionData(functionFragment: "orders", values: [BytesLike]): string;

  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "invalidateOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
}

export interface EthFlow extends BaseContract {
  connect(runner?: ContractRunner | null): EthFlow;
  waitForDeployment(): Promise<this>;

  interface: EthFlowInterface;

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

  createOrder: TypedContractMethod<
    [order: EthFlowOrder.DataStruct],
    [string],
    "payable"
  >;

  invalidateOrder: TypedContractMethod<
    [order: EthFlowOrder.DataStruct],
    [void],
    "nonpayable"
  >;

  orders: TypedContractMethod<
    [arg0: BytesLike],
    [[string, bigint] & { owner: string; validTo: bigint }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createOrder"
  ): TypedContractMethod<[order: EthFlowOrder.DataStruct], [string], "payable">;
  getFunction(
    nameOrSignature: "invalidateOrder"
  ): TypedContractMethod<
    [order: EthFlowOrder.DataStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "orders"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [[string, bigint] & { owner: string; validTo: bigint }],
    "view"
  >;

  filters: {};
}
