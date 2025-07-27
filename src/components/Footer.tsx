export function Footer() {
  return (
    <footer className="border-t border-muted py-6 text-center text-sm text-muted-foreground bg-transparent">
      <p className="px-4">
        &copy; {new Date().getFullYear()} Minden jog fenntartva.
      </p>
    </footer>
  );
}
