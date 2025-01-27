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

// Export CoWShed types and factories
export type { CoWShed, CoWShedInterface } from './generated/CoWShed'
export { CoWShed__factory } from './generated/factories/CoWShed__factory'

export type { CoWShedFactory, CoWShedFactoryInterface } from './generated/CoWShedFactory'
export { CoWShedFactory__factory } from './generated/factories/CoWShedFactory__factory'

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
  hashTypedData,
  isTypedDataSigner,
  packOrderUidParams,
  signOrder,
  signOrderCancellation,
  signOrderCancellations,
  computeOrderUid,
} from './signing'

export type { 
  Signature, 
  EcdsaSignature, 
  TypedDataVersionedSigner,
  TypedDataTypes 
} from './signing'

// Re-export types
export type { 
  TypedEvent, 
  TypedEventFilter, 
  TypedListener, 
  OnEvent, 
  Result, 
  FunctionFragment, 
  EventFragment,
  BaseEventObject
} from './types'
