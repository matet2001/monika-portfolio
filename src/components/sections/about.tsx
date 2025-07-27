"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { scrollToView } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section
      id="intro"
      className="w-full bg-gradient-main flex items-center py-16 md:py-0 min-h-screen"
    >
      <div className="container flex flex-col-reverse md:flex-row items-center justify-center md:gap-16 xl:gap-32 px-4 sm:px-6 md:px-10 mx-auto">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-xl space-y-6 text-center md:text-left mt-10 md:mt-0"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug tracking-tight">
            <span>Szia, </span>
            <span className="text-primary">Nagy Mónika vagyok.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-semibold">
            Magyar- és matematikatanár, 2019-ben egy nehéz élethelyzet során
            találkoztam először a családállítással.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            Nem találtam máshol megoldást, ezért kipróbáltam, és az életem
            elkezdett változni. 2021-ben elvégeztem a családállító képzést, és
            ma már én is segítek másoknak ezzel a csodálatos módszerrel.
          </p>

          <div className="mt-6 space-y-2">
            <h3 className="text-xl font-semibold text-primary">
              Vegyük fel a kapcsolatot!
            </h3>
            <div className="flex justify-center md:justify-start">
              <Button
                onClick={() => scrollToView("#signup")}
                className="h-11 px-6"
              >
                Jelentkezem
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <div className="relative aspect-square w-full rounded-full overflow-hidden shadow-lg border-4 border-primary bg-background-secondary/80">
            <Image
              src="/monika-selfie-cropped.png"
              alt="Nagy Mónika"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
