import Sidebar from "@/components/admin/sidebar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const supabase = await createClient()
  const {data: {user}} = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/signin")
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="grow p-8 ml-60">{children}</main>
    </div>
  );
}
