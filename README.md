<p align="center">
  <img width="400" src="https://github.com/cowprotocol/cow-sdk/raw/main/docs/images/CoW.png" />
</p>

# CoW Protocol SDK

A comprehensive SDK for interacting with the CoW Protocol, providing a modular and flexible architecture for different web3 provider implementations.

## 📚 [Docs website](https://docs.cow.fi/)

## Test coverage

| Statements                                                                                 | Branches                                                                       | Functions                                                                                | Lines                                                                            |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/statements-94.77%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-76.78%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-97.43%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-97.67%25-brightgreen.svg?style=flat) |

## Project Structure

The SDK is organized as a monorepo containing the following key packages:

### Core Packages
- `cow-sdk`: The main SDK package providing core functionality
- `cow-order-book`: Order book API implementation
- `cow-subgraph`: Subgraph API for accessing on-chain data
- `cow-trading`: Trading functionality implementation
- `cow-common`: Shared utilities and types

### Web3 Provider Implementations
- `cow-sdk-ethers-v5`: Implementation for ethers.js v5
- `cow-sdk-ethers-v6`: Implementation for ethers.js v6
- `cow-sdk-viem`: Implementation using viem
- `cow-sdk-wagmi`: Implementation for wagmi hooks

### Support Packages
- `cow-abi`: Contract ABIs
- `cow-config`: Configuration utilities
- `cow-composable`: Composable order utilities
- `cow-order-signing`: Order signing utilities
- `config-typescript`, `config-eslint`: Shared configurations

## Getting Started

**Usage examples: [VanillaJS](https://github.com/cowprotocol/cow-sdk/blob/main/examples/vanilla/src/index.ts), [Create React App](https://github.com/cowprotocol/cow-sdk/blob/main/examples/cra/src/pages/getOrders/index.tsx), [NodeJS](https://github.com/cowprotocol/cow-sdk/blob/main/examples/nodejs/src/index.ts)**

### Installation

```bash
yarn add @cowprotocol/cow-sdk
```

## [Trading SDK](https://github.com/cowprotocol/cow-sdk/blob/main/src/trading/README.md)

CoW Protocol is intent based, decentralized trading protocol that allows users to trade ERC-20 tokens.

The basic swap flow:
1. 🔎 Get a quote (price) for a trade (_or define your own price with a limit order_)
2. ✍️ Sign the order
3. ✅ Post the order to the order-book

The easiest way to start trading is to use the `TradingSdk`:

```typescript
import { SupportedChainId, OrderKind, TradeParameters, TradingSdk } from '@cowprotocol/cow-sdk'

// Initialize the SDK
const sdk = new TradingSdk({
  chainId: SupportedChainId.SEPOLIA,
  signer: '<privateKeyOrEthersSigner>',
  appCode: '<YOUR_APP_CODE>',
})

// Define trade parameters
const parameters: TradeParameters = {
  kind: OrderKind.BUY,
  sellToken: '0xfff9976782d46cc05630d1f6ebab18b2324d6b14',
  sellTokenDecimals: 18,
  buyToken: '0x0625afb445c3b6b7b929342a04a22599fd5dbb59',
  buyTokenDecimals: 18,
  amount: '120000000000000000'
}

// Post the order
const orderId = await sdk.postSwapOrder(parameters)

console.log('Order created, id: ', orderId)
```

## Other Utilities

- `OrderBookApi` - provides the ability to retrieve orders and trades from the CoW Protocol order-book, as well as add and cancel them
- `OrderSigningUtils` - serves to sign orders and cancel them using [EIP-712](https://eips.ethereum.org/EIPS/eip-712)
- `SubgraphApi` - provides statistics data about CoW protocol from [Subgraph](https://github.com/cowprotocol/subgraph), such as trading volume, trade count and others

```typescript
import { OrderBookApi, OrderSigningUtils, SubgraphApi } from '@cowprotocol/cow-sdk'

const chainId = 100 // Gnosis chain

const orderBookApi = new OrderBookApi({ chainId })
const subgraphApi = new SubgraphApi({ chainId })
const orderSigningUtils = new OrderSigningUtils()
```

### Sign, Fetch, Post and Cancel Order

For clarity, let's look at the use of the API with a practical example:
Exchanging `0.4 GNO` to `WETH` on `Gnosis chain` network.

```typescript
import { OrderBookApi, OrderSigningUtils, SupportedChainId } from '@cowprotocol/cow-sdk'
import { Web3Provider } from '@ethersproject/providers'

const account = 'YOUR_WALLET_ADDRESS'
const chainId = 100 // Gnosis chain
const provider = new Web3Provider(window.ethereum)
const signer = provider.getSigner()

const quoteRequest = {
  sellToken: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1', // WETH gnosis chain
  buyToken: '0x9c58bacc331c9aa871afd802db6379a98e80cedb', // GNO gnosis chain
  from: account,
  receiver: account,
  sellAmountBeforeFee: (0.4 * 10 ** 18).toString(), // 0.4 WETH
  kind: OrderQuoteSide.kind.SELL,
}

const orderBookApi = new OrderBookApi({ chainId: SupportedChainId.GNOSIS_CHAIN })

async function main() {
  const { quote } = await orderBookApi.getQuote(quoteRequest)
  const orderSigningResult = await OrderSigningUtils.signOrder(quote, chainId, signer)
  const orderId = await orderBookApi.sendOrder({ ...quote, ...orderSigningResult })
  const order = await orderBookApi.getOrder(orderId)
  const trades = await orderBookApi.getTrades({ orderId })
  const orderCancellationSigningResult = await OrderSigningUtils.signOrderCancellations([orderId], chainId, signer)
  const cancellationResult = await orderBookApi.sendSignedOrderCancellations({
    ...orderCancellationSigningResult,
    orderUids: [orderId],
  })

  console.log('Results: ', { orderId, order, trades, orderCancellationSigningResult, cancellationResult })
}
```

## Architecture

The SDK is built around three main APIs:

1. **Order Book API**: Manages orders lifecycle (creation, querying, cancellation)
2. **Subgraph API**: Provides access to indexed on-chain data
3. **Metadata API**: Handles order metadata encoding/decoding

### Key Features
- Provider-agnostic core functionality
- Modular architecture allowing flexible web3 provider integration
- Comprehensive order management system
- Type-safe implementations

For detailed architecture documentation, see [SDK Architecture](https://github.com/cowprotocol/cow-sdk/blob/main/docs/architecture.md)

## Development

### Install Dependencies

```bash
pnpm install
```

### Build

```bash
pnpm build

# Build in watch mode
pnpm dev
```

### Testing

```bash
pnpm test
```

### Code Generation

Some parts of the SDK are automatically generated. This is the case for the Order Book API and the Subgraph API.

```bash
# Re-create automatically generated code
pnpm codegen
```

## Remote Caching

The project uses Turborepo's Remote Caching feature for improved build performance across teams and CI/CD pipelines. To enable Remote Caching:

1. Authenticate with Vercel:
```bash
npx turbo login
```

2. Link your Turborepo to Remote Cache:
```bash
npx turbo link
```

## Useful Links

- [CoW Protocol Documentation](https://docs.cow.fi/)
- [API Documentation](https://api.cow.fi/docs)
- [Subgraph Documentation](https://docs.cow.fi/cow-sdk/querying-the-cow-subgraph)
- [Order Metadata Documentation](https://docs.cow.fi/cow-sdk/order-meta-data-appdata)
