import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "한빛인테리어",
  description: "공간에 따뜻한 빛을 담는 한빛인테리어 입니다.",
  openGraph: {
    title: "한빛인테리어",
    description: "공간에 따뜻한 빛을 담는 한빛인테리어 입니다.",
    url: "https://hanvit-red.vercel.app/",
    images: [
      {
        url: "https://hanvit-red.vercel.app/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "한빛인테리어 로고"
      }
    ],
    locale: "ko_KR"
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f2e8e5",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
