import { SupportedChainId } from './chains';
export declare const ETH_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export declare const EXTENSIBLE_FALLBACK_HANDLER = "0x2f55e8b20D0B9FEFA187AA7d00B6Cbe563605bF5";
export declare const COMPOSABLE_COW = "0xfdaFc9d1902f4e0b84f65F49f244b32b31013b74";
export declare const COW_SHED_FACTORY = "0x00E989b87700514118Fa55326CD1cCE82faebEF6";
export declare const COW_SHED_IMPLEMENTATION = "0x2CFFA8cf11B90C9F437567b86352169dF4009F73";
/**
 * The list of supported chains.
 */
export declare const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[];
export declare function mapSupportedNetworks<T>(value: (chainId: SupportedChainId) => T): Record<SupportedChainId, T>;
export declare function mapSupportedNetworks<T>(value: T): Record<SupportedChainId, T>;
export declare function mapAddressToSupportedNetworks(address: string): Record<SupportedChainId, string>;
/**
 * An object containing the addresses of the CoW Protocol settlement contracts for each supported chain.
 */
export declare const COW_PROTOCOL_SETTLEMENT_CONTRACT_ADDRESS: Record<SupportedChainId, string>;
/**
 * An object containing the addresses of the CoW Protocol Vault realyer contracts for each supported chain.
 */
export declare const COW_PROTOCOL_VAULT_RELAYER_ADDRESS: Record<SupportedChainId, string>;
/**
 * An object containing the addresses of the `ExtensibleFallbackHandler` contracts for each supported chain.
 */
export declare const EXTENSIBLE_FALLBACK_HANDLER_CONTRACT_ADDRESS: Record<SupportedChainId, string>;
/**
 * An object containing the addresses of the `ComposableCow` contracts for each supported chain.
 */
export declare const COMPOSABLE_COW_CONTRACT_ADDRESS: Record<SupportedChainId, string>;
/**
 * An object containing the addresses of wrapped native currencies for each supported chain.
 */
export declare const WRAPPED_NATIVE_CURRENCIES: Record<SupportedChainId, string>;
/**
 * An object containing the addresses of ETH flow contracts for each supported chain.
 */
export declare const ETH_FLOW_ADDRESSES: Record<SupportedChainId, string>;
export declare const BARN_ETH_FLOW_ADDRESSES: Record<SupportedChainId, string>;
export declare const MAX_VALID_TO_EPOCH = 4294967295;
//# sourceMappingURL=consts.d.ts.map