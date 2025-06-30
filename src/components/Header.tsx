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

const navItems = [
  { href: "#intro", label: "Bemutatkozás" },
  { href: "#sessions", label: "Ülések" },
  { href: "#contact", label: "Kapcsolat" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl w-full">
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-semibold text-primary">
          🌸Családállítás
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-10 md:flex">
          <nav className="hidden gap-10 md:flex">
            {navItems.map((item) => (
              <Button key={item.href} variant={"ghost"} className="text-md">
                {item.label}
              </Button>
            ))}
          </nav>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button size={"lg"}>Jelentkezem</Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
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
                  <Button key={item.href} variant={"ghost"} className="text-md">
                    {item.label}
                  </Button>
                ))}
                <div></div>
                <Button>Bejelentkezés</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
