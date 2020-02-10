export type IdType = number

export interface User {
  id: IdType
  name: string
  favoriteThings: IdType[]
}

export interface Thing {
  id: IdType
  name: string
}

export type Entity = User | Thing
