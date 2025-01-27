import type { Order, OrderBalance, OrderKind } from '@cowprotocol/contracts'
import { ConditionalOrder } from '../../ConditionalOrder'
import type { IsValidResult, PollParams, PollResultErrors, IConditionalOrder } from '../../types'
import { PollResultCode } from '../../types'
import { encodeParams } from '../../utils'
import type { SupportedChainId, TypedEvent, TypedEventFilter, BaseEventObject } from '@cowprotocol/common'
import { COMPOSABLE_COW_CONTRACT_ADDRESS } from '@cowprotocol/common'
import { OrderSigningUtils } from '@cowprotocol/order-signing'

export const DEFAULT_ORDER_PARAMS: TestConditionalOrderParams = {
  handler: '0x910d00a310f7Dc5B29FE73458F47f519be547D3d',
  salt: '0x9379a0bf532ff9a66ffde940f94b1a025d6f18803054c1aef52dc94b15255bbe',
  data: '0x',
  isSingleOrder: true,
}

export type TestConditionalOrderParams = {
  handler: string
  salt?: string
  data: string
  isSingleOrder: boolean
}
export class TestConditionalOrder extends ConditionalOrder<string, string> {
  isSingleOrder: boolean

  constructor(params: TestConditionalOrderParams) {
    const { handler, salt, data = '0x', isSingleOrder = true } = params
    super({
      handler,
      salt,
      data,
    })
    this.isSingleOrder = isSingleOrder
  }

  get orderType(): string {
    return 'TEST'
  }

  encodeStaticInput(): string {
    return this.staticInput
  }

  testEncodeStaticInput(): string {
    return super.encodeStaticInputHelper(['uint256'], this.staticInput)
  }

  transformStructToData(params: string): string {
    return params
  }

  transformDataToStruct(params: string): string {
    return params
  }

  protected async pollValidate(_params: PollParams): Promise<PollResultErrors | undefined> {
    return undefined
  }
  protected async handlePollFailedAlreadyPresent(
    _orderUid: string,
    _order: Order,
    _params: PollParams
  ): Promise<PollResultErrors | undefined> {
    return undefined
  }

  protected async handlePollSuccess(_order: Order, _params: PollParams): Promise<string> {
    return Promise.resolve('0x')
  }

  isValid(): IsValidResult {
    return { isValid: true }
  }
  serialize(): string {
    return encodeParams(this.leaf)
  }

  toString(): string {
    throw new Error('Method not implemented.')
  }
}

export const createTestConditionalOrder = (params?: Partial<TestConditionalOrderParams>) =>
  new TestConditionalOrder({
    ...DEFAULT_ORDER_PARAMS,
    ...params,
  })
