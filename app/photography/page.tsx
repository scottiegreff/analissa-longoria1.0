import React from "react";
// import Photography from "@/components/Photography";
import { Bebas_Neue, Special_Elite } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";
import { photos } from "@/app/data/photosObj";

import Photo from "@/components/Photo";

const fontBabas = Bebas_Neue({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});
const fontSpecialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Photography() {
  return (
    <>
      <div className="flex flex-row items-center justify-between md:flex-row md:justify-between md:items-center bg-black pt-10 pb-5 ">
        <div className="ms-5 flex flex-col justify-start items-center md:flex-row md:justify-center gap-0 md:gap-10">
          <h1 className={cn("text-[5rem] text-red-700", fontBabas.className)}>
            Analissa
          </h1>
          <h1 className={cn("text-[5rem] text-red-700", fontBabas.className)}>
            Longoria
          </h1>
        </div>
        <nav className="flex flex-col justify-between items-start gap-10 md:gap-5 me-10">
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
            href="/videos"
          >
            videos
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-black p-3 md:p-0">
        {photos.map((photo, index) => (
          <Photo
            key={photo.src}
            {...photo}
            photos={photos}
            index={index}
            priority={index === 0} // Set priority for the first image
          />
        ))}
      </div>
    </>
  );
}
