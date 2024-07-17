import { type SQLiteDatabase } from "expo-sqlite"

import migrationList from "@/database/migrations"

const getExecutedMigrations = async (
  database: SQLiteDatabase,
): Promise<Set<number>> => {
  const executedMigrations = new Set<number>()
  const statement = await database.prepareAsync(
    "SELECT timestamp FROM migrations",
  )

  try {
    const result = await statement.executeAsync<{ timestamp: number }>()
    const allMigrations = await result.getAllAsync()

    Array.from(allMigrations).forEach((migration) => {
      executedMigrations.add(migration.timestamp)
    })
  } catch (error) {
    throw new Error("Error on getExecutedMigrations:", error)
  } finally {
    await statement.finalizeAsync()
  }

  return executedMigrations
}

export async function initializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(`
      CREATE TABLE IF NOT EXISTS migrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp TIMESTAMP NOT NULL UNIQUE,
        executed_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `)

  try {
    const executedMigrations = await getExecutedMigrations(database)

    const pendingMigrations = migrationList.filter(
      (migrationItem) => !executedMigrations.has(migrationItem.timestamp),
    )

    if (!pendingMigrations.length) {
      console.log("All migrations already applied")
      return
    }

    for (const pendingMigration of pendingMigrations) {
      const migrationName = pendingMigration.timestamp

      console.log(`Applying migration ${migrationName}...`)

      for (const Migration of pendingMigration.migrations) {
        await database.execAsync(new Migration().up())
      }

      const statement = await database.prepareAsync(
        "INSERT INTO migrations (timestamp) VALUES ($timestamp)",
      )

      try {
        await statement.executeAsync({ $timestamp: migrationName })
      } catch (error) {
        throw new Error(
          `Error during applying migration: ${migrationName}`,
          error,
        )
      } finally {
        await statement.finalizeAsync()
      }

      console.log(`Migration ${migrationName} applied successfully`)
    }
  } catch (error) {
    throw new Error("Error during database initialization:", error)
  }
}
