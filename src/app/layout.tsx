import kalamehFont from "constants/localFonts";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "فروشگاه نکست",
  description: "پروژه فروشگاهی ساخته شده با نکست",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" >
      <body className={`${kalamehFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
