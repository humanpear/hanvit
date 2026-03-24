import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://interiorhv.com"),
  title: "한빛인테리어",
  description: "공간에 따뜻한 빛을 담는 한빛인테리어 입니다.",
  verification: {
    google: "google-site-verification=zRaI8bb_VHRH9hc37r5U3K9LorJMKGggoJp5mKl_3Go",
    other: {
      "naver-site-verification": "c0a08b2151155c706722aac169043e210cb4c5e5",      
    }
  },
  openGraph: {
    title: "한빛인테리어",
    description: "공간에 따뜻한 빛을 담는 한빛인테리어 입니다.",
    url: "https://interiorhv.com",
    images: [
      {
        url: "/images/metaLogo.png",
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
