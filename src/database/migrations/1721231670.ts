import { MigrationTemplate } from "@/database/types"

export class MigrationUsers implements MigrationTemplate {
  up(): string {
    return `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        created_at DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT,
        deleted_at TEXT
      );
    `
  }
}
