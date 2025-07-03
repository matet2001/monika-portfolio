import AboutSection from "@/components/sections/about";

export default function Home() {
  return (
    <div className="flex flex-col space-y-72">
      <AboutSection />

      <section
        id="about-constellation"
        className="bg-background-secondary w-full min-h-screen"
      >
        <h2 className="text-3xl font-semibold mb-6">Családállítás</h2>
        {/* What is Family Constellation? (overview, icons, brief text) */}
      </section>

      <section id="signup" className="w-full min-h-screen">
        <h2 className="text-3xl font-semibold mb-6">Jelentkezem</h2>
        {/* CTA booking form/button */}
      </section>

      <section
        id="sessions"
        className="w-full min-h-screen bg-background-secondary"
      >
        <h2 className="text-3xl font-semibold mb-6">Ülések</h2>
        {/* Individual vs Group Sessions explanation */}
      </section>

      <section id="faq" className="w-full min-h-screen">
        <h2 className="text-3xl font-semibold mb-6">Gyakori kérdések</h2>
        {/* FAQs and emotional topics */}
      </section>
    </div>
  );
}
