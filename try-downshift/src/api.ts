export type IdType = number

export interface User {
  id: IdType
  name: string
  age: number
}

const users: User[] = [
  { id: 1, name: 'alice', age: 12 },
  { id: 2, name: 'bobby', age: 21 },
  { id: 3, name: 'cancy', age: 32 },
  { id: 4, name: 'daddy', age: 45 },
  { id: 5, name: 'evily', age: 56 },
]

function sleep(msec: number) {
  return new Promise(res => setTimeout(res, msec))
}

export async function getUser(id: IdType) {
  await sleep(500)
  const user = users.find(u => u.id === id)
  if (!user) throw new Error(`User not found: ${id}`)
  return user
}

export async function queryUsers(keyword: string) {
  await sleep(500)
  return users.filter(u => u.name.includes(keyword))
}
