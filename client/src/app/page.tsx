import Language from "@/components/language/Language";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Drone Gaijin",
  description:
    "This is a foreigner's view of Japan. Aspects and curiosities of a country full of beauty and culture. ",
};

export default function Home() {

  return (
    <main className="flex w-screen h-screen items-center justify-center">
    <Language />
    </main>
  )
}
