"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin } from "lucide-react";
import { scrollToView } from "@/lib/utils";

export default function GroupEventSection() {
  const handleSignup = () => {
    scrollToView("#jelentkezes");
    // Set the selected option after navigation
    setTimeout(() => {
      const selectElement = document.querySelector(
        'select[name="type"]'
      ) as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = "december-20-csoportos";
        selectElement.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }, 300);
  };

  return (
    <section
      id="group-event"
      className="w-full px-4 sm:px-6 md:px-10 scroll-mt-[var(--header-height)] bg-gradient-to-br from-primary/5 via-background to-primary/10 text-foreground py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col space-y-12"
        >
          {/* Title */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Közelgő esemény
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary px-2">
              Csoportos családállítás
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              December 20.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center break-words">
              Csatlakozz egy különleges csoportos állításhoz, ahol közösen
              dolgozunk a résztvevők kérdésein. A csoportos munka ereje abban
              rejlik, hogy mások történetében is felismerhetjük a saját
              mintáinkat – és ez váratlan felismeréseket, mély gyógyulást hozhat.
            </p>

            <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Időpont</p>
                    <p className="text-muted-foreground">December 20.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Formátum</p>
                    <p className="text-muted-foreground">Csoportos állítás</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  <div className="bg-primary/10 p-4 rounded-full">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-base sm:text-lg mb-2">Részvételi díj</p>
                    <p className="text-primary font-bold text-sm sm:text-base leading-tight">
                      20.000 Ft témával
                    </p>
                    <p className="text-primary font-bold text-sm sm:text-base leading-tight">
                      10.000 Ft segítőként
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-5 sm:p-6 md:p-8 rounded-r-lg">
              <p className="text-foreground leading-relaxed text-base sm:text-lg">
                A csoportos állításon résztvevőként nem csak a saját témádban
                dolgozhatsz, hanem helyettesítőként is tapasztalatot
                szerezhetsz, ami gyakran ugyanolyan erőteljes lehet. Biztonságos
                tér, nyitott szívek, tiszta folyamat.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center pt-4"
            >
              <Button
                onClick={handleSignup}
                size="lg"
                className="w-full sm:w-auto sm:min-w-[280px] h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all px-4"
              >
                <span className="hidden sm:inline">Jelentkezem a December 20-i eseményre</span>
                <span className="sm:hidden">Jelentkezem December 20.</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
