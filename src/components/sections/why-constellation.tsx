"use client";

import { motion } from "framer-motion";
import { HeartCrack, Leaf, HelpingHand } from "lucide-react";

export default function WhyConstellationSection() {
  return (
    <section
      id="why-constellation"
      className="w-full px-4 sm:px-6 md:px-10 scroll-mt-[var(--header-height)] bg-background text-foreground py-16 md:py-20"
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
            Miért pont a családállítás?
          </h2>

          {/* Main content */}
          <div className="max-w-4xl mx-auto space-y-6 text-center px-4 sm:px-6">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Volt az életemnek egy nagyon kemény időszaka: a házasságom és az
              életem – nem szépítem – romokban volt. Sok mindent kipróbáltam,
              mégsem éreztem valódi változást.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              A családállításnál azt tapasztaltam meg először, hogy{" "}
              <strong className="text-primary">nagyon rövid idő alatt</strong>{" "}
              lehet rálátni a valódi okokra. Nem kell éveken át elemezni a
              múltat: a Mező tiszta, őszinte tükröt tart, és megmutatja, mi az,
              ami ma is fogva tart.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Ezért döntöttem úgy, hogy ezzel a módszerrel szeretnék segíteni
              másoknak is – hogy ők is végre elindulhassanak egy könnyebb,
              boldogabb élet felé.
            </p>

            {/* Quote box */}
            <div className="bg-primary/5 border-l-4 border-primary p-5 sm:p-6 md:p-8 rounded-r-lg mt-8">
              <p className="text-foreground italic text-lg sm:text-xl md:text-2xl leading-relaxed">
                „A családállítás nem kertel – de éppen ettől szabadít fel
                mélyen belül."
              </p>
            </div>
          </div>

          {/* Icons */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-12 max-w-2xl mx-auto pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="bg-primary/10 p-4 sm:p-5 rounded-2xl">
                <HeartCrack className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </div>
              <p className="font-semibold text-base sm:text-lg text-center">
                Nehézség
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="bg-primary/10 p-4 sm:p-5 rounded-2xl">
                <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </div>
              <p className="font-semibold text-base sm:text-lg text-center">
                Rálátás
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="bg-primary/10 p-4 sm:p-5 rounded-2xl">
                <HelpingHand className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </div>
              <p className="font-semibold text-base sm:text-lg text-center">
                Felszabadulás
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
