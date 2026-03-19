'use server'

import { revalidatePath } from "next/cache"
import { createClient } from "./server"

export type AdminEstimate = {
  id: number
  created_at: string
  name: string
  phone: string
  address: string
  detailAddress: string
  spaceType: string
  squareFeet: string
  contents: string
  workType: string[]
  status?: string
  memo?: string
}

export async function getAdminEstimate(): Promise<AdminEstimate[]> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("estimate").select('*').order('id', { ascending: true }) // 제출일자 최신순으로 정렬, ascending - 오름차순

  if (error) {
    console.error('데이터 수신 실패: ', error)
    return []
  }

  return data as AdminEstimate[]
}

export async function updateAdminEstimate(formData: AdminEstimate) {
  const supabase = await createClient()

  const { data, error } = await supabase.from("estimate").update({ memo: formData.memo, status: formData.status }).eq('id', formData.id).select()

  if (error) {
    console.log("저장 실패", error)
  } else {
    console.log("저장 성공", data)
  }

  revalidatePath("/admin/estimate")
}