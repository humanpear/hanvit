import { createClient } from "./server";

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

  return data as PortfolioProject[]
}

export async function getPortfolioProjectId(id: string): Promise<PortfolioProject | null> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("portfolio").select("*").eq("id", id).single();

  if (error) {
    console.error('데이터 수신 실패: ', error)
    return null;
  }

  return data as PortfolioProject
}

