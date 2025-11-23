import AboutSection from "@/components/sections/about";
import ApplySection from "@/components/sections/apply";
import ConstellationSection from "@/components/sections/constellation";
import GroupEventSection from "@/components/sections/group-event";
import ContactSection from "@/components/sections/contact";
import TestimonialsSection from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <ConstellationSection />
      <GroupEventSection />
      <ApplySection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
