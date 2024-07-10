import MMKVStorage from "./MMKV"
import { Storage } from "./types"

let storage: Storage

const initializeStorage = (newStorage: Storage) => {
  storage = newStorage
}

const storages = { MMKVStorage }

export { storage, storages, initializeStorage }
