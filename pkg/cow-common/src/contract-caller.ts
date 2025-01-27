export interface ContractCaller {
  callContract(params: { address: string; data: string }): Promise<string>

  estimateGas(params: { address: string; data: string }): Promise<bigint>

  sendTransaction(params: { address: string; data: string }): Promise<{ hash: string }>
}
