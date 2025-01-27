"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_VALID_TO_EPOCH = exports.BARN_ETH_FLOW_ADDRESSES = exports.ETH_FLOW_ADDRESSES = exports.WRAPPED_NATIVE_CURRENCIES = exports.COMPOSABLE_COW_CONTRACT_ADDRESS = exports.EXTENSIBLE_FALLBACK_HANDLER_CONTRACT_ADDRESS = exports.COW_PROTOCOL_VAULT_RELAYER_ADDRESS = exports.COW_PROTOCOL_SETTLEMENT_CONTRACT_ADDRESS = exports.ALL_SUPPORTED_CHAIN_IDS = exports.COW_SHED_IMPLEMENTATION = exports.COW_SHED_FACTORY = exports.COMPOSABLE_COW = exports.EXTENSIBLE_FALLBACK_HANDLER = exports.ETH_ADDRESS = void 0;
exports.mapSupportedNetworks = mapSupportedNetworks;
exports.mapAddressToSupportedNetworks = mapAddressToSupportedNetworks;
const chains_1 = require("./chains");
exports.ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
exports.EXTENSIBLE_FALLBACK_HANDLER = '0x2f55e8b20D0B9FEFA187AA7d00B6Cbe563605bF5';
exports.COMPOSABLE_COW = '0xfdaFc9d1902f4e0b84f65F49f244b32b31013b74';
exports.COW_SHED_FACTORY = '0x00E989b87700514118Fa55326CD1cCE82faebEF6';
exports.COW_SHED_IMPLEMENTATION = '0x2CFFA8cf11B90C9F437567b86352169dF4009F73';
const VAULT_RELAYER = '0xC92E8bdf79f0507f65a392b0ab4667716BFE0110';
const SETTLEMENT_CONTRACT = '0x9008D19f58AAbD9eD0D60971565AA8510560ab41';
/**
 * The list of supported chains.
 */
exports.ALL_SUPPORTED_CHAIN_IDS = Object.values(chains_1.SupportedChainId).filter((chainId) => typeof chainId === 'number');
function mapSupportedNetworks(value) {
    return exports.ALL_SUPPORTED_CHAIN_IDS.reduce((acc, chainId) => ({
        ...acc,
        [chainId]: typeof value === 'function' ? value(chainId) : value,
    }), {});
}
function mapAddressToSupportedNetworks(address) {
    return mapSupportedNetworks(address);
}
/**
 * An object containing the addresses of the CoW Protocol settlement contracts for each supported chain.
 */
exports.COW_PROTOCOL_SETTLEMENT_CONTRACT_ADDRESS = mapAddressToSupportedNetworks(SETTLEMENT_CONTRACT);
/**
 * An object containing the addresses of the CoW Protocol Vault realyer contracts for each supported chain.
 */
exports.COW_PROTOCOL_VAULT_RELAYER_ADDRESS = mapAddressToSupportedNetworks(VAULT_RELAYER);
/**
 * An object containing the addresses of the `ExtensibleFallbackHandler` contracts for each supported chain.
 */
exports.EXTENSIBLE_FALLBACK_HANDLER_CONTRACT_ADDRESS = mapAddressToSupportedNetworks(exports.EXTENSIBLE_FALLBACK_HANDLER);
/**
 * An object containing the addresses of the `ComposableCow` contracts for each supported chain.
 */
exports.COMPOSABLE_COW_CONTRACT_ADDRESS = mapAddressToSupportedNetworks(exports.COMPOSABLE_COW);
/**
 * An object containing the addresses of wrapped native currencies for each supported chain.
 */
exports.WRAPPED_NATIVE_CURRENCIES = {
    [chains_1.SupportedChainId.MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    [chains_1.SupportedChainId.GNOSIS_CHAIN]: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    [chains_1.SupportedChainId.ARBITRUM_ONE]: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    [chains_1.SupportedChainId.SEPOLIA]: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    [chains_1.SupportedChainId.BASE]: '0x4200000000000000000000000000000000000006',
};
/**
 * An object containing the addresses of ETH flow contracts for each supported chain.
 */
exports.ETH_FLOW_ADDRESSES = {
    [chains_1.SupportedChainId.MAINNET]: '0x40A50cf069e992AA4536211B23F286eF88752187',
    [chains_1.SupportedChainId.GNOSIS_CHAIN]: '0x40A50cf069e992AA4536211B23F286eF88752187',
    [chains_1.SupportedChainId.ARBITRUM_ONE]: '0x552fcecc218158fff20e505c8f3ad24f8e1dd33c',
    [chains_1.SupportedChainId.SEPOLIA]: '0x0b7795E18767259CC253a2dF471db34c72B49516',
    [chains_1.SupportedChainId.BASE]: '0x3d1b389f1707DB3d4c5344d5669DBda6b5D6Ab51',
};
exports.BARN_ETH_FLOW_ADDRESSES = {
    [chains_1.SupportedChainId.MAINNET]: '0xD02De8Da0B71E1B59489794F423FaBBa2AdC4d93',
    [chains_1.SupportedChainId.GNOSIS_CHAIN]: '0xD02De8Da0B71E1B59489794F423FaBBa2AdC4d93',
    [chains_1.SupportedChainId.ARBITRUM_ONE]: '0x6dfe75b5ddce1ade279d4fa6bd6aef3cbb6f49db',
    [chains_1.SupportedChainId.SEPOLIA]: '0x2671994c7D224ac4799ac2cf6Ef9EF187d42C69f',
    [chains_1.SupportedChainId.BASE]: '0x3C3eA1829891BC9bEC3d06A81d5d169e52a415e3',
};
exports.MAX_VALID_TO_EPOCH = 4294967295; // Max uint32 (Feb 07 2106 07:28:15 GMT+0100)
//# sourceMappingURL=consts.js.map