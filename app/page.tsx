import { Bebas_Neue } from "next/font/google";
import { Special_Elite } from "next/font/google";
import { cn } from "@/lib/utils";
import BackgroundVideo from "next-video/background-video";
import getStarted from "/videos/vid_01.mp4?thumbnailTime=0";
import Link from "next/link";

const fontBabas = Bebas_Neue({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});
const fontSpecialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <BackgroundVideo src={getStarted}>
        <div className="flex flex-col h-screen justify-between items-center">
          <h3
            className={cn(
              "text-xl sm:text-2xl md:text-[2.5rem] mt-10 sm:mt-16 md:mt-20 text-slate-900 text-center drop-shadow-4xl transition-all",
              fontBabas.className
            )}
          >
            Beauty Unrestricted
          </h3>

          <div className="flex flex-col lg:flex-row justify-end items-center w-full px-4 sm:px-6 md:px-8 lg:w-[90vw] mt-[40vh] sm:mt-[45vh] md:mt-[50vh]">
            <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-3 mb-6 lg:mb-0 lg:me-10 xl:me-20">
              {["photography", "videos", "about"].map((link) => (
                <Link
                  key={link}
                  className={cn(
                    "text-red-700 text-xl sm:text-2xl lg:text-3xl hover:drop-shadow-4xl transition-all hover:scale-105",
                    fontSpecialElite.className
                  )}
                  href={`/${link}`}
                >
                  {link}
                </Link>
              ))}
            </div>
            <h1
              className={cn(
                "text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[8rem] xl:text-[10rem] text-[#1900ffcc] leading-none text-center lg:text-left transition-all",
                fontBabas.className
              )}
            >
              ANALISSA LONGORIA
            </h1>
          </div>
        </div>
      </BackgroundVideo>
    </main>
  );
}