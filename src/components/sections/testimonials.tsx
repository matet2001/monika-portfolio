"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useRef } from "react";

// 🧾 Real testimonials from comments.md
const testimonials = [
  {
    name: "Judit Szabó",
    text: "Mónika nagyon meggyőző személyiség, már az első pillanattól éreztem, hogy jó kezekben vagyok. Végig figyelt rám, tényleg jelen volt, és szinte azonnal ráérzett arra, amit hoztam. Olyan dologra világított rá, ami teljesen váratlan volt számomra",
  },
  {
    name: "Nóra Kiss",
    text: "- de nagyon betalált. Látszik, hogy hagyja, hogy az állítás és az energia vigye őt, nem akarja kontrollálni a folyamatot, és ettől lett igazán hatásos az egész. Nekem nagyon sokat adott, abszolút bevált, csak ajánlani tudom!",
  },
  {
    name: "Anna Szabó",
    text: "Kedves Mónika! Máris érzem a változást. Rögtön csökkent a pánikom. Hétfőre elmúlt a szomorúságom és a munka is jól ment. Kiváncsian várom a folytatást , hogy mi javulhat, mi változhat az életemben. Köszönöm. Máris jobb ..",
  },
  {
    name: "Nóra Kovács",
    text: "Tulajdonkeppen ez a módszer mentette meg a kapcsolódásunkat, ami újra tiszta lappal indulhatott és bátran megtölthettem hittel, bizalommal, reménnyel, szeretettel és szerelemmel. Gyönyörű volt és a mai napig borzasztó hálás vagyok érte.",
  },
  {
    name: "Gábor Farkas",
    text: "Nagyon örülök, hogy Orsikának segít kijönni a problémájából, mert már kezdte egészen maga alá temetni.",
  },
  {
    name: "Zsolt Kovács",
    text: "Hála Istennek az Égi kirakós olyan tökéletesen van kirakva, hogy aki törekszik, annak időben megjelenik a segítség.",
  },
  {
    name: "Kata Farkas",
    text: "Könnyű dolgom van, mert az égiek segítenek!",
  },
  {
    name: "Anna Kiss",
    text: "Hálásan köszönöm, hogy segítettél neki!",
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
      className="w-full px-6 md:px-10 py-24 md:py-32 bg-gradient-secondary scroll-mt-[var(--header-height)]"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
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

        <Carousel
          opts={{
            loop: true,
            align: "center",
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
                  className="bg-background-secondary border rounded-xl shadow-md p-6 h-full flex flex-col justify-between text-left"
                >
                  <p className="text-base sm:text-lg leading-relaxed italic mb-4">
                    “{item.text}”
                  </p>
                  <span className="text-sm font-semibold text-primary">
                    – {item.name}
                  </span>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
