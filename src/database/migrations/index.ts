import { MigrationUsers } from "@/database/migrations/1721231670"
import { MigrationFairsAndFairItems } from "@/database/migrations/1721238354"
import { Migrations } from "@/database/types"

const migrationList: Migrations[] = [
  {
    timestamp: 1721231670,
    migrations: [MigrationUsers],
  },
  {
    timestamp: 1721238354,
    migrations: [MigrationFairsAndFairItems],
  },
]

export default migrationList
