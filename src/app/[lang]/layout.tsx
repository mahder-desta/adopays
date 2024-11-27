import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../assets/scss/tailwind.scss";
import "../assets/css/material.css";
import Switcher from "../components/switcher";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "AdoPay - Mobile Banking",
  description:
    "AdoPay - Mobile Banking Application, by Dedebit Microfinance Institution",
};
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ti" }];
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang} className="light scroll-smooth" dir="ltr">
      <body
        className={` ${manrope.variable} font-manrope text-base text-slate-900 dark:text-white dark:bg-slate-900`}
      >
        {children}
        <Footer />

        <ScrollToTop />

        <Switcher />
      </body>
    </html>
  );
}
