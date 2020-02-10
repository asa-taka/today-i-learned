import { IdType } from '../../models'
import { EntityTypes } from './types'

export type CacheState = {
  [K in keyof EntityTypes]: Record<IdType, EntityTypes[K]>
}

export const initialState: CacheState = {
  User: {},
  Thing: {},
}
