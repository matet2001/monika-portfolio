"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { scrollToView } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section
      id="intro"
      className="w-full h-[calc(100vh-var(--header-height))] px-10 bg-background text-foreground scroll-mt-[var(--header-height)]"
    >
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-x-12 h-full">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex"
        >
          <div className="relative aspect-square w-102 rounded-full overflow-hidden shadow-lg border-4 border-primary bg-background-secondary/80">
            <Image
              src="/monika-selfie-cropped.png"
              alt="Nagy Mónika"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-2xl space-y-6 text-center md:text-left"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug tracking-tight">
              <span>Szia, </span>
              <span className="text-primary"> Nagy Mónika vagyok.</span>
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-xl font-semibold">
              Magyar- és matematikatanár, 2019-ben egy nehéz élethelyzet során
              találkoztam először a családállítással.
            </p>
            <p className="text-lg leading-relaxed">
              Nem találtam máshol megoldást, ezért kipróbáltam és a hatására
              elkezdett változni az életem. Azóta sok minden változott bennem és
              körülöttem. 2021-ben elvégeztem a családállító képzést, és ma már
              én is segítek másoknak ezzel a csodálatos módszerrel.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-semibold text-primary">
              Vegyük fel a kapcsolatot!
            </h3>
            <div className="flex flex-col sm:flex-row items-center">
              <Button
                onClick={() => scrollToView("#signup")}
                className="w-full h-12 min-w-xs"
              >
                Jelentkezem
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
