import ProjectsSection from "@/components/sections/projects-section";

export const metadata = { title: "Proyectos — Portafolio" };

export default function ProjectsPage() {
  return (
    <div className="space-y-16 pb-24">
      <h1 className="text-4xl md:text-5xl font-bold">Todos los <span className="gradient-text">Proyectos</span></h1>
      <ProjectsSection />
    </div>
  );
}
