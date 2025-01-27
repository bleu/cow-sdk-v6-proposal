import { ethers } from 'ethers'
import type { Order } from '../types'

export const GPv2Order = {
  name: 'Gnosis Protocol',
  version: 'v2',
  hashOrder(order: Order, domain: ethers.TypedDataDomain): string {
    return ethers.utils._TypedDataEncoder.hash(
      domain,
      {
        Order: [
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
        ],
      },
      order
    )
  }
}
