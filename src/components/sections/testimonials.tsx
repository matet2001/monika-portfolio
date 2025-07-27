"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Eliza",
    text: "Mónika nagyon meggyőző személyiség, már az első pillanattól éreztem, hogy jó kezekben vagyok. Végig figyelt rám, tényleg jelen volt, és szinte azonnal ráérzett arra, amit hoztam. Olyan dologra világított rá, ami teljesen váratlan volt számomra, de nagyon betalált. Nekem nagyon sokat adott, abszolút bevált, csak ajánlani tudom!",
  },
  {
    name: "Anikó",
    text: "Kedves Mónika! Máris érzem a változást. Rögtön csökkent a pánikom. Hétfőre elmúlt a szomorúságom és a munka is jól ment. Köszönöm. Máris jobb...",
  },
  {
    name: "Adrienn",
    text: "Csodálatos volt maga az állítás, csodálatos felismerésekkel. Így teljesen mást fényt vet a kapcsolatunkra. Ez a módszer mentette meg a kapcsolódásunkat, újra tiszta lappal indulhattunk. Hálás vagyok érte.",
  },
  {
    name: "Zsuzsanna",
    text: "Nagyon örülök, hogy Orsikának segített kijönni a problémájából. Hála Istennek az Égi kirakós tökéletesen van kirakva. Könnyű dolgom van, mert az égiek segítenek. Hálásan köszönöm, hogy segítettél neki!",
  },
];

export default function TestimonialsSection() {
  const plugin = useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: true,
    })
  );

  return (
    <section
      id="testimonials"
      className="w-full px-6 md:px-10 bg-gradient-secondary scroll-mt-[var(--header-height)] h-screen flex justify-center items-center py-10"
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Vélemények
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-base sm:text-lg">
            Valódi visszajelzések azoktól, akik már megtapasztalták a
            családállítást Mónikával.
          </p>
        </motion.div>

        <div className="relative">
          <Carousel
            opts={{
              loop: true,
              align: "start", // changed from "center"
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="gap-6 px-2 md:px-6">
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-input border rounded-xl shadow-md p-6 h-full flex flex-col justify-between text-left"
                  >
                    <p className="text-base sm:text-lg leading-relaxed italic mb-4">
                      {item.text}
                    </p>
                    <span className="text-sm font-semibold text-primary">
                      – {item.name}
                    </span>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
