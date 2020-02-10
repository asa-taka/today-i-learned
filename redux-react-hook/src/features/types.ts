export interface StandardAction<T, P> {
  type: T,
  payload: P
}

export type OtherAction = StandardAction<'KEY_OF_OTHER_ACTION', any>
