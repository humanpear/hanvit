'use server'

import { revalidatePath } from "next/cache";
import { createClient } from "../server"
import { SlideItem } from "@/types/slider";

interface Props {
  imageUrl: string;
  imagePath: string;
  displayOrder: number;
}

export async function getPortfolioSlider(): Promise<SlideItem[]> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("slideItem").select("*")

  if (error) {
    console.error('이미지 수신 실패:', error)
    return []
  }

  return data as SlideItem[]
}

export async function updateAdminSlider(slideItem: Props) {
  const supabase = await createClient()

  const { data, error } = await supabase.from("slideItem").insert({ imageUrl: slideItem.imageUrl, imagePath: slideItem.imagePath, displayOrder: slideItem.displayOrder }).select().single()

  if (error) {
    console.log("저장 실패", error)
  } else {
    console.log("저장 성공", data)
  }

  revalidatePath("/admin/slider")
  return data as SlideItem
}

export async function updateAdminSliderChange(slides: SlideItem[]) {
  const supabase = await createClient()

  const { data, error } = await supabase.from("slideItem")
    .upsert(
      slides.map((item) => ({
        id: item.id,            // 고유 식별자 (필수!) 🔑
        displayOrder: item.displayOrder, // 업데이트할 새로운 순서 🔢
        imageUrl: item.imageUrl, // 기존 정보 유지
        imagePath: item.imagePath,
      }))
    )
    .select();

  if (error) {
    console.error("순서 변경 저장 실패:", error);
    return false;
  }

  console.log("순서 변경 저장 성공:", data);
  revalidatePath("/admin/slider");
  return true;
}

export async function deleteAdminSlider(id: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from("slideItem")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("삭제 실패:", error);
    return false;
  }

  revalidatePath("/admin/slider");
  return true;
}