// Re-export specific types and factories from generated contracts
export type { ComposableCoW, ComposableCoWInterface } from './generated/ComposableCoW'
export { ComposableCoW__factory } from './generated/factories/ComposableCoW__factory'

export type {
  ExtensibleFallbackHandler,
  ExtensibleFallbackHandlerInterface,
} from './generated/ExtensibleFallbackHandler'
export { ExtensibleFallbackHandler__factory } from './generated/factories/ExtensibleFallbackHandler__factory'

export type { TWAP, TWAPInterface } from './generated/TWAP'
export { TWAP__factory } from './generated/factories/TWAP__factory'

// Export common types and enums
export type { Order, TypedDataDomain, OrderUidParams, TypedDataSigner } from './types'
export { OrderBalance, OrderKind } from './types'

// Export GPv2Order namespace
export { GPv2Order } from './generated/GPv2Order'

// Export signing utilities
export {
  SigningScheme,
  EcdsaSigningScheme,
  IntChainIdTypedDataV4Signer,
  domain,
  hashOrder,
  packOrderUidParams,
  signOrder,
  signOrderCancellation,
  signOrderCancellations,
  computeOrderUid
} from './signing'

export type {
  Signature,
  EcdsaSignature,
  TypedDataVersionedSigner
} from './signing'

// Re-export types
export type { 
  TypedEvent, 
  TypedEventFilter, 
  TypedListener, 
  OnEvent,
  Result,
  FunctionFragment,
  EventFragment
} from './types'
