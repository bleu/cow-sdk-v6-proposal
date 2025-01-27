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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace EthFlowOrder {
  export type DataStruct = {
    buyToken: string;
    receiver: string;
    sellAmount: BigNumberish;
    buyAmount: BigNumberish;
    appData: BytesLike;
    feeAmount: BigNumberish;
    validTo: BigNumberish;
    partiallyFillable: boolean;
    quoteId: BigNumberish;
  };

  export type DataStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    number,
    boolean,
    BigNumber
  ] & {
    buyToken: string;
    receiver: string;
    sellAmount: BigNumber;
    buyAmount: BigNumber;
    appData: string;
    feeAmount: BigNumber;
    validTo: number;
    partiallyFillable: boolean;
    quoteId: BigNumber;
  };
}

export interface EthFlowInterface extends utils.Interface {
  functions: {
    "createOrder((address,address,uint256,uint256,bytes32,uint256,uint32,bool,int64))": FunctionFragment;
    "invalidateOrder((address,address,uint256,uint256,bytes32,uint256,uint32,bool,int64))": FunctionFragment;
    "orders(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createOrder" | "invalidateOrder" | "orders"
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

  events: {};
}

export interface EthFlow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EthFlowInterface;

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
    createOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    invalidateOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    orders(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, number] & { owner: string; validTo: number }>;
  };

  createOrder(
    order: EthFlowOrder.DataStruct,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  invalidateOrder(
    order: EthFlowOrder.DataStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  orders(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, number] & { owner: string; validTo: number }>;

  callStatic: {
    createOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    invalidateOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    orders(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, number] & { owner: string; validTo: number }>;
  };

  filters: {};

  estimateGas: {
    createOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    invalidateOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    orders(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    invalidateOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    orders(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
