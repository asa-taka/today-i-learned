import DataLoader from 'dataloader'

import api, { User } from './api-client'

const userLoader = new DataLoader(
  (ids: number[]) => api.getUsersByIds(ids),
  // {
  //   cacheKeyFn: (u: User) => u.id,
  // }
)

Promise.all([
  userLoader.load(1),
  userLoader.load(2),
  userLoader.load(3),
  userLoader.load(1),
  userLoader.load(2),
]).then(res => console.log('case1', res))

userLoader.load(1).then(res => console.log('case2', res))
userLoader.load(2).then(res => console.log('case3', res))
userLoader.load(3).then(res => console.log('case4', res))

Promise.all([
  userLoader.load(1),
  userLoader.load(2),
  userLoader.load(3),
  userLoader.load(1),
  userLoader.load(2),
]).then(res => console.log('case5', res))

api.count
