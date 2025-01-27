"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../../src");
const privateKey = 'xxx';
(async function () {
    return;
    (0, src_1.postSwapOrder)({
        appCode: 'sdk-example',
        signer: privateKey,
        chainId: src_1.SupportedChainId.SEPOLIA,
        kind: src_1.OrderKind.SELL,
        sellToken: '0xfff9976782d46cc05630d1f6ebab18b2324d6b14',
        sellTokenDecimals: 18,
        buyToken: '0x0625afb445c3b6b7b929342a04a22599fd5dbb59',
        buyTokenDecimals: 18,
        amount: '120000000000000000',
    });
})();
(async function () {
    return;
    (0, src_1.postLimitOrder)({
        appCode: 'sdk-example',
        signer: privateKey,
        chainId: src_1.SupportedChainId.SEPOLIA,
        kind: src_1.OrderKind.BUY,
        sellToken: '0xfff9976782d46cc05630d1f6ebab18b2324d6b14',
        sellTokenDecimals: 18,
        buyToken: '0x0625afb445c3b6b7b929342a04a22599fd5dbb59',
        buyTokenDecimals: 18,
        sellAmount: '120000000000000000',
        buyAmount: '66600000000000000000',
        networkCostsAmount: '0',
    });
})();
(async function () {
    (0, src_1.postSwapOrder)({
        appCode: 'sdk-example',
        signer: privateKey,
        chainId: src_1.SupportedChainId.SEPOLIA,
        kind: src_1.OrderKind.SELL,
        sellToken: '0xfff9976782d46cc05630d1f6ebab18b2324d6b14',
        sellTokenDecimals: 18,
        buyToken: '0x0625afb445c3b6b7b929342a04a22599fd5dbb59',
        buyTokenDecimals: 18,
        amount: '120000000000000000',
    }, {
        appData: {
            metadata: {
                partnerFee: {
                    bps: 100,
                    recipient: '0xfb3c7eb936cAA12B5A884d612393969A557d4307',
                },
            },
        },
    });
})();
