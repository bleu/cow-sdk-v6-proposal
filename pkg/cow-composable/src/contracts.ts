import type { providers } from 'ethers'
import { COMPOSABLE_COW_CONTRACT_ADDRESS } from '@cowprotocol/common'
import type { SupportedChainId } from '@cowprotocol/common'
import type { TypedEvent, TypedEventFilter, BaseEventObject } from '@cowprotocol/common/types/events'
import { ComposableCoW__factory } from '@cowprotocol/abi'
import type { Interface } from '@ethersproject/abi'
import { OrderSigningUtils } from '@cowprotocol/order-signing'

let composableCowInterfaceCache: Interface | undefined
let composableCowContractCache: ReturnType<typeof ComposableCoW__factory.connect> | undefined

export function getComposableCowInterface(): ComposableCoWInterface {
  if (!composableCowInterfaceCache) {
    composableCowInterfaceCache = ComposableCoW__factory.createInterface()
  }

  return composableCowInterfaceCache
}

export function getComposableCow(chain: SupportedChainId, provider: providers.Provider): ComposableCoW {
  if (!composableCowContractCache) {
    composableCowContractCache = ComposableCoW__factory.connect(COMPOSABLE_COW_CONTRACT_ADDRESS[chain], provider)
  }

  return composableCowContractCache
}
