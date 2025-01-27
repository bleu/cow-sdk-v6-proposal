import { providers } from 'ethers'
import { COMPOSABLE_COW_CONTRACT_ADDRESS, SupportedChainId } from '@cowprotocol/common'
import { ComposableCoW, ComposableCoW__factory, ComposableCoWInterface } from '@cowprotocol/contracts'

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
