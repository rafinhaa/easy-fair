import { MigrationUsers } from "@/database/migrations/1721231670"
import { Migrations } from "@/database/types"

const migrationList: Migrations[] = [
  {
    timestamp: 1721231670,
    migrations: [MigrationUsers],
  },
]

export default migrationList
