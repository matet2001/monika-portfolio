"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { scrollToView } from "@/lib/utils";

const navItems = [
  { href: "#bemutatkozas", label: "Bemutatkozás" },
  { href: "#csaladallitas", label: "Családállítás" },
  { href: "#jelentkezes", label: "Jelentkezem", isCta: true },
  { href: "#velemenyek", label: "Vélemények" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];
export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full h-[var(--header-height)]"
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 md:px-10 backdrop-blur-md rounded-b-3xl bg-muted/30  border-b border-muted-foreground/10 w-full max-w-[1400px]">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold"
        >
          <Image
            src="/monika_logo.png"
            alt="Mónika Családállítás logo"
            width={50}
            height={45}
            className="rounded-full"
            unoptimized
          />
          Családállítás
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 justify-center  ">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={item.isCta ? "default" : "ghost"}
              className="text-md"
              onClick={() => scrollToView(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" aria-describedby={undefined}>
              <p id="mobile-menu-description" className="sr-only">
                Mobile navigation menu
              </p>

              <SheetHeader className="text-left text-lg font-semibold">
                Navigáció
              </SheetHeader>
              <SheetTitle />
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={item.isCta ? "default" : "ghost"}
                    className="text-md"
                    onClick={() => {
                      scrollToView(item.href);
                      setIsSheetOpen(false);
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <div></div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
