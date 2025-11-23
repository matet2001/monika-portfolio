"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="kapcsolat"
      className="w-full px-4 sm:px-6 md:px-10 scroll-mt-[var(--header-height)] bg-gradient-primary text-foreground py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
        {/* Text + Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Kapcsolatfelvétel
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            Ha kérdésed van, vagy szeretnél jelentkezni családállításra, bátran
            vedd fel velem a kapcsolatot az alábbi elérhetőségeken!
          </p>

          <div className="space-y-4 text-base sm:text-lg">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+36303123763" className="hover:underline">
                +36 30 312 3763
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:monika.csaladallitas@gmail.com"
                className="hover:underline"
              >
                monika.csaladallitas@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <a
                href="https://www.google.com/maps/place/2360+Gyál,+Táncsics+Mihály+utca+4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                2360 Gyál, Táncsics Mihály utca 4.
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Facebook className="w-5 h-5 text-primary" />
              <a
                href="https://www.facebook.com/monika.nagy.9693001"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Mónika Nagy
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Instagram className="w-5 h-5 text-primary" />
              <a
                href="https://www.instagram.com/monika.nagy.9693001/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                monika.nagy.9693001
              </a>
            </p>
          </div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl h-72 sm:h-80 md:h-96"
        >
          <iframe
            title="Térkép Gyál"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.611525893193!2d19.2163119!3d47.3847131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741cabc4776c79b%3A0xa94e202a56c4632a!2sT%C3%A1ncsics%20Mih%C3%A1ly%20utca%204%2C%20Gy%C3%A1l%202360!5e0!3m2!1shu!2shu!4v1721571850000!5m2!1shu!2shu"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
