import type { ethers } from 'ethers'
import type { BaseContract, Event } from '@ethersproject/contracts'
import type { Result } from '@ethersproject/abi'

export interface TypedEventFilter<TArgs extends Result> extends ethers.EventFilter {
  decode(data: string, topics?: Array<string>): TArgs
}

export interface TypedEvent<TArgs extends Result> extends Event {
  args: TArgs
  decode(data: string, topics?: Array<string>): TArgs
}

export type TypedListener<TArgs extends Result> = (...args: [TArgs, TypedEvent<TArgs>]) => void

export type OnEvent<TArgs extends Result> = (
  event: string | TypedEventFilter<TArgs>,
  listener: TypedListener<TArgs>
) => BaseContract

export interface BaseEventObject extends Result {
  [key: string]: unknown
}

export type { BaseContract, Event, Result }

// Re-export common ethers types that are used across the codebase
export type {
  BigNumber,
  BigNumberish,
  BytesLike,
  Signer,
  providers,
  ContractTransaction,
  ContractReceipt,
  PayableOverrides,
  CallOverrides,
} from 'ethers'

// Re-export common ethers ABI types
export type {
  Fragment,
  FunctionFragment,
  EventFragment,
  ConstructorFragment,
  FormatTypes,
  ParamType,
} from '@ethersproject/abi'
