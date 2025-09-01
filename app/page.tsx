import Hero from "@/components/hero";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import ContactSection from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <div className="space-y-32 pb-24">
      <Hero />
      <ProjectsSection limit={6} />
      <SkillsSection />
      {/* <ExperienceSection /> */}
      <ContactSection />
    </div>
  );
}
