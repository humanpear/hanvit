import { nanoid } from "nanoid";
import { createClient } from "../client";

export async function insertAdminSlider(thumbnail: File | null) {
  const supabase = createClient()

  let thumbnailUrl: string | null = null

  if (thumbnail) {
    const fileExt = thumbnail.name.split(".").pop();
    const fileName = `${nanoid()}.${fileExt}`
    const filePath = `slider/${fileName}`

    const { error: uploadError } = await supabase.storage.from("slider").upload(filePath, thumbnail)

    if (uploadError) throw uploadError

    // 업로드된 이미지의 Public URL 값 가져오기
    const { data } = supabase.storage.from('slider').getPublicUrl(filePath)
    if (!data) throw new Error("썸네일 Public URL 조회를 실패했습니다.")
    thumbnailUrl = data.publicUrl

    return {
      imagePath: filePath,
      imageUrl: thumbnailUrl
    }
  }
};