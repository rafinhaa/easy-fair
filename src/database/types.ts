export interface MigrationTemplate {
  up(): string
}

export type Migrations = {
  timestamp: number
  migrations: (new () => MigrationTemplate)[]
}
