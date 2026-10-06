export function Footer() {
  return (
    <footer className="border-t border-muted py-6 text-center text-base text-muted-foreground bg-transparent">
      <p className="px-4">
        &copy; {new Date().getFullYear()} Minden jog fenntartva.
      </p>
      <p className="px-4 mt-1 text-sm">
        Készítette:{" "}
        <a
          href="https://www.matepojbics.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Pojbics Máté
        </a>
      </p>
    </footer>
  );
}
