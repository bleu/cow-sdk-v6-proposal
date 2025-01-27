import type { Result } from '@ethersproject/abi'
import type { Event, EventFilter } from '@ethersproject/contracts'

export interface BaseEventObject extends Result {
  [key: string]: unknown
}

/* eslint-disable @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars */
export interface TypedEvent<TArgsArray extends Array<any> = any[], TArgsObject = any> extends Event, Array<any> {
  args: TArgsObject & Result
  decode?(data: string, topics?: Array<string>): TArgsObject & Result
}

export interface TypedEventFilter<TArgsArray extends Array<any> = any[], TArgsObject = any> extends EventFilter {
  address?: string
  topics?: Array<string | Array<string>>
}

export interface TypedListener<TArgsArray extends Array<any> = any[], TArgsObject = any> {
  (event: TypedEvent<TArgsArray, TArgsObject>): void
}

export type OnEvent<TRes> = <TArgsArray extends Array<any> = any[], TArgsObject = any>(
  eventFilter: TypedEventFilter<TArgsArray, TArgsObject>,
  listener: TypedListener<TArgsArray, TArgsObject>
) => TRes
/* eslint-enable @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars */
