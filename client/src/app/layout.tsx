import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Cookie from "@/components/cookie/Cookie";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drone Gaijin",
  description:
    "This is a foreigner's view of Japan. Aspects and curiosities of a country full of beauty and culture. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body className={inter.className}>
        <Cookie />
        {children}
      </body>
    </html>
  );
}
