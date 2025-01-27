import type { SupportedChainId } from '@cowprotocol/common'
import type { Signer } from '@ethersproject/abstract-signer'
import type { Order } from '@cowprotocol/common'
import type { EcdsaSignature } from '@cowprotocol/common'
import { SigningScheme, EcdsaSigningScheme } from '@cowprotocol/common'

export { SigningScheme }
export type { EcdsaSignature }

/**
 * Encoded signature including signing scheme for the order.
 */
export interface SigningResult {
  signature: EcdsaSignature
  signingScheme: EcdsaSigningScheme
}

/**
 * Parameters for signing an order intent.
 */
export interface SignOrderParams {
  chainId: SupportedChainId
  signer: Signer
  order: Order
  signingScheme: SigningScheme
}

/**
 * Parameters for signing an order cancellation.
 */
export interface SignOrderCancellationParams {
  chainId: SupportedChainId
  signer: Signer
  orderUid: string
  signingScheme: SigningScheme
}

/**
 * Parameters for signing multiple order cancellations.
 */
export interface SignOrderCancellationsParams {
  chainId: SupportedChainId
  signer: Signer
  orderUids: string[]
  signingScheme: SigningScheme
}

/**
 * Unsigned order intent to be placed.
 */
export type UnsignedOrder = Order
