import { BytesLike, ethers } from 'ethers'
import { TypedDataSigner } from '@ethersproject/abstract-signer'
import type { TypedDataDomain } from './types'

export enum SigningScheme {
  EIP712 = 0,
  ETHSIGN = 1,
  PRESIGN = 2,
  EIP1271 = 3,
}

export enum EcdsaSigningScheme {
  EIP712 = SigningScheme.EIP712,
  ETHSIGN = SigningScheme.ETHSIGN,
}

export type Signature = {
  signer: string
  signature: string
  signingScheme: SigningScheme
}

export interface EcdsaSignature {
  r: BytesLike
  s: BytesLike
  v: number
  signatureScheme: EcdsaSigningScheme
}

export interface TypedDataVersionedSigner extends TypedDataSigner {
  _signTypedData(
    domain: Record<string, unknown>,
    types: Record<string, Array<{ name: string; type: string }>>,
    value: Record<string, unknown>
  ): Promise<string>
}

export type TypedDataTypes = Record<string, Array<{ name: string; type: string }>>

export class IntChainIdTypedDataV4Signer {
  constructor(private readonly signer: TypedDataVersionedSigner) {}

  async signTypedDataV4<T extends Record<string, unknown>>(
    domain: T,
    types: TypedDataTypes,
    value: Record<string, unknown>
  ): Promise<string> {
    return this.signer._signTypedData(domain, types, value)
  }
}

export function domain(chainId: number, verifyingContract: string): Record<string, unknown> {
  return {
    name: 'Gnosis Protocol',
    version: 'v2',
    chainId,
    verifyingContract,
  }
}

export function hashTypedData(
  domain: Record<string, unknown>,
  types: TypedDataTypes,
  value: Record<string, unknown>
): string {
  return ethers.utils._TypedDataEncoder.hash(domain, types, value)
}

export function hashOrder(order: Record<string, unknown>, domain: Record<string, unknown>): string {
  return hashTypedData(
    domain,
    {
      Order: [
        { name: 'sellToken', type: 'address' },
        { name: 'buyToken', type: 'address' },
        { name: 'receiver', type: 'address' },
        { name: 'sellAmount', type: 'uint256' },
        { name: 'buyAmount', type: 'uint256' },
        { name: 'validTo', type: 'uint32' },
        { name: 'appData', type: 'bytes32' },
        { name: 'feeAmount', type: 'uint256' },
        { name: 'kind', type: 'string' },
        { name: 'partiallyFillable', type: 'bool' },
        { name: 'sellTokenBalance', type: 'string' },
        { name: 'buyTokenBalance', type: 'string' },
      ],
    },
    order
  )
}

export function packOrderUidParams(params: { orderDigest: string; owner: string; validTo: number }): string {
  return ethers.utils.solidityPack(['bytes32', 'address', 'uint32'], [params.orderDigest, params.owner, params.validTo])
}

export function isTypedDataSigner(signer: unknown): signer is TypedDataSigner {
  return typeof (signer as TypedDataSigner)._signTypedData === 'function'
}

export async function signOrder(
  order: Record<string, unknown>,
  domain: Record<string, unknown>,
  signer: TypedDataVersionedSigner
): Promise<string> {
  return signer._signTypedData(
    domain,
    {
      Order: [
        { name: 'sellToken', type: 'address' },
        { name: 'buyToken', type: 'address' },
        { name: 'receiver', type: 'address' },
        { name: 'sellAmount', type: 'uint256' },
        { name: 'buyAmount', type: 'uint256' },
        { name: 'validTo', type: 'uint32' },
        { name: 'appData', type: 'bytes32' },
        { name: 'feeAmount', type: 'uint256' },
        { name: 'kind', type: 'string' },
        { name: 'partiallyFillable', type: 'bool' },
        { name: 'sellTokenBalance', type: 'string' },
        { name: 'buyTokenBalance', type: 'string' },
      ],
    },
    order
  )
}

export async function signOrderCancellation(
  orderUid: string,
  domain: Record<string, unknown>,
  signer: TypedDataVersionedSigner
): Promise<string> {
  return signer._signTypedData(
    domain,
    {
      OrderCancellation: [{ name: 'orderUid', type: 'bytes' }],
    },
    { orderUid }
  )
}

export async function signOrderCancellations(
  orderUids: string[],
  domain: Record<string, unknown>,
  signer: TypedDataVersionedSigner
): Promise<string> {
  return signer._signTypedData(
    domain,
    {
      OrderCancellations: [{ name: 'orderUids', type: 'bytes[]' }],
    },
    { orderUids }
  )
}

export function computeOrderUid(params: { orderDigest: string; owner: string; validTo: number }): string {
  return packOrderUidParams(params)
}
