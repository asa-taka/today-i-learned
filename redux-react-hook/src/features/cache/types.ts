import { User, Thing } from '../../models'

export type EntityTypes = {
  User: User
  Thing: Thing
}

export type EntityTypeName = keyof EntityTypes
