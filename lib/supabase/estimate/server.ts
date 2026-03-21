'use server'

import { revalidatePath } from "next/cache"
import { createClient } from "../server"
import { SPACETYPE_BY_ID, SpaceTypeKey, Status, WORKTYPE_BY_ID, WorkTypeKey } from "@/types/estimate"

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

  const newData = data.map((items, index) => ({
      ...items,
      index: index+1,
      address: items.address + " " + items.detailAddress,
      spaceType: SPACETYPE_BY_ID[items.spaceType as SpaceTypeKey],
      squareFeet: items.squareFeet + '평',
      workType: items.workType.map(
        (items: WorkTypeKey) => WORKTYPE_BY_ID[items] ?? items
      ),
      status: (items.status && Status[items.status as keyof typeof Status]) ?? "진행 예정"
    }));

  return newData as AdminEstimate[]
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