import React from "react";
import { Bebas_Neue } from "next/font/google";
import { Special_Elite } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { photos } from "@/public/photosArr";
import Image from "next/image";
import analissa from "@/public/photos/optimized-images-webp/DSCF2273.webp";
import { Instagram } from "lucide-react";

const fontBabas = Bebas_Neue({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});
const fontSpecialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
});

export default function About() {
  return (
    <>
      <div className="w-[90vw] mx-auto">
        <Image
          src={analissa}
          width="400"
          height="400"
          alt="Photo of Analissa Longoria "
          className="w-[40vw] object-cover border p-3  border-red-700 rounded-xl m-3 float-left mr-6"
        />
        <div className="flex flex-col items-center mb-5">
          <h1
            className={cn(
              "lg:text-4xl text-center mt-10 mb-5",
              fontSpecialElite.className
            )}
          >
            BIOGRAPHY
          </h1>

          <Link
            href="https://www.instagram.com/analissalongoria/"
            passHref
            legacyBehavior
          >
            <a
              className={cn(
                "text-red-700 text-xl hover:drop-shadow-4xl",
                fontSpecialElite.className
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={"2em"} className="text-red-700" />
            </a>
          </Link>
          <h1
            className={cn(
              " text-xs lg:text-3xl text-center mt-3 mb-5",
              fontSpecialElite.className
            )}
          >
            longoriaanalissa@gmail.com
          </h1>
        </div>
        <p className={cn("lg:text-lg", fontSpecialElite.className)}>
          Photographer Analissa Longoria’s work is imbued with a certain
          subterranean elegance, reflecting the very essence of her own bohemian
          spirit. With an ocean full of empathy and a keenly compassionate eye,
          Analissa’s portfolio is a veritable melting pot of converging worlds.
          Based in East Vancouver, Analissa is a champion of the underclass, the
          marginalized, the disenfranchised, the mad and the disaffected, while
          also a supporter of some of Vancouver’s most glamorous socialites and
          models, shooting from her own portrait studio in Chinatown.
        </p>
        <br />
        <p
          className={cn(
            "lg:text-lg text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          As Oscar Wilde said; “We are all in the gutter but some of us are
          looking at the stars”… It is in how she integrates gritty realism with
          a velvet nostalgic beauty that this expression is summoned to mind.
          Analissa visually conveys a marrying of her childhood obsession with
          fashion magazines with her upbringing on the gritty streets of East
          Vancouver.
        </p>
        <br />
        <p
          className={cn(
            "lg:text-lg text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          Delicately capturing the emotional depth of her subjects, a
          broken-beauty is ever present across a broad range of styles, from
          environmental candid black and white low-light work, to futuristic and
          hallucinatory neon dreamlike candour, Analissa shoots her subjects in
          a range of environments - from their own intimate habitats, on the
          streets, at hedonistic underground DIY gatherings and art shows. From
          her studio space in Chinatown, she can explore her subjects in a more
          controlled setting, here she draws upon influences such as Helmut
          Newton, Peter Lindbergh, Mario Testino, Annie Leibowitz, Nan Goldin,
          Steven Meisel and many other of New York’s famous photographers of
          that time shooting the iconic original supermodels of the 90s.
        </p>
        <br />
        <p
          className={cn(
            "lg:text-lg text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          Autodidactic and intuitive, the work has a visceral punk rock quality.
          Her disarming presence allowing her the intimacy with her subjects
          that others would surely be denied. This trust is repaid with a love
          and admiration that is unmistakably shining through in the images.
        </p>
        <br />
        <p
          className={cn(
            "lg:text-lg text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          “The only people for me are the mad ones, the ones who are mad to
          live, mad to talk, mad to be saved, desirous of everything at the same
          time, the ones who never yawn or say a commonplace thing, but burn,
          burn, burn, like fabulous yellow roman candles exploding like spiders
          across the stars and in the middle you see the blue centerlight pop
          and everybody goes ‘Awww!'" - Jack Kerouac
        </p>
        <br />
        <br />
        <h1
          className={cn(
            "lg:text-3xl text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          ARTIST STATEMENT
        </h1>

        <p
          className={cn(
            "lg:text-lg text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          Growing up in the Bohemian melting pot neighbourhood East Vancouver,
          in a modern metropolitan city, I have been forever immersed with the
          fringe and the cutting edge, artists, free thinkers, and avant-garde
          individuals. Witnessing future trends unfold on the streets years
          before they hit celebrity culture has been a constant source of
          inspiration for me. I find great fascination in observing contemporary
          artists, socialites and musicians, revisiting past times while
          evolving into future icons, creating a seamless blend of the past and
          the future is what I strive to express in my work. Drawing from an
          array of eras, I infuse my art with my nostalgia for the reckless
          angst of early 90s Grunge, the electronic romance of 80s new wave and
          post-punk, the raw and gritty rebellion of the late 70s no wave and
          punk scene, the psychedelic freedom of the late 60’s, the soft
          femininity of the late 50’s French New Wave Films, the glitz and
          decadence of the 20s, and the glittery raves of the early 2000s. In my
          creative process, I seamlessly marry grit and glam, employing
          techniques that range from dark and saturated low-light compositions
          to powdery and overexposed dreamy imagery. My colour palette
          emphasizes electric blues, deep glossy reds, flirtatious hot pinks and
          hot purples, seedy greens and yellows, and soft ethereal sky-like
          shades of pinks, purples and blues. Materials like chain, vinyl,
          leather and lace, often bathed in neon lights, allow me to tell a
          deeply personal story of a young girl wandering through the underworld
          of dark and glamorous city spaces filled with underground music
          scenes. These places are filled with kindred artists possessing a
          broken beauty, a blend of vulnerability and resilience resonates with
          me. It is in these enigmatic locales that I connect, explore,
          experiment and transform myself from surviving the grind of city life
          to thriving in the city through music, fashion, art, and subculture.
          The captivating nocturnal allure of these fashion and music filled
          spaces renews me. Leaving these spaces at night brings a feeling of
          rebirth the following day that bleeds into my art and leaves me
          inspired to continue to create. My artistic process is a constant
          exploration of the visions abundant in the city. I continually immerse
          myself in diverse manual settings, and I embrace uncertainty as I
          delve further to be hypnotized and captivated, exalted by a feeling of
          awe. My approach involves exploring both the breadth and depth of my
          techniques. Once I exhaust a particular setting, I resurface to
          experiment with new cameras, lenses, lights, and angles. As an artist,
          my process revolves around an unending exploration of the transient
          city, skillfully weaving together the past, present, and future.
          Descriptive words that encapsulate my style include unrestricted,
          provocative, femme, nocturnal, neon, industrial, and free. These
          elements form the foundation of my art, allowing me to communicate my
          unique perspective to the world.
        </p>
        <br />
        <br />
        <br />
        <p
          className={cn(
            "lg:text-xl text-center mt-10 mb-5 text-red-700",
            fontSpecialElite.className
          )}
        >
          Musical clients include:
        </p>
        <p
          className={cn(
            "lg:text-lg text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          MOAA, Anika, ACTORS, Little Destroyer, LEATHERS, Spectres, Revolution
          Above Disorder, Sektion Tyrants, FRANKIE, Patriarchy, Subterranean
          Lovers….
        </p>
        <br />
        <br />
        <p
          className={cn(
            "lg:text-xl text-center mt-10 mb-5 text-red-700",
            fontSpecialElite.className
          )}
        >
          Publications:
        </p>

        <p
          className={cn(
            "lg:text-lg text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          In print in The Georgia Straight, Beatroute, Discorder, and online for
          Les Artefact Magazine and in Neon Taste Magazine.
        </p>
        <br />
        <br />
        <p
          className={cn(
            "lg:text-xl text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          Testimonials:
        </p>
        <p
          className={cn(
            "lg:text-lg text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          Through the years, Analissa has always been a steady inspirational
          entity and light within the 'weirdo' underbelly of the Vancouver
          scene. Her attention to detail when it comes to fashion transcends
          this era so effortlessly... She simply was not made for this time.
          Every experience I have had professionally and personally with her
          seems as though time stops and we are left dreaming about what beauty
          can be created between us. It's so much more about creating a
          revolution in that moment than the actual photos being taken. You can
          see the beauty, pain and dualities of this life captured through the
          lens with no fear. Just an ability to connect to another human in that
          capacity is a rarity that should never be taken for granted. Here's to
          Analissa making Vancouver an even more special place with her rock and
          roll heart of gold and a soul this city so desperately requires.
          <br />- Spooks
        </p>
        <br />
        <br />
        <p
          className={cn(
            "lg:text-lg text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          “Analissa moves apparition-like among scenes which immediately become
          alluring under her artist’s gaze. The curtain is pulled back on
          underground nightlife, made into touching, raw humanity with her lens.
          Individuals and musicians become iconic in her portraiture, colours
          more saturated, glittering fever dreams more possible. She captures
          strength where it stands tall, softness where it needs a place to
          rest.”
          <br />- Celine Simpson
        </p>
        <p
          className={cn(
            "lg:text-lg text-center mt-10 mb-5",
            fontSpecialElite.className
          )}
        >
          Catharsis, documenting, community…
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h1
          className={cn(
            "lg:text-3xl text-center mt-10 mb-3",
            fontSpecialElite.className
          )}
        >
          longoriaanalissa@gmail.com
        </h1>
        <Link
          href="https://www.instagram.com/analissalongoria/"
          passHref
          legacyBehavior
        >
          <a
            className={cn(
              "text-red-700 text-xl hover:drop-shadow-4xl",
              fontSpecialElite.className
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={"2em"} className="text-red-700" />
          </a>
        </Link>
        <Link
        className={cn(
          "lg:text-4xl text-center mt-10 mb-5 text-slate-500 m-10",
          fontSpecialElite.className
        )}
        href="/"
      >
        ~ ANALISSA LONGORIA
      </Link>
      </div>
     
      <nav className="flex justify-around items-start h-[20vh] my-10">
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
          href="/photography"
        >
          photography
        </Link>
      </nav>
    </>
  );
}
