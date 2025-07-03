"use client";

import Link from "next/link";
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

const navItems = [
  { href: "#intro", label: "Bemutatkozás" }, // About Monika
  { href: "#about-constellation", label: "Családállítás" }, // What is Family Constellation?
  { href: "#signup", label: "Jelentkezem", isCta: true }, // CTA Book
  { href: "#sessions", label: "Ülések" }, // Individual vs Group Sessions
  { href: "#faq", label: "Gyakori kérdések" }, // Common questions/emotional topics
];
export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  function scrollToView(href: string) {
    const el = document.querySelector(href);
    if (el) {
      const rootStyles = getComputedStyle(document.documentElement);
      const headerHeightStr = rootStyles
        .getPropertyValue("--header-height")
        .trim();
      const headerHeight = parseInt(headerHeightStr.replace("px", "")) || 64;

      const y =
        el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full backdrop-blur-md rounded-b-3xl h-[var(--header-height)]"
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 max-w-7xl w-full">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-semibold text-primary">
          🌸 Családállítás
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 justify-center flex-1 ">
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

        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-semibold text-primary invisible">
          🌸 Családállítás
        </Link>

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
