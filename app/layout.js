// import { Noto_Sans_Arabic } from "next/font/google";
import { NextUIProvider } from "@nextui-org/system";
import "./globals.css";
import clsx from "clsx";
import Header from "./components/Header/header";
import { IranSans } from "@/utils/IranSans";

export const metadata = {
  title: "فروشگاه من",
  description: "Store",
  icons: {
    icon: "/favicon.ico",
  },
};

// const arabic = Noto_Sans_Arabic({
//   subsets: ["arabic"],
//   variable: "--font-sans-arabic",
//   weight: ["400", "700"],
//   style: ["normal"],
//   display: "swap",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={clsx(
          IranSans.className,
          "min-h-screen h-screen w-full bg-[#fff]"
        )}
      >
        <NextUIProvider>
          <Header />
          <main>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
