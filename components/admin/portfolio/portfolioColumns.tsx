"use client"

import { PortfolioProject } from "@/lib/supabase/portfolio/server"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<PortfolioProject>[] = [
  {
    accessorKey: "index",
    header: "No",
  },
  {
    accessorKey: "constructionDate",
    header: "공사 기간",
  },  
  {
    accessorKey: "title",
    header: "제목",
  },
  {
    accessorKey: "description",
    header: "내용",
  },
  {
    accessorKey: "spaceType",
    header: "공간 유형",
  },
  {
    accessorKey: "workType",
    header: "시공 범위",
  },
]