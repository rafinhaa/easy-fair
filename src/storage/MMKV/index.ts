import { MMKV } from "react-native-mmkv"

import { storageKeys } from "../storage-keys"
import { Storage } from "../types"

const storage = new MMKV()

const MMKVStorage: Storage = {
  getItem: (key, type) => {
    const get = {
      string: (key: string) => storage.getString(JSON.parse(key)),
      number: (key: string) => storage.getNumber(key),
      bool: (key: string) => storage.getBoolean(key),
    }[type || "string"]

    const value = get(storageKeys[key])

    if (value === undefined) return null

    return Promise.resolve(value)
  },

  setItem: (key, value) => {
    storage.set(storageKeys[key], value as any)
    return Promise.resolve()
  },

  removeItem: (key) => {
    storage.delete(storageKeys[key])
    return Promise.resolve()
  },
}

export default MMKVStorage
