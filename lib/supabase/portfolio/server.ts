'use server'

import { revalidatePath } from "next/cache";
import { createClient } from "../server";
import { redirect } from "next/navigation";

export type PortfolioProject = {
  id: number;
  title: string;
  constructionDate: string; // "YYYY-MM"
  registeredDate: string; // "YYYY-MM-DD"
  spaceType: string;
  squareFeet: string;
  workType: string[];
  description: string;
  photos: string[];
};

export async function getPortfolioProject(): Promise<PortfolioProject[]> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("portfolio").select('*').order('constructionDate', { ascending: false }) // 공사일자 최신순으로 정렬, ascending - 오름차순

  if (error) {
    console.error('데이터 수신 실패: ', error)
    return []
  }

  // 나중에 완성되면 사용할 path -> URL로 바꾸는 코드
  // return data.map((project) => ({
  //   ...project, photos: project.photos.map((imagePath: string) => {
  //     const { data } = supabase.storage.from("portfolio").getPublicUrl(imagePath);
  //     const imageUrl = data.publicUrl
  //     return imageUrl
  //   })
  // })
  // ) as PortfolioProject[]
  return data as PortfolioProject[]
}

export async function getPortfolioProjectId(id: string): Promise<PortfolioProject | null> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("portfolio").select("*").eq("id", id).single();

  if (error) {
    console.error('데이터 수신 실패: ', error)
    return null;
  }

  // 나중에 완성되면 사용할 path -> URL로 바꾸는 코드
  // const imageUrl = data.photos.map((imagePath: string) => {
  //   const { data: urlData } = supabase.storage.from("portfolio").getPublicUrl(imagePath);
  //   return urlData.publicUrl
  // })

  // const newData = {
  //   ...data,
  //   photos: imageUrl
  // }

  // return newData as PortfolioProject
  return data as PortfolioProject
}

export async function insertAdminPortfolio(formData: PortfolioProject) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("portfolio")
    .insert([
      {
        title: formData.title,
        constructionDate: formData.constructionDate,
        spaceType: formData.spaceType,
        squareFeet: formData.squareFeet,
        workType: formData.workType,
        description: formData.description,
        photos: formData.photos,
      },
    ])

  if (error) {
    console.log("전송 실패:", error.message);
  }
  revalidatePath("/admin/portfolio")
  redirect("/admin/portfolio")
  console.log("제출 성공", data)
  return { success: true, data }
}