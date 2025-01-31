import { BytesString, TypedDataDomain, TypedDataTypes } from '@cowprotocol/common'
import { AbstractSigner } from '@cowprotocol/sdk-abstract'

/**
 * Value returned by a call to `isValidSignature` if the signature was verified
 * successfully. The value is defined in the EIP-1271 standard as:
 * bytes4(keccak256("isValidSignature(bytes32,bytes)"))
 */
export const EIP1271_MAGICVALUE = '0x1626ba7e'

/**
 * The signing scheme used to sign the order.
 */
export enum SigningScheme {
  /**
   * The EIP-712 typed data signing scheme. This is the preferred scheme as it
   * provides more infomation to wallets performing the signature on the data
   * being signed.
   *
   * <https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md#definition-of-domainseparator>
   */
  EIP712 = 0b00,
  /**
   * Message signed using eth_sign RPC call.
   */
  ETHSIGN = 0b01,
  /**
   * Smart contract signatures as defined in EIP-1271.
   *
   * <https://eips.ethereum.org/EIPS/eip-1271>
   */
  EIP1271 = 0b10,
  /**
   * Pre-signed order.
   */
  PRESIGN = 0b11,
}

export type EcdsaSigningScheme = SigningScheme.EIP712 | SigningScheme.ETHSIGN

/**
 * The signature of an order.
 */
export type Signature = EcdsaSignature | Eip1271Signature | PreSignSignature

/**
 * ECDSA signature of an order.
 */
export interface EcdsaSignature {
  /**
   * The signing scheme used in the signature.
   */
  scheme: EcdsaSigningScheme
  /**
   * The ECDSA signature.
   */
  data: BytesString
}

/**
 * EIP-1271 signature data.
 */
export interface Eip1271SignatureData {
  /**
   * The verifying contract address.
   */
  verifier: string
  /**
   * The arbitrary signature data used for verification.
   */
  signature: BytesString
}

/**
 * EIP-1271 signature of an order.
 */
export interface Eip1271Signature {
  /**
   * The signing scheme used in the signature.
   */
  scheme: SigningScheme.EIP1271
  /**
   * The signature data.
   */
  data: Eip1271SignatureData
}

/**
 * Signature data for a pre-signed order.
 */
export interface PreSignSignature {
  /**
   * The signing scheme used in the signature.
   */
  scheme: SigningScheme.PRESIGN
  /**
   * The address of the signer.
   */
  data: string
}

export async function ecdsaSignTypedData(
  scheme: EcdsaSigningScheme,
  owner: AbstractSigner,
  domain: TypedDataDomain,
  types: TypedDataTypes,
  data: Record<BytesString, unknown>,
): Promise<BytesString> {
  let signature: BytesString | null = null

  switch (scheme) {
    case SigningScheme.EIP712:
      if (owner.isTypedDataSigner()) {
        throw new Error('signer does not support signing typed data')
      }
      signature = await owner.signTypedData(domain, types, data)
      break
    case SigningScheme.ETHSIGN:
      signature = await owner.signMessage(owner.adapter.hashTypedData(domain, types, data))
      break
    default:
      throw new Error('invalid signing scheme')
  }

  // Passing the signature through split/join to normalize the `v` byte.
  // Some wallets do not pad it with `27`, which causes a signature failure
  // `splitSignature` pads it if needed, and `joinSignature` simply puts it back together
  return owner.adapter.normalizeSignature(signature)
}
