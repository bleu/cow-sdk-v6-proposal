"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_COW_API_CONTEXT = exports.ENVS_LIST = void 0;
const chains_1 = require("./chains");
/**
 * The list of available environments.
 */
exports.ENVS_LIST = ["prod", "staging"];
/**
 * The default CoW Protocol API context.
 */
exports.DEFAULT_COW_API_CONTEXT = {
    env: "prod",
    chainId: chains_1.SupportedChainId.MAINNET,
};
//# sourceMappingURL=configs.js.map