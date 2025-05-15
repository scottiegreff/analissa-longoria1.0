import React from "react";
import { Bebas_Neue } from "next/font/google";
import { Special_Elite } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Video from "next-video";
import vid1 from "/videos/vid_01.mp4";
import vid2 from "/videos/vid_02.mp4";
import vid3 from "/videos/vid_03.mp4";
import vid4 from "/videos/vid_04.mp4";

const fontBabas = Bebas_Neue({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});
const fontSpecialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Videos() {
  return (
    <>
      <section className="bg-black w-full h-full">
        <div className="flex flex-col items-center gap-10 pb-20 bg-black">
          <h1 className={cn("text-[5rem] text-red-700 m-center", fontBabas.className)}>
            Analissa Longoria
          </h1>
          <nav className="flex justify-around items-center w-screen">
            <Link
              className={cn(
                "text-red-700 text-xl hover:drop-shadow-4xl",
                fontSpecialElite.className
              )}
              href="/"
            >
              home
            </Link>
            <Link
              className={cn(
                "text-red-700 text-xl hover:drop-shadow-4xl",
                fontSpecialElite.className
              )}
              href="/photography"
            >
              photography
            </Link>
            <Link
              className={cn(
                "text-red-700 text-xl hover:drop-shadow-4xl",
                fontSpecialElite.className
              )}
              href="/about"
            >
              about
            </Link>
          </nav>
          <div className="flex flex-col gap-20">
            <Video
              src={vid1}
              loop
              accentColor="black"
              className="w-[80vw] h-[70vh] object-cover"
            />
            <Video
              src={vid3}
              loop
              accentColor="black"
              className="w-[80vw] object-cover"
            />
            <Video
              src={vid2}
              loop
              accentColor="black"
              className="w-[80vw] object-cover"
            />

            <Video
              src={vid4}
              loop
              accentColor="black"
              className="w-[80vw] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
