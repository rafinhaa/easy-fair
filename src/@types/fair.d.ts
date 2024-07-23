export interface Fair {
  id: number
  title: string
  userId: number
  date?: string | null | undefined
  completed: boolean
  createdAt: string
  updatedAt: string | null
  deletedAt: string | null
  fairItems: number
}

export interface FairDatabase {
  id: number
  title: string
  user_id: number
  date: string
  completed: number
  created_at: string
  updated_at: string | null
  deleted_at: string | null
  fair_items_count: number
}
