"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConstellationSection() {
  return (
    <section
      id="about-constellation"
      className="w-full px-6 md:px-10 scroll-mt-[var(--header-height)] bg-gradient-secondary text-foreground"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-16 md:space-y-12 py-16 md:py-32">
        {/* Block 1 — Text Left, Image Right */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Felszínre hozzuk a valódi akadályokat
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              A család- és rendszerállítás kiváló lehetőség arra, hogy életünk
              mélyen gyökerező akadályait felszínre hozzuk. A gyógyulás és
              oldódás folyamata ekkor megkezdődik – fizikai, érzelmi és szellemi
              szinteken.
            </p>
            <p className="text-muted-foreground italic">
              „Valami végre megmozdul. És elindul egy könnyebb, szabadabb élet
              felé vezető út.”
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/monika-couch-cropped.jpg"
              alt="Mónika családállítás közben"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Block 2 — Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/group.jfif"
              alt="Csoportos családállítás"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Nem csak a családról szól
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              A családállítás elnevezés kicsit félrevezető, mert nemcsak a
              családról szól. Bármit "állíthatunk" a középpontba:
              párkapcsolatot, munkát, anyagi problémákat, krónikus fáradtságot,
              kedvetlenséget, bánatot – egyszóval: <strong>BÁRMIT</strong>.
            </p>
            <p className="text-muted-foreground italic">
              „Amikor a tudattalan láthatóvá válik, elkezd gyógyulni, amit már
              nem kell többé rejtegetni.”
            </p>
          </motion.div>
        </div>

        {/* Block 3 — Text Only */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Mi történik egy állításon?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Az állítás azzal kezdődik, hogy megfogalmazod: most épp mi a
            legnagyobb teher az életedben. A mező rendeződik, és szereplőket
            "állítunk" fel, akik az adott probléma energetikáját jelenítik meg.
            A folyamat során felszínre kerülnek a rejtett dinamikák, kötődések,
            és kimondatlan érzések.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Ha van elég bátorság benned, hogy szembenézz ezekkel, akkor
            elindulhat a gyógyulás – nemcsak benned, hanem az egész családi
            rendszeredben is. Aki eljön, gyakran úgy távozik, hogy "mintha
            mázsás terheket tett volna le".
          </p>
        </motion.div>
      </div>
    </section>
  );
}