import { storageKeys } from "./storage-keys"

export type StorageKeys = keyof typeof storageKeys

type StorageValue = string | number | boolean | null

export interface Storage {
  getItem(
    key: StorageKeys,
    type?: "string" | "number" | "bool",
  ): Promise<StorageValue | null>
  setItem<T>(key: StorageKeys, value: T): Promise<void>
  removeItem(key: StorageKeys): Promise<void>
}
