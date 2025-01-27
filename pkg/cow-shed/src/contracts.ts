import { 
  CoWShed__factory, 
  CoWShedFactory__factory,
  type CoWShedInterface,
  type CoWShedFactoryInterface
} from '@cowprotocol/contracts'

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
