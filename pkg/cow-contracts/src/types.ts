import type { BytesLike } from 'ethers'
import type { TypedDataSigner } from '@ethersproject/abstract-signer'
import type { Result, EventFragment as EthersEventFragment, FunctionFragment as EthersFunctionFragment } from '@ethersproject/abi'

export interface Order {
  sellToken: string
  buyToken: string
  receiver: string
  sellAmount: string
  buyAmount: string
  validTo: number
  appData: BytesLike
  feeAmount: string
  kind: string
  partiallyFillable: boolean
  sellTokenBalance: string
  buyTokenBalance: string
}

export enum OrderBalance {
  ERC20 = 'erc20',
  EXTERNAL = 'external',
  INTERNAL = 'internal'
}

export enum OrderKind {
  SELL = 'sell',
  BUY = 'buy'
}

export interface TypedDataDomain {
  name: string
  version: string
  chainId: number
  verifyingContract: string
}

export interface OrderUidParams {
  orderDigest: string
  owner: string
  validTo: number
}

export type { TypedDataSigner }

export type FunctionFragment = EthersFunctionFragment
export type EventFragment = EthersEventFragment

import type { EventFilter } from '@ethersproject/contracts'
import type { Event } from '@ethersproject/contracts'

export interface BaseEventObject extends Result {
  [key: string]: any;
}

export interface TypedEvent<TArgsObject extends BaseEventObject> extends Event {
  args: TArgsObject;
  decode?(data: string, topics?: Array<string>): TArgsObject;
}

export interface TypedEventFilter<TArgsObject extends BaseEventObject> extends EventFilter {
  address?: string;
  topics?: Array<string | Array<string>>;
}

export interface TypedListener<TArgsObject extends BaseEventObject> {
  (event: TypedEvent<TArgsObject>): void;
}

export type OnEvent<TRes> = <TArgsObject extends BaseEventObject>(
  eventFilter: TypedEventFilter<TArgsObject>,
  listener: TypedListener<TArgsObject>
) => TRes;

// Re-export ethers types
export type { Result }
