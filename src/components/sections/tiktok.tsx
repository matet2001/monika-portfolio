"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const TIKTOK_USERNAME = "monimatekmagyar";

const TIKTOK_PROFILE_URL = `https://www.tiktok.com/@${TIKTOK_USERNAME}`;

export default function TikTokSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 bg-background text-foreground py-12 md:py-16 2xl:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold text-primary text-center">
            TikTok videók
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <blockquote
              className="tiktok-embed"
              cite={TIKTOK_PROFILE_URL}
              data-unique-id={TIKTOK_USERNAME}
              data-embed-type="creator"
              style={{ maxWidth: 780, minWidth: 288 }}
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${TIKTOK_PROFILE_URL}?refer=creator_embed`}
                >
                  @{TIKTOK_USERNAME}
                </a>
              </section>
            </blockquote>
          </motion.div>

          <a
            href={TIKTOK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-lg font-medium"
          >
            Nézd meg a TikTok profilomat &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
