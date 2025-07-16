"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConstellationSection() {
  return (
    <section
      id="about-constellation"
      className="w-full bg-background-secondary text-foreground px-6 md:px-10 scroll-mt-[var(--header-height)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col ">
        {/* Block 1 — Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center justify-between h-screen">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-xl space-y-6 text-center md:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
              Felszínre hozzuk a valódi akadályokat
            </h2>
            <p className="text-lg leading-relaxed">
              A család- és rendszerállítás kiváló lehetőség arra, hogy életünk
              mélyen gyökerező akadályait felszínre hozzuk. A gyógyulás és
              oldódás folyamata ekkor megkezdődik — fizikai, érzelmi és szellemi
              szinteken.
            </p>
            <p className="text-muted-foreground text-md italic">
              “Valami végre megmozdul. És elindul egy könnyebb, szabadabb élet
              felé vezető út.”
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl"
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-x-12 h-screen">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl mt-12 md:mt-0"
          >
            <Image
              src="/placeholder-image.jpg" // Replace with real image
              alt="Kép a családállításról"
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
            className="max-w-xl space-y-6 text-center md:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
              Nem csak a családról szól
            </h2>
            <p className="text-lg leading-relaxed">
              A családállítás elnevezés kicsit félrevezető, mert nemcsak a
              családról szól. Bármit &quot;állíthatunk&quot; a középpontba:
              párkapcsolatot, munkát, anyagi problémákat, krónikus fáradtságot,
              kedvetlenséget, bánatot, egyszóval: <strong>BÁRMIT</strong>.
            </p>
            <p className="text-muted-foreground text-md italic">
              „Amikor a tudattalan láthatóvá válik, elkezd gyógyulni, amit már
              nem kell többé rejtegetni.”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
