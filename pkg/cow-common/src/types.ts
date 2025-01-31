// Basic types
// TODO: Specify more this types
export type Address = `0x${string}`
export type BytesString = `0x${string}`
export type Bytes32String = `0x${string}`

export type EIP712TypedDataField = {
  readonly name: string
  readonly type: string
}

export type TypedDataTypes = {
  readonly [key: string]: EIP712TypedDataField[]
}

export interface TypedDataDomain {
  readonly name?: string
  readonly version?: string
  readonly chainId?: number
  readonly verifyingContract?: Address
  readonly salt?: Bytes32String
}

// Helper type for structured typed data
export interface TypedMessage<T> {
  readonly types: TypedDataTypes
  readonly primaryType: string
  readonly domain: TypedDataDomain
  readonly message: T
}

// Helper type for creating type-safe message types
export type MessageTypeProperty<T> = {
  readonly [K in keyof T]: T[K] extends Address
    ? 'address'
    : T[K] extends BytesString
      ? 'bytes'
      : T[K] extends Bytes32String
        ? 'bytes32'
        : T[K] extends string
          ? 'string'
          : T[K] extends boolean
            ? 'bool'
            : T[K] extends number
              ? 'uint256' | 'int256' | `uint${number}` | `int${number}`
              : T[K] extends Array<infer U>
                ? `${Extract<MessageTypeProperty<U>, string>}[]`
                : never
}
