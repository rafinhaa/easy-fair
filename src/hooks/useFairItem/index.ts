import { useSQLiteContext } from "expo-sqlite"
import { useCallback } from "react"

import { FairItem, FairItemDatabase } from "@/@types/fair-item"

const mapper = (fairItem: FairItemDatabase): FairItem => ({
  name: fairItem.name,
  id: fairItem.id,
  completed: fairItem.completed === 1,
  fairId: fairItem.fair_id,
  createdAt: fairItem.created_at,
  updatedAt: fairItem.updated_at,
  deletedAt: fairItem.deleted_at,
})

export const useFairItem = () => {
  const database = useSQLiteContext()

  const createFairItem = useCallback(
    async (data: Pick<FairItem, "name" | "fairId">) => {
      const statement = await database.prepareAsync(
        "INSERT INTO fair_items (name, fair_id) VALUES ($name, $fairId)",
      )

      try {
        const result = await statement.executeAsync({
          $name: data.name,
          $fairId: data.fairId,
        })
        return result.lastInsertRowId
      } catch (error) {
        throw error
      } finally {
        await statement.finalizeAsync()
      }
    },
    [database],
  )

  const findFairItemById = useCallback(
    async (id: number) => {
      const statement = await database.prepareAsync(
        "SELECT * FROM fair_items WHERE id = $id",
      )
      try {
        const result = await statement.executeAsync<FairItemDatabase>({
          $id: id,
        })

        const fairItem = await result.getFirstAsync()

        return mapper(fairItem)
      } catch (error) {
        throw error
      } finally {
        await statement.finalizeAsync()
      }
    },
    [database],
  )

  const findAllFairItemsByFairId = useCallback(
    async (fairId: number) => {
      const statement = await database.prepareAsync(
        "SELECT * FROM fair_items WHERE fair_id = $fairId AND deleted_at IS NULL ORDER BY created_at DESC",
      )

      try {
        const result = await statement.executeAsync({
          $fairId: fairId,
        })

        const fairItems = await result.getAllAsync()

        return fairItems.map(mapper)
      } catch (error) {
        throw error
      }
    },
    [database],
  )

  const deleteFairItemById = useCallback(
    async (id: number) => {
      const statement = await database.prepareAsync(
        "DELETE FROM fair_items WHERE id = $id",
      )
      try {
        await statement.executeAsync({ $id: id })
      } catch (error) {
        throw error
      } finally {
        await statement.finalizeAsync()
      }
    },
    [database],
  )

  const updateFairItemById = useCallback(
    async (id: number, data: Pick<FairItem, "completed">) => {
      const statement = await database.prepareAsync(
        "UPDATE fair_items SET completed = $completed WHERE id = $id",
      )

      try {
        await statement.executeAsync<FairItem>({
          $completed: data.completed,
          $id: id,
        })
      } catch (error) {
        throw error
      } finally {
        await statement.finalizeAsync()
      }
    },
    [database],
  )

  return {
    createFairItem,
    findFairItemById,
    findAllFairItemsByFairId,
    deleteFairItemById,
    updateFairItemById,
  }
}
