import { OtherAction } from '../types'
import { CacheState, initialState } from './state'
import { CacheActions } from './actions'
import { EntityTypeName } from './types'

type Actions<E extends EntityTypeName> = CacheActions<E> | OtherAction

export default function reducer<E extends EntityTypeName>(state: CacheState = initialState, action: Actions<E>): CacheState {

  if (action.type === 'cache/SET') {
    const { entityType: t, entity } = action.payload
    const cache = state[t]
    const { id } = entity
    return { ...state, [t]: { ...cache, [id]: entity } }
  }

  if (action.type === 'cache/MUTATE') {
    const { entityType: t, id, mutate } = action.payload
    const cache = state[t]
    const entity = cache[id]
    if (!entity) return state
    return { ...state, [t]: { ...cache, [id]: mutate(entity) } }
  }

  if (action.type === 'cache/DROP') {
    const { entityType: t, id } = action.payload
    const cache = state[t]
    return { ...state, [t]: { ...cache, [id]: undefined } }
  }

  return state
}
