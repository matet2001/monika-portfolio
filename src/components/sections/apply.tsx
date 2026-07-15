"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ApplySection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.currentTarget);
    const data = {
      firstName: form.get("firstName") as string,
      lastName: form.get("lastName") as string,
      email: form.get("email") as string,
      type: form.get("type") as string,
    };

    const res = await fetch("/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setIsLoading(false);

    if (res.ok) {
      setIsSubmitted(true);
      toast.success("Köszönjük a jelentkezést!");
    } else {
      toast.error("Hiba történt. Kérlek, próbáld újra.");
    }
  };

  return (
    <section
      id="jelentkezes"
      className="w-full bg-background scroll-mt-[var(--header-height)] my-8 md:py-12 md:my-12 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5 md:bg-none">
          {/* Image Container - Hidden on mobile */}
          <div className="hidden md:block relative w-full">
            <Image
              src="/monika_photos/IMG_4947.webp"
              alt="Nagy Mónika családállítás"
              width={5112}
              height={3408}
              className="w-full h-auto max-h-[560px] 2xl:max-h-[720px] object-cover object-[center_30%]"
              priority
            />

            {/* Overlay with gradient for content readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="relative md:absolute inset-0 flex items-center py-12 md:py-0">
            <div className="w-full max-w-xl px-6 sm:px-8 md:px-12 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground md:text-white leading-tight">
                    Találkozzunk személyesen vagy online!
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-foreground md:text-white/90">
                    Jelentkezz családállításra – válaszd ki a számodra megfelelő
                    módot, és vágjunk bele együtt!
                  </p>
                </div>

                {!isSubmitted ? (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="text"
                        placeholder="Vezetéknév"
                        name="lastName"
                        required
                        disabled={isLoading}
                        className="bg-white/95 border-white/20 placeholder:text-muted-foreground h-11"
                      />
                      <Input
                        type="text"
                        placeholder="Keresztnév"
                        name="firstName"
                        required
                        disabled={isLoading}
                        className="bg-white/95 border-white/20 placeholder:text-muted-foreground h-11"
                      />
                    </div>

                    <Input
                      type="email"
                      placeholder="Email címed..."
                      name="email"
                      required
                      disabled={isLoading}
                      className="bg-white/95 border-white/20 placeholder:text-muted-foreground h-11"
                    />

                    <select
                      name="type"
                      required
                      disabled={isLoading}
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full h-11 px-3 rounded-md bg-white/95 border border-white/20 text-foreground cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="" disabled>
                        Válassz családállítás típust...
                      </option>
                      <option value="csoportos">
                        Csoportos családállítás (20.000 Ft témával / 10.000 Ft
                        segítőként)
                      </option>
                      <option value="egyeni-szemelyes">
                        Egyéni állítás – személyes részvétellel (20.000 Ft)
                      </option>
                      <option value="egyeni-online">
                        Egyéni állítás – online (20.000 Ft)
                      </option>
                      <option value="csoportos-szemelyes">
                        Csoportos állítás – helyszíni részvétellel (10.000 Ft /
                        fő)
                      </option>
                    </select>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow mt-2"
                      disabled={isLoading}
                    >
                      {isLoading ? "Küldés..." : "Jelentkezem"}
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-3 bg-white/95 p-6 rounded-xl">
                    <CheckCircle className="text-green-600 w-10 h-10" />
                    <h3 className="text-xl font-semibold text-green-700">
                      A jelentkezés sikeres volt!
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Kérlek, nézd meg az emailedet. Hamarosan keresni foglak.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
