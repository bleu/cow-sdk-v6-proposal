import {
  Address,
  Bytes32String,
  BytesString,
  TypedDataDomain,
  TypedDataTypes,
  ZERO_ADDRESS,
  ZERO_BYTES32,
} from '@cowprotocol/common'
import { AbstractAdapter } from '@cowprotocol/sdk-abstract'

/**
 * Gnosis Protocol v2 order data.
 */
export interface Order {
  /**
   * Sell token address.
   */
  sellToken: string
  /**
   * Buy token address.
   */
  buyToken: string
  /**
   * An optional address to receive the proceeds of the trade instead of the
   * owner (i.e. the order signer).
   */
  receiver?: string
  /**
   * The order sell amount.
   *
   * For fill or kill sell orders, this amount represents the exact sell amount
   * that will be executed in the trade. For fill or kill buy orders, this
   * amount represents the maximum sell amount that can be executed. For partial
   * fill orders, this represents a component of the limit price fraction.
   */
  sellAmount: bigint
  /**
   * The order buy amount.
   *
   * For fill or kill sell orders, this amount represents the minimum buy amount
   * that can be executed in the trade. For fill or kill buy orders, this amount
   * represents the exact buy amount that will be executed. For partial fill
   * orders, this represents a component of the limit price fraction.
   */
  buyAmount: bigint
  /**
   * The timestamp this order is valid until
   */
  validTo: Timestamp
  /**
   * Arbitrary application specific data that can be added to an order. This can
   * also be used to ensure uniqueness between two orders with otherwise the
   * exact same parameters.
   */
  appData: HashLike
  /**
   * Fee to give to the protocol.
   */
  feeAmount: bigint
  /**
   * The order kind.
   */
  kind: OrderKind
  /**
   * Specifies whether or not the order is partially fillable.
   */
  partiallyFillable: boolean
  /**
   * Specifies how the sell token balance will be withdrawn. It can either be
   * taken using ERC20 token allowances made directly to the Vault relayer
   * (default) or using Balancer Vault internal or external balances.
   */
  sellTokenBalance?: OrderBalance
  /**
   * Specifies how the buy token balance will be paid. It can either be paid
   * directly in ERC20 tokens (default) in Balancer Vault internal balances.
   */
  buyTokenBalance?: OrderBalance
}

/**
 * Gnosis Protocol v2 order cancellation data.
 */
export interface OrderCancellations {
  /**
   * The unique identifier of the order to be cancelled.
   */
  orderUids: BytesString[]
}

/**
 * Marker address to indicate that an order is buying Ether.
 *
 * Note that this address is only has special meaning in the `buyToken` and will
 * be treated as a ERC20 token address in the `sellToken` position, causing the
 * settlement to revert.
 */
export const BUY_ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

/**
 * Gnosis Protocol v2 order flags.
 */
export type OrderFlags = Pick<Order, 'kind' | 'partiallyFillable' | 'sellTokenBalance' | 'buyTokenBalance'>

/**
 * A timestamp value.
 */
export type Timestamp = number | Date

/**
 * A hash-like app data value.
 */
export type HashLike = BytesString | number

/**
 * Order kind.
 */
export enum OrderKind {
  /**
   * A sell order.
   */
  SELL = 'sell',
  /**
   * A buy order.
   */
  BUY = 'buy',
}

/**
 * Order balance configuration.
 */
export enum OrderBalance {
  /**
   * Use ERC20 token balances.
   */
  ERC20 = 'erc20',
  /**
   * Use Balancer Vault external balances.
   *
   * This can only be specified specified for the sell balance and allows orders
   * to re-use Vault ERC20 allowances. When specified for the buy balance, it
   * will be treated as {@link OrderBalance.ERC20}.
   */
  EXTERNAL = 'external',
  /**
   * Use Balancer Vault internal balances.
   */
  INTERNAL = 'internal',
}

/**
 * The EIP-712 type fields definition for a Gnosis Protocol v2 order.
 */
export const ORDER_TYPE_FIELDS = [
  { name: 'sellToken', type: 'address' },
  { name: 'buyToken', type: 'address' },
  { name: 'receiver', type: 'address' },
  { name: 'sellAmount', type: 'uint256' },
  { name: 'buyAmount', type: 'uint256' },
  { name: 'validTo', type: 'uint32' },
  { name: 'appData', type: 'bytes32' },
  { name: 'feeAmount', type: 'uint256' },
  { name: 'kind', type: 'string' },
  { name: 'partiallyFillable', type: 'bool' },
  { name: 'sellTokenBalance', type: 'string' },
  { name: 'buyTokenBalance', type: 'string' },
]

/**
 * Normalizes a timestamp value to a Unix timestamp.
 * @param time The timestamp value to normalize.
 * @return Unix timestamp or number of seconds since the Unix Epoch.
 */
export function timestamp(t: Timestamp): number {
  return typeof t === 'number' ? t : ~~(t.getTime() / 1000)
}

/**
 * Normalizes an app data value to a 32-byte hash.
 * @param hashLike A hash-like value to normalize.
 * @returns A 32-byte hash encoded as a hex-string.
 */
export function hashify(h: HashLike): string {
  return typeof h === 'number' ? `0x${h.toString(16).padStart(64, '0')}` : ZERO_BYTES32
}

/**
 * Normalized representation of an {@link Order} for EIP-712 operations.
 */
export type NormalizedOrder = Omit<Order, 'validTo' | 'appData' | 'kind' | 'sellTokenBalance' | 'buyTokenBalance'> & {
  receiver: string
  validTo: number
  appData: string
  kind: 'sell' | 'buy'
  sellTokenBalance: 'erc20' | 'external' | 'internal'
  buyTokenBalance: 'erc20' | 'internal'
}

/**
 * The byte length of an order UID.
 */
export const ORDER_UID_LENGTH = 56

/**
 * Order unique identifier parameters.
 */
export interface OrderUidParams {
  /**
   * The EIP-712 order struct hash.
   */
  orderDigest: string
  /**
   * The owner of the order.
   */
  owner: string
  /**
   * The timestamp this order is valid until.
   */
  validTo: number | Date
}

export class OrderHandler {
  constructor(private readonly evmAdapter: AbstractAdapter) {}

  private hashify(h: number | string): string {
    return typeof h === 'number' ? `0x${h.toString(16).padStart(64, '0')}` : ZERO_BYTES32
  }

  private normalizeBuyTokenBalance(balance: OrderBalance | undefined): OrderBalance.ERC20 | OrderBalance.INTERNAL {
    switch (balance) {
      case undefined:
      case OrderBalance.ERC20:
      case OrderBalance.EXTERNAL:
        return OrderBalance.ERC20
      case OrderBalance.INTERNAL:
        return OrderBalance.INTERNAL
      default:
        throw new Error(`invalid order balance ${balance}`)
    }
  }

  private normalizeOrder(order: Order): NormalizedOrder {
    if (order.receiver === ZERO_ADDRESS) {
      throw new Error('receiver cannot be address(0)')
    }

    return {
      ...order,
      sellTokenBalance: order.sellTokenBalance ?? OrderBalance.ERC20,
      receiver: order.receiver ?? ZERO_ADDRESS,
      validTo: timestamp(order.validTo),
      appData: this.hashify(order.appData),
      buyTokenBalance: this.normalizeBuyTokenBalance(order.buyTokenBalance),
    }
  }

  public hashOrder(domain: TypedDataDomain, order: Order): string {
    return this.evmAdapter.hashTypedData(domain, { Order: ORDER_TYPE_FIELDS }, this.normalizeOrder(order))
  }

  public computeOrderUid(domain: TypedDataDomain, order: Order, owner: string): string {
    return this.packOrderUidParams({
      orderDigest: this.hashOrder(domain, order),
      owner,
      validTo: order.validTo,
    })
  }

  public packOrderUidParams({ orderDigest, owner, validTo }: OrderUidParams): string {
    return this.evmAdapter.solidityPack(['bytes32', 'address', 'uint32'], [orderDigest, owner, timestamp(validTo)])
  }

  public extractOrderUidParams(orderUid: Bytes32String): OrderUidParams {
    const bytes = this.evmAdapter.arraify(orderUid)
    if (bytes.length !== ORDER_UID_LENGTH) {
      throw new Error('invalid order UID length')
    }

    const view = new DataView(bytes.buffer)
    const owner = this.evmAdapter.hexlify(bytes.subarray(32, 52))

    if (owner.length !== 42) {
      throw new Error('invalid order UID owner')
    }

    return {
      orderDigest: this.evmAdapter.hexlify(bytes.subarray(0, 32)),
      owner: this.evmAdapter.toCheckSumAddress(owner as Address),
      validTo: view.getUint32(52),
    }
  }
}
