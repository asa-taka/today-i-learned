// Data Types
// ----------

export type IdType = number

export interface User {
  id: IdType
  name: string
  favoriteThingIds: IdType[]
}

export interface Thing {
  id: IdType
  name: string
}

// Data Mock
// ---------

const thingList: Thing[] = [
  { id: 1, name: "Raindrops" },
  { id: 2, name: "Kittens" },
  { id: 3, name: "Kettles" },
  { id: 4, name: "Mittens" },
  { id: 5, name: "Packages" }
]

const userList: User[] = [
  { id: 1, name: "Alice", favoriteThingIds: [1, 2, 3, 4, 5] },
  { id: 2, name: "Bob", favoriteThingIds: [2, 4] },
  { id: 3, name: "Carol", favoriteThingIds: [1, 3] }
]

// API Mock
// --------

const emulateNetworkDelay = <V>(value: V): Promise<V> => {
  return new Promise(resolve => setTimeout(() => resolve(value), 1000))
}

export default {
  getUserById(id: IdType) {
    console.log(`API called: getUserById(${id})`)
    const user = userList.find(u => u.id === id)
    return emulateNetworkDelay(user)
  },
  getUsersByIds(ids: IdType[]) {
    console.log(`API called: getUsersByIds(${ids})`)
    const users = ids.map(id => userList.find(u => u.id === id))
    return emulateNetworkDelay(users)
  },
  getThingById(id: IdType) {
    console.log(`API called: getThingById(${id})`)
    const thing = thingList.find(t => t.id === id)
    return emulateNetworkDelay(thing)
  },
  getThingsByIds(ids: IdType[]) {
    console.log(`API called: getThingsByIds(${ids})`)
    const things = ids.map(id => thingList.find(t => t.id === id))
    return emulateNetworkDelay(things)
  }
}
