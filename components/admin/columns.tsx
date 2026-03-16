"use client"

import { AdminEstimate } from "@/lib/supabase/admin-data"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<AdminEstimate>[] = [
  {
    accessorKey: "id",
    header: "No",
  },
  {
    accessorKey: "name",
    header: "고객명",
  },
  {
    accessorKey: "phone",
    header: "연락처",
  },
  {
    accessorKey: "address",
    header: "주소",
  },
  {
    accessorKey: "spaceType",
    header: "공간 유형",
  },
  {
    accessorKey: "squareFeet",
    header: "면적",
  },
  {
    accessorKey: "workType",
    header: "시공 범위",
  },
  {
    accessorKey: "status",
    header: "진행 상태"
  }
]