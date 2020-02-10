import React from 'react'
import { useMappedState } from 'redux-react-hook'

import { IdType } from '../../../models'
import { EntityTypeName } from '../types'
import { RootState } from '../../../store/state'

interface Props<E extends EntityTypeName> {
  id: IdType
  type: E
}

export default function LookUp<E extends EntityTypeName>(props: Props<E>) {
  const { id, type } = props
  const e = useMappedState<RootState>(state => state.cache[type][id])
  // console
}
