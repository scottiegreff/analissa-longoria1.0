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
    <main className="min-h-screen bg-black">
      <BackgroundVideo src={getStarted} className={cn("h-screen w-full object-cover")}>
        {/* Mobile Layout */}
        <div className="flex flex-col h-screen md:hidden">
          <div className="flex-1 flex flex-col items-center justify-center">
            <h3
              className={cn(
                "text-[2rem] text-red-700 text-center drop-shadow-4xl mb-8",
                fontBabas.className
              )}
            >
              Beauty Unrestricted
            </h3>
            <h1
              className={cn(
                "text-[4rem] text-[#1900ffcc] text-center mb-12",
                fontBabas.className
              )}
            >
              ANALISSA LONGORIA
            </h1>
          </div>
          
          <nav className="flex flex-col items-center gap-6 mb-12">
            <Link
              className={cn(
                "text-red-700 text-2xl hover:drop-shadow-4xl",
                fontSpecialElite.className
              )}
              href="/photography"
            >
              photography
            </Link>
            <Link
              className={cn(
                "text-red-700 text-2xl hover:drop-shadow-4xl",
                fontSpecialElite.className
              )}
              href="/videos"
            >
              videos
            </Link>
            <Link
              className={cn(
                "text-red-700 text-2xl hover:drop-shadow-4xl",
                fontSpecialElite.className
              )}
              href="/about"
            >
              about
            </Link>
          </nav>
        </div>

        {/* Tablet and Desktop Layout */}
        <div className="hidden md:flex flex-col h-screen justify-between items-center mb-10">
          <h3
            className={cn(
              "text-[2.5rem] mt-20 text-slate-900 text-center drop-shadow-4xl",
              fontBabas.className
            )}
          >
            Beauty Unrestricted
          </h3>

          <div className="flex flex-col lg:flex-row justify-end items-center lg:justify-end lg:items-bottom mt-[50vh] lg:w-[90vw]">
            <div className="flex flex-col items-end h-[20vh] gap-10 lg:gap-3 me-20">
              <Link
                className={cn(
                  "text-red-700 text-2xl lg:text-3xl hover:drop-shadow-4xl",
                  fontSpecialElite.className
                )}
                href="/photography"
              >
                photography
              </Link>
              <Link
                className={cn(
                  "text-red-700 text-2xl lg:text-3xl hover:drop-shadow-4xl",
                  fontSpecialElite.className
                )}
                href="/videos"
              >
                videos
              </Link>
              <Link
                className={cn(
                  "text-red-700 text-2xl lg:text-3xl hover:drop-shadow-4xl",
                  fontSpecialElite.className
                )}
                href="/about"
              >
                about
              </Link>
            </div>
            <h1
              className={cn(
                "text-[5rem] lg:text-[10rem] text-[#1900ffcc]",
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
