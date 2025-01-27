import type { BytesLike } from '@ethersproject/bytes'

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
  INTERNAL = 'internal',
}

export enum OrderKind {
  SELL = 'sell',
  BUY = 'buy',
}

export interface OrderUidParams {
  orderDigest: string
  owner: string
  validTo: number
}

export interface TypedDataDomain extends Record<string, unknown> {
  name: string
  version: string
  chainId: number
  verifyingContract: string
}
