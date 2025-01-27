import { BytesLike, ethers } from 'ethers'
import { TypedDataSigner } from '@ethersproject/abstract-signer'

export type Signature = {
  signer: string
  signature: string
  signingScheme: SigningScheme
}

export enum SigningScheme {
  EIP712 = 0,
  ETHSIGN = 1,
  PRESIGN = 2,
  EIP1271 = 3,
}

export enum EcdsaSigningScheme {
  EIP712 = 0,
  ETHSIGN = 1,
}

export interface EcdsaSignature {
  r: BytesLike
  s: BytesLike
  v: number
  signatureScheme: EcdsaSigningScheme
}

export interface TypedDataVersionedSigner extends TypedDataSigner {
  _signTypedData(domain: any, types: any, value: any): Promise<string>
}

export class IntChainIdTypedDataV4Signer {
  constructor(private readonly signer: TypedDataVersionedSigner) {}

  async signTypedDataV4<T extends Record<string, any>>(
    domain: T,
    types: Record<string, Array<{ name: string; type: string }>>,
    value: Record<string, any>
  ): Promise<string> {
    return this.signer._signTypedData(domain, types, value)
  }
}

export function domain(chainId: number, verifyingContract: string): ethers.TypedDataDomain {
  return {
    name: 'Gnosis Protocol',
    version: 'v2',
    chainId,
    verifyingContract,
  }
}

export function hashOrder(order: any, domain: ethers.TypedDataDomain): string {
  return ethers.utils._TypedDataEncoder.hash(
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

export async function signOrder(
  order: any,
  domain: ethers.TypedDataDomain,
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
  domain: ethers.TypedDataDomain,
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
  domain: ethers.TypedDataDomain,
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
