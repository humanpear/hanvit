'use server'

import { revalidatePath } from "next/cache";
import { createClient } from "../server";
import { format } from "date-fns";
import { SPACETYPE_BY_ID, SpaceTypeKey, WORKTYPE_BY_ID, WorkTypeKey } from "@/types/estimate";

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

  const { data, error } = await supabase.from("portfolio").select('*').order('id', { ascending: true }) // 공사일자 최신순으로 정렬, ascending - 오름차순

  if (error) {
    console.error('데이터 수신 실패: ', error)
    return []
  }

  const newData = data.map((project, index) => ({
    ...project,
    index: index+1,
    registeredDate: format(project.registeredDate, "yyyy-MM-dd"),
    workType: project.workType.map((item: WorkTypeKey) => WORKTYPE_BY_ID[item] ?? item),
    spaceType: SPACETYPE_BY_ID[project.spaceType as SpaceTypeKey],
    photos: project.photos.map((imagePath: string) => {
      const { data } = supabase.storage.from("portfolio").getPublicUrl(imagePath);
      const imageUrl = data.publicUrl
      return imageUrl
    })
  }))
  
  return newData as PortfolioProject[]
}

export async function getPortfolioProjectId(id: string): Promise<PortfolioProject | null> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("portfolio").select("*").eq("id", id).single();

  if (error) {
    console.error('데이터 수신 실패: ', error)
    return null;
  }

  const imageUrl = data.photos.map((imagePath: string) => {
    const { data: urlData } = supabase.storage.from("portfolio").getPublicUrl(imagePath);
    return urlData.publicUrl
  })

  const newData = {
    ...data,
    registeredDate: format(data.registeredDate, "yyyy-MM-dd"),
    workType: data.workType.map((item: WorkTypeKey) => WORKTYPE_BY_ID[item] ?? item),
    spaceType: SPACETYPE_BY_ID[data.spaceType as SpaceTypeKey],
    photos: imageUrl
  }

  return newData as PortfolioProject
}

//포트폴리오 수정용 호출(변환되지 않은 데이터로 받는 용도)
export async function getPortfolioEditId(id: string): Promise<PortfolioProject | null> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("portfolio").select("*").eq("id", id).single();

  if (error) {
    console.error('데이터 수신 실패: ', error)
    return null;
  }

  // 나중에 완성되면 사용할 path -> URL로 바꾸는 코드
  const imageUrl = data.photos.map((imagePath: string) => {
    const { data: urlData } = supabase.storage.from("portfolio").getPublicUrl(imagePath);
    return urlData.publicUrl
  })

  const newData = {
    ...data,
    photos: imageUrl
  }

  return newData as PortfolioProject
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
    return { success: false, error: error.message }
  }
  revalidatePath("/admin/portfolio")
  console.log("제출 성공", data)
  return { success: true, data }
}

export async function updateAdminPortfolio(formData: PortfolioProject) {
  const supabase = await createClient()

  const { data, error } = await supabase.from("portfolio")
    .upsert([
      {
        id: formData.id,
        title: formData.title,
        constructionDate: formData.constructionDate,
        spaceType: formData.spaceType,
        squareFeet: formData.squareFeet,
        workType: formData.workType,
        description: formData.description,
        photos: formData.photos,
      }])
    .select();

  if (error) {
    console.error("수정 실패:", error.message);
    return { success: false, error: error.message };
  }

  console.log("수정 성공");
  revalidatePath("/admin/portfolio");
  return { success: true, data }
}

export async function deleteAdminPortfolio(id: number) {
  const supabase = await createClient()

  const { error } = await supabase
    .from("portfolio")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("삭제 실패:", error);
    return false;
  }

  revalidatePath("/admin/portfolio");
  return true;
}