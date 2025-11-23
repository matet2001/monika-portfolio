"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { scrollToView } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section
      id="bemutatkozas"
      className="w-full bg-background flex items-center min-h-screen -mt-7"
    >
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center a">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              Szia, <span className="text-primary">Nagy Mónika</span> vagyok.
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium">
              Család- és rendszerállító, aki abban segít, hogy végre megértsd,
              mi akadályoz ma az életedben – és hogyan tudsz felszabadultabban,
              könnyebben továbbmenni.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Tanárként kezdtem, de 2019-ben egy nehéz élethelyzetben
              találkoztam először a családállítással. Nem találtam máshol
              megoldást, ezért kipróbáltam… és valami elindult. Az életem
              elkezdett helyére kerülni – belül és kívül is, annyira, hogy
              2021-ben elvégeztem a képzést, és azóta én is segítek másoknak a
              Mező tiszta, őszinte tükrén keresztül rálátni a valódi okokra.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-medium">
              Ha szeretnél változást, szeretettel várlak személyesen vagy
              online.
            </p>

            <div className="pt-7">
              <Button
                onClick={() => scrollToView("#jelentkezes")}
                size="lg"
                className="w-full sm:min-w-[280px] h-14 text-base font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                Jelentkezem
              </Button>
            </div>
          </motion.div>

          {/* Image with testimonial overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2 relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[800px] overflow-hidden shadow-2xl rounded-2xl"
          >
            <Image
              src="/monika_photos/IMG_4952.webp"
              alt="Nagy Mónika portréja"
              fill
              className="object-cover"
              priority
            />

            {/* Testimonial overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 sm:p-8">
              <p className="text-white text-base sm:text-lg leading-relaxed italic">
                Az állítások során biztonságot, figyelmet és ítélkezésmentes
                jelenlétet adok.
              </p>
              <p className="text-white text-lg sm:text-xl font-semibold mt-2">
                „Végre megértettem, honnan jön a nehézség… és már az első
                alkalom után könnyebb lett.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
