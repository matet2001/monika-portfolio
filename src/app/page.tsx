import AboutSection from "@/components/sections/about";
import ApplySection from "@/components/sections/apply";
import ConstellationSection from "@/components/sections/constellation";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <ConstellationSection />
      <ApplySection />

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
