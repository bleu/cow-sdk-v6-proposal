import { CoWShed__factory, CoWShedFactory__factory } from '@cowprotocol/abi'
import { Interface } from '@ethersproject/abi'

let cowShedInterfaceCache: Interface | undefined
let cowShedFactoryInterface: Interface | undefined

export function getCoWShedInterface(): Interface {
  if (!cowShedInterfaceCache) {
    cowShedInterfaceCache = CoWShed__factory.createInterface()
  }

  return cowShedInterfaceCache
}

export function getCoWShedFactoryInterface(): Interface {
  if (!cowShedFactoryInterface) {
    cowShedFactoryInterface = CoWShedFactory__factory.createInterface()
  }

  return cowShedFactoryInterface
}
