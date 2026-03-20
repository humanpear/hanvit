import { nanoid } from "nanoid";
import { createClient } from "../client";

export type UploadPortfolioImage = {
  url: string;
  file?: File;
  isNew: boolean;
}

export async function insertAdminPortfolioImage(
  files: UploadPortfolioImage[]
): Promise<string[]> {
  const supabase = createClient();

  if (!files?.length) return [];

  return Promise.all(
    files.map(async (item) => {
      if (!item.file) return item.url
      
      const fileExt = item.file.name.split(".").pop();
      const fileName = fileExt ? `${nanoid()}.${fileExt}` : nanoid();
      const filePath = `portfolio/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("portfolio")
        .upload(filePath, item.file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("portfolio").getPublicUrl(filePath);
      if (!data) throw new Error("사진 전송 실패");

      return filePath;
    }),
  );
}
