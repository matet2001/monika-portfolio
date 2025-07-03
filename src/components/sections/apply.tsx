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

export default function ApplySection() {
  const [type, setType] = useState("");

  return (
    <section
      id="signup"
      className="w-full scroll-mt-[var(--header-height)] px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-auto md:min-h-screen">
        {/* Text + Form */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
              Találkozzunk személyesen vagy online!
            </h2>
            <p className="text-lg text-muted-foreground">
              Jelentkezz családállításra – válaszd ki a számodra megfelelő
              módot, és vágjunk bele együtt!
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Row */}
            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
              <Input
                type="text"
                placeholder="Keresztnév"
                className="w-full"
                required
              />
              <Input
                type="text"
                placeholder="Vezetéknév"
                className="w-full"
                required
              />
            </div>

            {/* Email */}
            <Input
              type="email"
              placeholder="Email címed..."
              className="w-full"
              required
            />

            {/* Select Type */}
            <Select onValueChange={setType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Válassz családállítás típust..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="egyeni-szemelyes">
                  Egyéni (személyes) – 18.000 Ft
                </SelectItem>
                <SelectItem value="egyeni-online">
                  Egyéni (online) – 15.000 Ft
                </SelectItem>
                <SelectItem value="csoportos-szemelyes">
                  Csoportos (személyes) – 12.000 Ft
                </SelectItem>
                <SelectItem value="csoportos-online">
                  Csoportos (online) – 10.000 Ft
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Submit */}
            <Button type="submit" className="w-full h-12 text-base">
              Jelentkezem
            </Button>
          </form>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/monika-coach.jpg" // Replace with actual image path
              alt="Mónika állítást tart"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
