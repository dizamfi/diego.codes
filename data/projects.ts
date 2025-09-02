export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  cover?: string;
  demoType?: string;
};

export const projects: Project[] = [
  {
    title: "Brainwave",
    description: "Proyecto front-end SPA hecho con React + Vite y estilizado con Tailwind",
    tags: ["React.js", "Vite", "Tailwind"],
    href: "https://brainwave-rebs7876l-diego-947ec1e2.vercel.app/",
    repo: "https://github.com/dizamfi/brainwave.git",
    cover: "/covers/brainwave.png",
    demoType: "web"
  },
  {
    title: "Iphone Copy Frontend",
    description: "Una recreación del sitio oficial de Apple Iphone 15 Pro que combina tecnologías de frontend modernas.",
    tags: ["React", "Vite", "Tailwind", "GSAP", "Three.js"],
    href: "https://iphone-copy-ln904spxm-diego-947ec1e2.vercel.app/",
    repo: "https://github.com/dizamfi/iphoneCopy.git",
    cover: "/covers/iphoneCopy.png",
    demoType: "web"
  },
    {
    title: "App Flutter Camaronera",
    description: "App móvil de monitoreo en camaronera Naturisa.",
    tags: ["Flutter", "Dart", "Firebase", "Node.js", "WebSockets", "Rive"],
    href: "/videos/videoFlutter2.mp4",   
    repo: "https://github.com/dizamfi/appNaturisa.git",
    cover: "/covers/flutter2.avif",
    demoType: "flutter"
  },
  {
    title: "Sistema de Gestión de Tareas",
    description: "Sistema para gestionar tus tareas de manera eficiente.",
    tags: ["Next.js", "Supabase", "Tailwind", "Vitest"],
    href: "http://localhost:3000/auth/signin",
    repo: "https://github.com/dizamfi/TaskFlow.git",
    cover: "/covers/taskFlow.png",
    demoType: "web"
  },
];
