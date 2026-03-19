import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="grow p-8 ml-60">{children}</main>
    </div>
  );
}
