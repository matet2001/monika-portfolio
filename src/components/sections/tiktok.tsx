"use client";

import { motion } from "framer-motion";

const TIKTOK_VIDEO_IDS = ["7605356837147249942"];

const TIKTOK_PROFILE_URL = "https://www.tiktok.com/@monimatekmagyar";

export default function TikTokSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 bg-background text-foreground py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-10"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center">
            TikTok videók
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {TIKTOK_VIDEO_IDS.map((videoId, index) => (
              <motion.div
                key={videoId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${videoId}`}
                  width="325"
                  height="580"
                  allowFullScreen
                  scrolling="no"
                  className="border-0"
                />
              </motion.div>
            ))}
          </div>

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
