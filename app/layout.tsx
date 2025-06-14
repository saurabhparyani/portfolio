import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import "./globals.css";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Loader from "@/components/Loader";
import ScrollToTop from "@/components/scroll-to-top";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Saurabh Paryani",
  description: "Full-stack web developer in the making!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mulish.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Loader />
        <ThemeContextProvider>
          {children}
          <Toaster position="top-right" />
          <ScrollToTop />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
