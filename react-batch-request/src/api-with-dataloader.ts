import DataLoader from "dataloader"
import api, { IdType } from "./api"

// DataLoaders
// -----------

const userLoader = new DataLoader((keys: IdType[]) => api.getUsersByIds(keys))

const thingLoader = new DataLoader((keys: IdType[]) => api.getThingsByIds(keys))

// Batching API Mock
// -----------------

export default {
  getUserById(id: IdType) {
    return userLoader.load(id)
  },
  getThingById(id: IdType) {
    return thingLoader.load(id)
  }
}
