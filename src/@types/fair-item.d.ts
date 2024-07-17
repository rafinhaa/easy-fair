export interface FairItem {
  id: number
  name: string
  completed: boolean
  fairId: number
  createdAt: string
  updatedAt: string | null
  deletedAt: string | null
}

export interface FairItemDatabase {
  id: number
  name: string
  completed: number
  fair_id: number
  created_at: string
  updated_at: string | null
  deleted_at: string | null
}
