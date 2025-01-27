"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedChainId = void 0;
/**
 * Supported chains and their `chainId` for the SDK.
 * @enum
 */
var SupportedChainId;
(function (SupportedChainId) {
    SupportedChainId[SupportedChainId["MAINNET"] = 1] = "MAINNET";
    SupportedChainId[SupportedChainId["GNOSIS_CHAIN"] = 100] = "GNOSIS_CHAIN";
    SupportedChainId[SupportedChainId["ARBITRUM_ONE"] = 42161] = "ARBITRUM_ONE";
    SupportedChainId[SupportedChainId["BASE"] = 8453] = "BASE";
    SupportedChainId[SupportedChainId["SEPOLIA"] = 11155111] = "SEPOLIA";
})(SupportedChainId || (exports.SupportedChainId = SupportedChainId = {}));
//# sourceMappingURL=chains.js.map