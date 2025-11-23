"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartCrack, Leaf, HelpingHand } from "lucide-react";

export default function ConstellationSection() {
  return (
    <section id="csaladallitas" className="w-full ">
      {/* Main title section with gradient background */}
      <div className="w-full px-4 sm:px-6 md:px-10 bg-gradient-secondary text-foreground md:py-12 py-8 -scroll-mt-56">
        <div className="max-w-[1400px] mx-auto flex flex-col space-y-24">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary text-center">
            Mit adhat neked a családállítás?
          </h1>

          {/* Block 1 — Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-8 text-center md:text-left"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
                Felszínre hozzuk a valódi akadályokat
              </h2>

              <p className="text-lg leading-relaxed">
                Előfordul, hogy úgy érzed, mindent megtettél – mégis mindig
                ugyanoda tér vissza az életed? Mintha láthatatlan minták
                irányítanák a döntéseidet, a kapcsolataidat, a hangulatodat?
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                A család- és rendszerállítás abban segít, hogy ráláss ezekre a
                mélyen futó mintákra: kimondatlan történetekre, lojalitásokra,
                régi sebekre. Amikor ezek tudatossá válnak, valami megmozdul –
                és elkezdődik a gyógyulás fizikai, érzelmi és lelki szinten is.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-4 sm:p-6 rounded-r-lg">
                <p className="text-foreground italic">
                  „Amikor végre megérted, honnan jön a nehézség, már nem
                  ugyanazzal a teherrel viszed tovább."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="relative w-full md:w-1/2 h-96 sm:h-[450px] md:h-[540px] lg:h-[630px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/monika_photos/IMG_4905.webp"
                alt="Mónika professzionális portréja"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Constellation - White background for contrast */}
      <div className="w-full px-4 sm:px-6 md:px-10 bg-background text-foreground py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col space-y-10"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center">
              Miért pont a családállítás?
            </h2>

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
                múltat: a Mező tiszta, őszinte tükröt tart, és megmutatja, mi
                az, ami ma is fogva tart.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Ezért döntöttem úgy, hogy ezzel a módszerrel szeretnék segíteni
                másoknak is – hogy ők is végre elindulhassanak egy könnyebb,
                boldogabb élet felé.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-5 sm:p-6 md:p-8 rounded-r-lg mt-8">
                <p className="text-foreground italic text-lg sm:text-xl md:text-2xl leading-relaxed">
                  „A családállítás nem kertel – de éppen ettől szabadít fel
                  mélyen belül."
                </p>
              </div>
            </div>

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
      </div>

      {/* Block 2 — Image Left, Text Right - Gradient background */}
      <div className="w-full px-4 sm:px-6 md:px-10 bg-gradient-secondary text-foreground py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="relative w-full md:w-1/2 h-96 sm:h-[450px] md:h-[540px] lg:h-[660px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/monika_photos/IMG_4863.webp"
                alt="Mónika munka közben"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-8 text-center md:text-left"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
                Nem csak a családról szól
              </h2>

              <p className="text-base sm:text-lg leading-relaxed">
                A „családállítás" elnevezés félrevezető, mert a középpontba
                állíthatunk párkapcsolatot, munkát, pénzügyi elakadást, egy
                visszatérő élethelyzetet vagy egy nehezen megfogalmazható érzést
                is – például krónikus fáradtságot, kedvetlenséget vagy
                szorongást.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                A lényeg mindig ugyanaz: megnézzük, mi az a láthatatlan minta,
                történet vagy energia, ami ma is fogva tart, és ami visszatart
                attól, hogy szabadabban élj.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-4 sm:p-6 rounded-r-lg">
                <p className="text-foreground italic">
                  „Amikor a tudattalan láthatóvá válik, már nem irányít
                  észrevétlenül."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What Happens - White background */}
      <div className="w-full px-4 sm:px-6 md:px-10 bg-background text-foreground py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col space-y-10"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center">
              Mi történik egy állításon?
            </h2>

            <div className="max-w-4xl mx-auto space-y-6 text-center px-4 sm:px-6">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Nem kell „előkészülnöd" – egyszerűen eljössz egy kérdéssel vagy
                érzéssel, amit szeretnél megérteni. Az állítás nem terápia, nem
                elemzés – hanem mély rálátás arra, ami eddig rejtve volt.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Helyettesítőkkel, térben és csendben dolgozunk. Ami
                megmutatkozik, az gyakran meglepő – de mindig felszabadító. Az
                élmény mély, nyugodt, tiszta. És ami igazán fontos: a munka
                hatása nem csak itt és most történik – hetekig, hónapokig
                érződik a folyamat, ahogy az életed lassan rendeződni kezd.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Sokszor egyetlen állítás elég ahhoz, hogy valami nagy
                elmozduljon benned – és ez az, amit a legtöbb módszer nem tud
                megadni.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-5 sm:p-6 md:p-8 rounded-r-lg mt-8">
                <p className="text-foreground italic text-lg sm:text-xl md:text-2xl leading-relaxed">
                  „Nem kell mindent egyedül cipelned."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
