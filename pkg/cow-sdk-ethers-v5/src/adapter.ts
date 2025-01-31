import { AbstractAdapter, AbstractSigner } from '@cowprotocol/sdk-abstract'
import { Address, Bytes32String, BytesString, TypedDataDomain, TypedDataTypes } from '@cowprotocol/common'
import { ethers } from 'ethers'
import { ContractAbi, ValueType } from '@cowprotocol/abi'
import { isTypedDataSigner } from '@cowprotocol/contracts'

const defaultAbiCoder = new ethers.utils.AbiCoder()
export class EthersV5Adapter implements AbstractAdapter {
  create2Address(from: Address, salt: BytesString, initCodeHash: BytesString): Address {
    return ethers.utils.getCreate2Address(from, salt, initCodeHash) as Address
  }

  humanReadableEncode(types: ValueType[], values: any[]): BytesString {
    return defaultAbiCoder.encode(types, values) as BytesString
  }

  keccak256Encode(types: ValueType[], values: any[]): BytesString {
    return ethers.utils.solidityKeccak256(types, values) as BytesString
  }

  encodeAbiFunctionData(abi: ContractAbi, functionName: string, values: any[]): BytesString {
    const iface = new ethers.utils.Interface(abi)
    return iface.encodeFunctionData(functionName, values) as BytesString
  }

  solidityPack(types: ValueType[], values: any[]): BytesString {
    return ethers.utils.solidityPack(types, values) as BytesString
  }
  arraify(value: any): Uint8Array {
    return ethers.utils.arrayify(value)
  }
  hexlify(value: any): BytesString {
    return ethers.utils.hexlify(value) as BytesString
  }
  toCheckSumAddress(address: Address): Address {
    return ethers.utils.getAddress(address) as Address
  }
  hashTypedData(domain: TypedDataDomain, types: TypedDataTypes, message: any): Bytes32String {
    return ethers.utils._TypedDataEncoder.hash(domain, types, message) as Bytes32String
  }
  normalizeSignature(signature: BytesString): BytesString {
    return ethers.utils.joinSignature(ethers.utils.splitSignature(signature)) as BytesString
  }
}

export class EthersV5Signer extends AbstractSigner {
  public adapter: EthersV5Adapter

  constructor(public signer: ethers.Signer) {
    super()
    this.adapter = new EthersV5Adapter()
  }

  getAddress(): Promise<Address> {
    return this.signer.getAddress() as Promise<Address>
  }

  isTypedDataSigner(): boolean {
    return '_signTypedData' in this.signer
  }

  signMessage(message: BytesString): Promise<BytesString> {
    return this.signer.signMessage(message) as Promise<BytesString>
  }
  signTypedData(domain: TypedDataDomain, types: TypedDataTypes, message: any): Promise<BytesString> {
    if (!isTypedDataSigner(this.signer)) {
      throw new Error('signer does not support signing typed data')
    }
    return this.signer._signTypedData(domain, types, message) as Promise<BytesString>
  }
}
