import { IdType } from '../../models'
import { StandardAction } from '../types'
import { EntityTypeName, EntityTypes } from './types'

// cache/SET

interface SetPayload<E extends EntityTypeName> {
  entityType: E
  entity: EntityTypes[E]
}

type SetAction<E extends EntityTypeName> = StandardAction<'cache/SET', SetPayload<E>>

function set<E extends EntityTypeName>(type: E, entity: EntityTypes[E]): SetAction<E> {
  return { type: 'cache/SET', payload: { entityType: type, entity } }
}

// cache/MUTATE

type EntityMutator<E extends EntityTypeName> = (e: EntityTypes[E]) => EntityTypes[E]

interface MutatePayload<E extends EntityTypeName> {
  entityType: E
  id: IdType
  mutate: EntityMutator<E>
}

type MutateAction<E extends EntityTypeName> = StandardAction<'cache/MUTATE', MutatePayload<E>>

function mutate<E extends EntityTypeName>(type: E, id: IdType, mutate: EntityMutator<E>): MutateAction<E> {
  return { type: 'cache/MUTATE', payload: { entityType: type, id, mutate } }
}

// cache/DROP

interface DropPayload<E extends EntityTypeName> {
  entityType: E
  id: IdType
}

type DropAction<E extends EntityTypeName> = StandardAction<'cache/DROP', DropPayload<E>>

function drop<E extends EntityTypeName>(type: E, id: IdType): DropAction<E> {
  return { type: 'cache/DROP', payload: { entityType: type, id } }
}

// Integrate Actions
// -----------------

export type CacheActions<E extends EntityTypeName> = SetAction<E> | MutateAction<E> | DropAction<E>

export default {
  set,
  mutate,
  drop,
}
