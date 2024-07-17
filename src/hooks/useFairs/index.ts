import { useSQLiteContext } from "expo-sqlite"
import { useCallback } from "react"

import { Fair } from "@/@types/fair"

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
        "SELECT * FROM fairs WHERE user_id = $userId AND deleted_at IS NULL ORDER BY created_at DESC",
      )

      try {
        const result = await statement.executeAsync<Fair>({ $userId: userId })

        const fairs = await result.getAllAsync()

        return fairs
      } catch (error) {
        throw error
      }
    },
    [database],
  )

  const deleteById = useCallback(
    async (id: number) => {
      const statement = await database.prepareAsync(
        "DELETE FROM fairs WHERE id = $id",
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

  const updateById = useCallback(
    async (id: number, data: Pick<Fair, "title">) => {
      const statement = await database.prepareAsync(
        "UPDATE fairs SET title = $title WHERE id = $id",
      )

      try {
        await statement.executeAsync<Fair>({
          $title: data.title,
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
  }
}
