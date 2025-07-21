"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-main px-6 md:px-10 py-24 md:py-32 scroll-mt-[var(--header-height)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
        {/* Text Content */}
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
              <a href="tel:+36301234567" className="hover:underline">
                +36 30 123 4567
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:kapcsolat@monikacsaladallitas.hu"
                className="hover:underline"
              >
                kapcsolat@monikacsaladallitas.hu
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gyál,+Magyarország"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Gyál, Magyarország
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
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            title="Térkép Gyál"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21382.623298725807!2d19.1771937!3d47.3781681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741cb0d246cdb69%3A0x400c4290c1e5cb0!2zR3nDoWwsIE1hZ2lhcnXFl3fFsyBNYWd5YXJvcnrFhw!5e0!3m2!1shu!2shu!4v1721488000000!5m2!1shu!2shu"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            className="w-full h-96 border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
