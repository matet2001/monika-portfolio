"use client";

import { motion } from "framer-motion";

export default function WhatHappensSection() {
  return (
    <section
      id="what-happens"
      className="w-full px-4 sm:px-6 md:px-10 scroll-mt-[var(--header-height)] bg-gradient-secondary text-foreground py-16 md:py-20"
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col space-y-10"
        >
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center">
            Mi történik egy állításon?
          </h2>

          {/* Main content */}
          <div className="max-w-4xl mx-auto space-y-6 text-center px-4 sm:px-6">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Nem kell „előkészülnöd" – egyszerűen eljössz egy kérdéssel vagy
              érzéssel, amit szeretnél megérteni. Az állítás nem terápia, nem
              elemzés – hanem mély rálátás arra, ami eddig rejtve volt.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Helyettesítőkkel, térben és csendben dolgozunk. Ami megmutatkozik, az
              gyakran meglepő – de mindig felszabadító. Az élmény mély, nyugodt,
              tiszta. És ami igazán fontos: a munka hatása nem csak itt és most
              történik – hetekig, hónapokig érződik a folyamat, ahogy az életed
              lassan rendeződni kezd.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Sokszor egyetlen állítás elég ahhoz, hogy valami nagy elmozduljon
              benned – és ez az, amit a legtöbb módszer nem tud megadni.
            </p>

            {/* Quote box */}
            <div className="bg-primary/5 border-l-4 border-primary p-5 sm:p-6 md:p-8 rounded-r-lg mt-8">
              <p className="text-foreground italic text-lg sm:text-xl md:text-2xl leading-relaxed">
                „Nem kell mindent egyedül cipelned."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
