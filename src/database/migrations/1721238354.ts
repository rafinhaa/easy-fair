import { MigrationTemplate } from "@/database/types"

export class MigrationFairsAndFairItems implements MigrationTemplate {
  up(): string {
    return `
      CREATE TABLE IF NOT EXISTS fairs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        date TEXT DEFAULT NULL,
        completed_at TEXT DEFAULT NULL,
        created_at DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT,
        deleted_at TEXT,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
      );

      CREATE TABLE IF NOT EXISTS fair_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        completed BOOLEAN DEFAULT FALSE,
        created_at DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT,
        deleted_at TEXT,
        fair_id INTEGER NOT NULL REFERENCES fairs(id) ON DELETE CASCADE
      );
    `
  }
}
