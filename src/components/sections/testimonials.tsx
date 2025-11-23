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
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Eliza",
    text: "Mónika nagyon meggyőző személyiség, már az első pillanattól éreztem, hogy jó kezekben vagyok. Végig figyelt rám, tényleg jelen volt, és szinte azonnal ráérzett arra, amit hoztam. Olyan dologra világított rá, ami teljesen váratlan volt számomra, de nagyon betalált.",
    highlight: "Jó kezekben éreztem magam",
  },
  {
    name: "Anikó",
    text: "Kedves Mónika! Máris érzem a változást. Rögtön csökkent a pánikom. Hétfőre elmúlt a szomorúságom és a munka is jól ment. Köszönöm.",
    highlight: "Máris érzem a változást",
  },
  {
    name: "Adrienn",
    text: "Csodálatos volt maga az állítás, csodálatos felismerésekkel. Így teljesen mást fényt vet a kapcsolatunkra. Ez a módszer mentette meg a kapcsolódásunkat, újra tiszta lappal indulhattunk. Hálás vagyok érte.",
    highlight: "Megmentette a kapcsolatunkat",
  },
  {
    name: "Zsuzsanna",
    text: "Nagyon örülök, hogy Orsikának segített kijönni a problémájából. Hála Istennek az Égi kirakós tökéletesen van kirakva. Könnyű dolgom van, mert az égiek segítenek. Hálásan köszönöm, hogy segítettél neki!",
    highlight: "Hálásan köszönöm",
  },
];

export default function TestimonialsSection() {
  const plugin = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: true,
    })
  );

  return (
    <section
      id="velemenyek"
      className="w-full px-4 sm:px-6 md:px-10 bg-muted/30 scroll-mt-[var(--header-height)] py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Vélemények
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Valódi visszajelzések azoktól, akik már megtapasztalták a
            családállítást Mónikával.
          </p>
        </motion.div>

        <div className="relative px-4 sm:px-8 md:px-12">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <div className="bg-white border border-border rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 h-full flex flex-col relative overflow-hidden">
                      {/* Decorative element */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />

                      {/* Quote icon */}
                      <Quote className="text-primary/20 w-12 h-12 mb-4 relative z-10" />

                      {/* Highlight */}
                      <h3 className="text-lg font-semibold text-primary mb-3 relative z-10">
                        "{item.highlight}"
                      </h3>

                      {/* Main text */}
                      <p className="text-base leading-relaxed text-muted-foreground mb-6 flex-grow relative z-10">
                        {item.text}
                      </p>

                      {/* Author */}
                      <div className="relative z-10">
                        <div className="h-px bg-border mb-4" />
                        <p className="text-base font-semibold text-foreground">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6" />
          </Carousel>
        </div>

        {/* Mobile navigation dots could go here if needed */}
      </div>
    </section>
  );
}
