import LocalFont from "next/font/local";

const iransansFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/woff/IRANSansWeb_UltraLight.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff/IRANSansWeb_Light.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff/IRANSansWeb_Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff/IRANSansWeb_Medium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff/IRANSansWeb.woff",
      weight: "500",
      style: "normal",
    },

    {
      path: "../../public/fonts/woff/IRANSansWeb_Bold.woff",
      weight: "700",
      style: "normal",
    },

    {
      path: "../../public/fonts/woff/IRANSansWeb_Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iranSans",
  style: "normal",
  display: "block",
});

export default iransansFont