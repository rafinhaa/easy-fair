import { useSQLiteContext } from "expo-sqlite"
import { useCallback } from "react"

import { Fair, FairDatabase } from "@/@types/fair"

const mapper = (fairItem: FairDatabase): Fair => ({
  id: fairItem.id,
  title: fairItem.title,
  userId: fairItem.user_id,
  date: fairItem?.date || null,
  completedAt: fairItem.completed_at,
  createdAt: fairItem.created_at,
  updatedAt: fairItem.updated_at,
  deletedAt: fairItem.deleted_at,
  fairItems: fairItem.fair_items_count,
})
export const useFairs = () => {
  const database = useSQLiteContext()

  const create = useCallback(
    async (data: Pick<Fair, "title" | "userId">) => {
      const statement = await database.prepareAsync(
        "INSERT INTO fairs (title, user_id) VALUES ($title, $userId)",
      )

      try {
        const result = await statement.executeAsync({
          $title: data.title,
          $userId: data.userId,
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

  const findById = useCallback(
    async (id: number) => {
      const statement = await database.prepareAsync(
        "SELECT * FROM fairs WHERE id = $id",
      )
      try {
        const result = await statement.executeAsync<Fair>({ $id: id })
        return result.getFirstAsync()
      } catch (error) {
        throw error
      } finally {
        await statement.finalizeAsync()
      }
    },
    [database],
  )

  const findAll = useCallback(
    async (userId: number) => {
      const statement = await database.prepareAsync(
        "SELECT f.*, (SELECT COUNT(*) FROM fair_items WHERE fair_id = f.id) AS fair_items_count FROM fairs f WHERE user_id = $userId",
      )

      try {
        const result = await statement.executeAsync<FairDatabase>({
          $userId: userId,
        })

        const fairs = await result.getAllAsync()

        return fairs.map(mapper)
      } catch (error) {
        throw error
      }
    },
    [database],
  )

  const deleteById = useCallback(
    async (id: number) => {
      await database.withTransactionAsync(async () => {
        await database.runAsync(`DELETE FROM fair_items WHERE fair_id = $id`, {
          $id: id,
        })
        await database.runAsync(`DELETE FROM fairs WHERE id = $id`, {
          $id: id,
        })
      })
    },
    [database],
  )

  const updateById = useCallback(
    async (id: number, data: Pick<Fair, "title" | "date" | "completedAt">) => {
      const statement = await database.prepareAsync(
        "UPDATE fairs SET title = $title, date = $date WHERE id = $id",
      )

      try {
        await statement.executeAsync<FairDatabase>({
          $title: data.title,
          $date: data.date,
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

  const setCompleted = useCallback(
    async (id: number, data: Pick<Fair, "completedAt">) => {
      const statement = await database.prepareAsync(
        "UPDATE fairs SET completed_at = $completedAt, date = $date WHERE id = $id",
      )

      try {
        await statement.executeAsync<FairDatabase>({
          $completedAt: data.completedAt,
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
    create,
    findById,
    findAll,
    deleteById,
    updateById,
    setCompleted,
  }
}
