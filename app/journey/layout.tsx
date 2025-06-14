import type { Metadata } from "next";
import "../globals.css";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Loader from "@/components/Loader";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Journey - Saurabh Paryani",
  description: "My professional journey and experiences",
};

export default function JourneyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Loader />
      <ThemeContextProvider>
        {children}
        <Toaster position="top-right" />
        <ThemeSwitch />
        <ScrollToTop />
      </ThemeContextProvider>
    </>
  );
}
