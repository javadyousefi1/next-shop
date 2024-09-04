import LocalFont from "next/font/local";

const kalamehFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/_woff2/KalamehWeb-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/_woff2/KalamehWeb-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/_woff2/KalamehWeb-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/_woff2/KalamehWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/_woff2/KalamehWeb-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/_woff2/KalamehWeb-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/_woff2/KalamehWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/_woff2/KalamehWeb-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/_woff2/KalamehWeb-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-kalameh",
  style: "normal",
  display: "block",
});

export default kalamehFont