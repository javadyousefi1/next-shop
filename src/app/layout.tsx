import kalamehFont from "constants/localFonts";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
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
    <html lang="fa" dir="rtl">
      <body className={`${kalamehFont.variable} font-sans`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: "var(--font-iranSans)",
                colorPrimary: "#5D45ED", // Primary color
                colorPrimaryBg: "#fff", // Background color for primary elements
                colorTextBase: "#111111", // Primary text color
                colorTextPlaceholder: "#BDBDBD", // Placeholder text color
                colorTextWhite: "#FFFFFF", // White text color
                colorTextSecondary: "#444444", // Secondary text color
                colorTextTertiary: "#767676", // Tertiary text color
                colorBgBase: "#FFFFFF", // Base background color
                colorBgContainer: "#fff", // Container background color
                colorBgLayout: "#FAFAFA", // Layout background color
                colorBorder: "#E4E4E4", // Border color
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
