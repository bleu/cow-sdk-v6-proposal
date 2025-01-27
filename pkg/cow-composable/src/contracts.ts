import type { providers } from 'ethers'
import { COMPOSABLE_COW_CONTRACT_ADDRESS } from '@cowprotocol/common'
import type { SupportedChainId, TypedEvent, TypedEventFilter, BaseEventObject } from '@cowprotocol/common'
import type { ComposableCoW, ComposableCoWInterface } from '@cowprotocol/contracts'
import { ComposableCoW__factory } from '@cowprotocol/contracts'
import { OrderSigningUtils } from '@cowprotocol/order-signing'

let composableCowInterfaceCache: ComposableCoWInterface | undefined
let composableCowContractCache: ComposableCoW | undefined

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
