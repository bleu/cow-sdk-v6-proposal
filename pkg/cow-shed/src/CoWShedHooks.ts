import {
  Address,
  COW_SHED_FACTORY,
  COW_SHED_IMPLEMENTATION,
  SupportedChainId,
  TypedDataDomain,
} from '@cowprotocol/common'
import { COW_SHED_PROXY_INIT_CODE } from './proxyInitCode'
import { COW_SHED_712_TYPES, ICoWShedCall, ICoWShedOptions } from './types'
import { CoWShedABI } from '@cowprotocol/abi'
import { AbstractAdapter, AbstractSigner } from '@cowprotocol/sdk-abstract'
import { EcdsaSigningScheme, ecdsaSignTypedData } from '@cowprotocol/signing'

export class CowShedHooks {
  constructor(
    private chainId: SupportedChainId,
    private customOptions?: ICoWShedOptions,
    private evmAdapter?: AbstractAdapter,
  ) {}

  private withAdapter<T>(fn: (adapter: AbstractAdapter) => T): T {
    if (!this.evmAdapter) {
      throw new Error('EVM adapter not set')
    }
    return fn(this.evmAdapter)
  }

  proxyOf(user: string) {
    return this.withAdapter((adapter) => {
      const salt = adapter.humanReadableEncode(['address'], [user])
      const initCodeHash = adapter.keccak256Encode(
        ['bytes', 'bytes'],
        [
          this.proxyCreationCode(),
          adapter.humanReadableEncode(['address', 'address'], [this.getImplementationAddress(), user]),
        ],
      )
      return adapter.create2Address(this.getFactoryAddress(), salt, initCodeHash)
    })
  }

  encodeExecuteHooksForFactory(
    calls: ICoWShedCall[],
    nonce: string,
    deadline: bigint,
    user: string,
    signature: string,
  ): string {
    return this.withAdapter((adapter) => {
      const data = adapter.encodeAbiFunctionData(CoWShedABI, 'executeHooks', [calls, nonce, deadline, user, signature])
      return data
    })
  }

  async signCalls(
    calls: ICoWShedCall[],
    nonce: string,
    deadline: bigint,
    signer: AbstractSigner,
    signingScheme: EcdsaSigningScheme,
  ): Promise<string> {
    const user = await signer.getAddress()
    const proxy = this.proxyOf(user)

    const { domain, types, message } = this.infoToSign(calls, nonce, deadline, proxy)

    return await ecdsaSignTypedData(signingScheme, signer, domain, types, message)
  }

  infoToSign(calls: ICoWShedCall[], nonce: string, deadline: bigint, proxy: Address) {
    const message = {
      calls,
      nonce,
      deadline,
    }
    return { domain: this.getDomain(proxy), types: COW_SHED_712_TYPES, message }
  }

  getDomain(proxy: Address): TypedDataDomain {
    return {
      name: 'COWShed',
      version: '1.0.0',
      chainId: this.chainId,
      verifyingContract: proxy,
    }
  }

  proxyCreationCode() {
    return this.customOptions?.proxyCreationCode ?? COW_SHED_PROXY_INIT_CODE
  }

  getFactoryAddress(): Address {
    return this.customOptions?.factoryAddress ?? COW_SHED_FACTORY
  }

  getImplementationAddress() {
    return this.customOptions?.implementationAddress ?? COW_SHED_IMPLEMENTATION
  }
}
