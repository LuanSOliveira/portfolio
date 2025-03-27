import AboutSection from "@/shared/components/PageSections/AboutSection";
import ContactSection from "@/shared/components/PageSections/ContactSection";
import KnowledgeSection from "@/shared/components/PageSections/KnowledgeSection";
import PresentationSection from "@/shared/components/PageSections/PresentationSection";
import WorksSection from "@/shared/components/PageSections/WorksSection";

export default function Home() {
  return (
    <div>
      <PresentationSection />
      <AboutSection />
      <KnowledgeSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
}
