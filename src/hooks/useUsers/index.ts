import { useSQLiteContext } from "expo-sqlite"
import { useCallback } from "react"

import { User } from "@/@types/user"

export const useUsers = () => {
  const database = useSQLiteContext()

  const create = async (data: Pick<User, "name">) => {
    const statement = await database.prepareAsync(
      "INSERT INTO users (name) VALUES ($name)",
    )

    try {
      const result = await statement.executeAsync({
        $name: data.name,
      })
      return result.lastInsertRowId
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  const findById = async (id: string) => {
    const statement = await database.prepareAsync(
      "SELECT * FROM users WHERE id = $id",
    )
    try {
      const result = await statement.executeAsync<User>({ $id: id })
      return result.getFirstAsync()
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  const findAll = useCallback(async () => {
    const query = "SELECT * FROM users ORDER BY name"

    try {
      const result = await database.getAllAsync<User>(query)
      return result
    } catch (error) {
      throw error
    }
  }, [database])

  const deleteById = async (id: number) => {
    const statement = await database.prepareAsync(
      "DELETE FROM users WHERE id = $id",
    )
    try {
      await statement.executeAsync({ $id: id })
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  const updateById = async (id: number, data: Pick<User, "name">) => {
    const statement = await database.prepareAsync(
      "UPDATE users SET name = $name, updated_at = CURRENT_TIMESTAMP WHERE id = $id",
    )
    try {
      const response = await statement.executeAsync<User>({
        $name: data.name,
        $id: id,
      })
      return response.getFirstAsync()
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  return {
    create,
    findById,
    findAll,
    deleteById,
    updateById,
  }
}
