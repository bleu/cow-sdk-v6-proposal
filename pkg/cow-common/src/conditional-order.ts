import { ContractCaller } from './contract-caller'

export interface IConditionalOrder {
  // Provider-agnostic interfaces
  interface ConditionalOrderParams {
    handler: string
    salt: string
    staticInput: string
  }

  interface ConditionalOrderCalldata {
    address: string
    data: string
  }
}


export abstract class ConditionalOrder<D, S> {
  constructor(
    protected readonly contractCaller: ContractCaller,
    protected readonly params: {
      handler: string
      salt?: string
      data: D
    }
  ) {
    // Implementation
  }

  async poll(params: PollParams): Promise<PollResult> {
    // Use contractCaller instead of direct ethers calls
    const result = await this.contractCaller.callContract({
      address: this.handler,
      data: this.encodeStaticInput(),
    })
    // Rest of implementation
  }
}
