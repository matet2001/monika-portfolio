"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { scrollToView } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section
      id="intro"
      className="w-full md:h-[calc(100vh-var(--header-height))] h-screen bg-background flex"
    >
      {/* Containerized content inside full-width section */}
      <div className="container flex flex-col md:flex-row items-center justify-start md:justify-center md:gap-20 xl:gap-40 px-10 sm:px-2 md:px-10 mx-auto flex-1">
        {/* Content wrapper with horizontal padding and max width */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:px-10 mx-auto gap-2 md:gap-20 xl:gap-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative aspect-square w-60 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] rounded-full overflow-hidden shadow-lg border-4 border-primary bg-background-secondary/80">
              <Image
                src="/monika-selfie-cropped.png"
                alt="Nagy Mónika"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="w-full max-w-2xl space-y-3 md:space-y-6 text-center md:text-left md:mt-0"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug tracking-tight">
                <span>Szia, </span>
                <span className="text-primary">Nagy Mónika vagyok.</span>
              </h1>
            </div>

            <div className="space-y-3 md:space-y-5">
              <p className="text-base sm:text-lg md:text-xl font-semibold">
                Magyar- és matematikatanár, 2019-ben egy nehéz élethelyzet során
                találkoztam először a családállítással.
              </p>
              <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                Nem találtam máshol megoldást, ezért kipróbáltam és a hatására
                elkezdett változni az életem. Azóta sok minden változott bennem
                és körülöttem. 2021-ben elvégeztem a családállító képzést, és ma
                már én is segítek másoknak ezzel a csodálatos módszerrel.
              </p>
            </div>

            <div className="mt-3 md:mt-6 space-y-2 md:space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                Vegyük fel a kapcsolatot!
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
                <Button
                  onClick={() => scrollToView("#signup")}
                  className="w-full h-12 px-6"
                >
                  Jelentkezem
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
