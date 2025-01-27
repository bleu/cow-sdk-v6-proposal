import '@cowprotocol/order-book/__mock__/api'
import { decodeParams, encodeParams, fromStructToOrder, isValidAbi } from './utils'
import { DurationType, StartTimeValue } from './orderTypes/Twap'
import type { TwapData, TwapStruct } from './orderTypes/Twap'
import { transformDataToStruct } from './orderTypes/Twap'
import { utils } from 'ethers'
import type { BigNumber } from 'ethers'
import type { SupportedChainId, TypedEvent, TypedEventFilter, BaseEventObject } from '@cowprotocol/common'
import type { Order, OrderBalance, OrderKind } from '@cowprotocol/contracts'
import type { IConditionalOrder } from './types'

export const TWAP_PARAMS_TEST: TwapData = {
  sellToken: '0x6810e776880C02933D47DB1b9fc05908e5386b96',
  buyToken: '0xDAE5F1590db13E3B40423B5b5c5fbf175515910b',
  receiver: '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',
  sellAmount: utils.parseEther('1'),
  buyAmount: utils.parseEther('1'),
  timeBetweenParts: BigNumber.from(60 * 60),
  numberOfParts: BigNumber.from(10),
  durationOfPart: {
    durationType: DurationType.AUTO,
  },
  startTime: {
    startType: StartTimeValue.AT_MINING_TIME,
  },
  appData: '0xd51f28edffcaaa76be4a22f6375ad289272c037f3cc072345676e88d92ced8b5',
}

const TWAP_STRUCT_ABI = [
  'tuple(address sellToken, address buyToken, address receiver, uint256 partSellAmount, uint256 minPartLimit, uint256 t0, uint256 n, uint256 t, uint256 span, bytes32 appData)',
]

const CONDITIONAL_ORDER_PARAMS = {
  handler: '0x6cF1e9cA41f7611dEf408122793c358a3d11E5a5',
  salt: '0x60864964e82f232a1a5bfada34d8bb0fdc73b0642be4a4086eb55176654db064',
  staticInput:
    '0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000006cf1e9ca41f7611def408122793c358a3d11e5a560864964e82f232a1a5bfada34d8bb0fdc73b0642be4a4086eb55176654db064000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001400000000000000000000000006810e776880c02933d47db1b9fc05908e5386b96000000000000000000000000dae5f1590db13e3b40423b5b5c5fbf175515910b000000000000000000000000deadbeefdeadbeefdeadbeefdeadbeefdeadbeef000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000000000000000000000000000016345785d8a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000e100000000000000000000000000000000000000000000000000000000000000000d51f28edffcaaa76be4a22f6375ad289272c037f3cc072345676e88d92ced8b5',
}
const ABI_ENCODED_ORDER =
  '0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000006cf1e9ca41f7611def408122793c358a3d11e5a560864964e82f232a1a5bfada34d8bb0fdc73b0642be4a4086eb55176654db064000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006cf1e9ca41f7611def408122793c358a3d11e5a560864964e82f232a1a5bfada34d8bb0fdc73b0642be4a4086eb55176654db064000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001400000000000000000000000006810e776880c02933d47db1b9fc05908e5386b96000000000000000000000000dae5f1590db13e3b40423b5b5c5fbf175515910b000000000000000000000000deadbeefdeadbeefdeadbeefdeadbeefdeadbeef000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000000000000000000000000000016345785d8a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000e100000000000000000000000000000000000000000000000000000000000000000d51f28edffcaaa76be4a22f6375ad289272c037f3cc072345676e88d92ced8b5'

const TWAP_STRUCT: TwapStruct = transformDataToStruct(TWAP_PARAMS_TEST)

describe('encodeParams', () => {
  test('encodeParams: Fails if invalid params', () => {
    expect(() => encodeParams({ handler: '0xdeadbeef', salt: '0x', staticInput: '0x' })).toThrow()
  })

  test('encodeParams: Happy path', () => {
    expect(encodeParams(CONDITIONAL_ORDER_PARAMS)).toEqual(ABI_ENCODED_ORDER)
  })
})

describe('decodeParams', () => {
  test('decodeParams: Fails if invalid params', () => {
    expect(() => decodeParams('0x')).toThrow()
  })

  test('decodeParams: Happy path', () => {
    expect(decodeParams(ABI_ENCODED_ORDER)).toEqual(CONDITIONAL_ORDER_PARAMS)
  })
})

describe('isValidAbi', () => {
  test('isValidAbi: Fails if invalid params', () => {
    expect(isValidAbi(TWAP_STRUCT_ABI, ['0x0'])).toEqual(false)
  })

  test('isValidAbi: Happy path', () => {
    expect(isValidAbi(TWAP_STRUCT_ABI, [TWAP_STRUCT])).toEqual(true)
  })
})

describe('fromStructToOrder', () => {
  test('Happy path', () => {
    const orderData: Order = {
      sellToken: '0x177127622c4A00F3d409B75571e12cB3c8973d3c',
      buyToken: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      receiver: '0x50736F4707eD0c7bae86bd801d65377BB3739550',
      sellAmount: BigNumber.from('497154622979742700000'),
      buyAmount: BigNumber.from('26618938443780026000'),
      validTo: 1698723209,
      appData: '0x7cc001e5e82772cf4262f2836ae90e1844d2c12ad2fbc346f27a76f5d1cc9d39',
      feeAmount: BigNumber.from(0),
      kind: '0xf3b277728b3fee749481eb3e0b3b48980dbbab78658fc419025cb16eee346775',
      partiallyFillable: false,
      sellTokenBalance: '0x5a28e9363bb942b639270062aa6bb295f434bcdfc42c97267bf003f272060dc9',
      buyTokenBalance: '0x5a28e9363bb942b639270062aa6bb295f434bcdfc42c97267bf003f272060dc9',
    }
    expect(fromStructToOrder(orderData)).toEqual({
      ...orderData,
      kind: 'sell',
      sellTokenBalance: 'erc20',
      buyTokenBalance: 'erc20',
    })
  })
})
