"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ApplySection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      id="signup"
      className="w-full px-6 md:px-10 py-24 md:py-32 bg-gradient-main scroll-mt-[var(--header-height)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left — Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Találkozzunk személyesen vagy online!
            </h2>
            <p className="text-lg text-muted-foreground">
              Jelentkezz családállításra – válaszd ki a számodra megfelelő
              módot, és vágjunk bele együtt!
            </p>
          </div>

          {!isSubmitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Vezetéknév"
                  name="lastName"
                  required
                  disabled={isLoading}
                />
                <Input
                  type="text"
                  placeholder="Keresztnév"
                  name="firstName"
                  required
                  disabled={isLoading}
                />
              </div>

              <Input
                type="email"
                placeholder="Email címed..."
                name="email"
                required
                disabled={isLoading}
              />

              <Select name="type" required disabled={isLoading}>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Válassz családállítás típust..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="egyeni-szemelyes">
                    Egyéni (személyes) – 20.000 Ft
                  </SelectItem>
                  <SelectItem value="egyeni-online">
                    Egyéni (online) – 20.000 Ft
                  </SelectItem>
                  <SelectItem value="csoportos-szemelyes">
                    Csoportos (személyes) – 10.000 Ft / fő
                  </SelectItem>
                </SelectContent>
              </Select>

              <Button
                type="submit"
                className="w-full h-12 text-base"
                disabled={isLoading}
              >
                {isLoading ? "Küldés..." : "Jelentkezem"}
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <CheckCircle className="text-green-500 w-10 h-10" />
              <h3 className="text-2xl font-semibold text-green-700">
                A jelentkezés sikeres volt!
              </h3>
              <p className="text-muted-foreground">
                Kérlek, nézd meg az emailedet. Hamarosan keresni foglak.
              </p>
            </div>
          )}
        </motion.div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/monika-coach.jpg"
              alt="Mónika állítást tart"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
