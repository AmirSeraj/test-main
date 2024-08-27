import localFont from "next/font/local";

export const IranSans = localFont({
  src: [
    {
      path: "../public/fonts/IranSans/IRANSansWeb(FaNum)_UltraLight.woff",
      // path: "",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/IranSans/IRANSansWeb(FaNum)_Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/IranSans/IRANSansWeb(FaNum).woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IranSans/IRANSansWeb(FaNum)_Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IranSans/IRANSansWeb(FaNum)_Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
