interface User {
  id: number
  name: string
}

const users = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'bob' },
  { id: 3, name: 'cat' },
]

const userStore: Map<number, User> = new Map()
users.forEach(u => userStore.set(u.id, u))

const simulateNetworkDelay = <V>(value: V): Promise<V> => {
  return new Promise(resolve => setTimeout(() => resolve(value), 1000))
}

export default {
  getUserById(id: number) {
    console.log(`API called: getUserById(${id})`)
    const user = userStore.get(id)
    return simulateNetworkDelay(user)
  },
  getUsersByIds(ids: number[]) {
    console.log(`API called: getUsersByIds(${ids})`)
    const users = ids.map(id => userStore.get(id))
    return simulateNetworkDelay(users)
  },
}
