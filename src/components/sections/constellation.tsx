"use client";

import { motion } from "framer-motion";
import { HeartCrack, Leaf, HelpingHand } from "lucide-react";
import Image from "next/image";

export default function ConstellationSection() {
  return (
    <section
      id="about-constellation"
      className="w-full px-6 md:px-10 scroll-mt-[var(--header-height)] bg-gradient-secondary text-foreground"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Block 1 — Text Left, Image Right */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 h-screen">
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 h-screen">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/group.jpg"
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

        {/* Block 3 — Miért pont a családállítás */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-screen flex flex-col justify-center space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight text-center">
            Miért pont a családállítás?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <p className="text-base sm:text-lg leading-relaxed">
              Volt az életemnek egy nagyon kemény időszaka: a házasságom és az
              életem – nem szépítem – romokban volt. Kerestem a módszereket,
              amivel megjavíthatnám az életemet. Elkezdtem dolgozni magamon
              ezzel a módszerrel, és az életem kezdett megváltozni.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              A saját bőrömön tapasztaltam meg a családállítás hatékonyságát,
              ezért úgy döntöttem, hogy ezzel a módszerrel én is szeretnék
              segíteni az embereknek, hogy egy jobb, boldogabb életet
              teremthessenek maguknak.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground italic">
              „Ez a módszer nem kerüli meg a problémákat. A Mező pontosan
              megmutatja, mi áll a nehézségek mögött – és lehetőséget ad a
              valódi gyógyulásra.”
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="flex flex-col items-center space-y-2">
              <HeartCrack className="w-10 h-10 text-primary" />
              <p className="font-semibold text-sm sm:text-base">Nehézség</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Leaf className="w-10 h-10 text-primary" />
              <p className="font-semibold text-sm sm:text-base">Megértés</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <HelpingHand className="w-10 h-10 text-primary" />
              <p className="font-semibold text-sm sm:text-base">Gyógyulás</p>
            </div>
          </div>
        </motion.div>

        {/* Block 4 — Mi történik egy állításon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="h-screen space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight text-center">
            Mi történik egy állításon?
          </h2>
          <div className="max-w-4xl mx-auto text-center md:text-left space-y-6">
            <p className="text-base sm:text-lg leading-relaxed">
              Az állítás azzal kezdődik, hogy megfogalmazod: most épp mi a
              legnagyobb teher az életedben. A mező rendeződik, és szereplőket
              "állítunk" fel, akik az adott probléma energetikáját jelenítik
              meg. A folyamat során felszínre kerülnek a rejtett dinamikák,
              kötődések, és kimondatlan érzések.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Ha van elég bátorság benned, hogy szembenézz ezekkel, akkor
              elindulhat a gyógyulás – nemcsak benned, hanem az egész családi
              rendszeredben is. Aki eljön, gyakran úgy távozik, hogy "mintha
              mázsás terheket tett volna le".
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/session1.jpg"
                  alt="Állítás illusztráció 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/session2.jpg"
                  alt="Állítás illusztráció 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/session3.jpg"
                  alt="Állítás illusztráció 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
