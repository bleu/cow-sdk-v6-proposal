import { CoWShed__factory, CoWShedFactory__factory } from '@cowprotocol/contracts/generated'
import type { CoWShedInterface } from '@cowprotocol/contracts/generated/CoWShed'
import type { CoWShedFactoryInterface } from '@cowprotocol/contracts/generated/CoWShedFactory'

let cowShedInterfaceCache: CoWShedInterface | undefined
let cowShedFactoryInterface: CoWShedFactoryInterface | undefined

export function getCoWShedInterface(): CoWShedInterface {
  if (!cowShedInterfaceCache) {
    cowShedInterfaceCache = CoWShed__factory.createInterface()
  }

  return cowShedInterfaceCache
}

export function getCoWShedFactoryInterface(): CoWShedFactoryInterface {
  if (!cowShedFactoryInterface) {
    cowShedFactoryInterface = CoWShedFactory__factory.createInterface()
  }

  return cowShedFactoryInterface
}
