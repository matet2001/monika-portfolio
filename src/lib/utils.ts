import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToView(href: string) {
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
