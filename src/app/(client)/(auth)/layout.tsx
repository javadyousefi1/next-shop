import kalamehFont from "constants/localFonts";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "فروشگاه نکست",
//   description: "پروژه فروشگاهی ساخته شده با نکست",
// };

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full h-dvh flex justify-center items-center">
      {children}
    </section>
  );
}
