import { ContractAbi, ValueType } from '@cowprotocol/abi'
import { Address, Bytes32String, BytesString, TypedDataDomain, TypedDataTypes } from '@cowprotocol/common'

export abstract class AbstractAdapter {
  abstract create2Address(from: Address, salt: BytesString, initCodeHash: BytesString): Address
  abstract humanReadableEncode(types: ValueType[], values: any[]): BytesString
  abstract keccak256Encode(types: ValueType[], values: any[]): Bytes32String
  abstract encodeAbiFunctionData(abi: ContractAbi, functionName: string, values: any[]): BytesString
  abstract solidityPack(types: ValueType[], values: any[]): BytesString
  abstract arraify(value: any): Uint8Array
  abstract hexlify(value: any): BytesString
  abstract toCheckSumAddress(address: Address): Address
  abstract hashTypedData(domain: TypedDataDomain, types: TypedDataTypes, message: any): Bytes32String
  abstract normalizeSignature(signature: BytesString): BytesString
}

export abstract class AbstractSigner {
  abstract adapter: AbstractAdapter
  abstract getAddress(): Promise<Address>
  abstract isTypedDataSigner(): boolean
  abstract signMessage(message: BytesString): Promise<BytesString>
  abstract signTypedData(domain: TypedDataDomain, types: TypedDataTypes, message: any): Promise<BytesString>
}
