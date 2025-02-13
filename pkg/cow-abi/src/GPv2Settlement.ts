export const GPv2SettlementABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'sellToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'buyToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sellAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'buyAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'orderUid',
        type: 'bytes',
      },
    ],
    name: 'Trade',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'orderUid',
        type: 'bytes',
      },
      {
        internalType: 'bool',
        name: 'signed',
        type: 'bool',
      },
    ],
    name: 'setPreSignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'orderUid',
        type: 'bytes',
      },
    ],
    name: 'invalidateOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'domainSeparator',
    outputs: [{ name: '', type: 'bytes32' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
