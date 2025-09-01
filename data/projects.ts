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
    description: "Panel de control en tiempo real para IoT y sensores con gráficos y WebSockets.",
    tags: ["Next.js", "TypeScript", "WebSockets", "Tailwind"],
    href: "https://brainwave-rebs7876l-diego-947ec1e2.vercel.app/",
    repo: "https://github.com/tuuser/neptuno-dashboard",
    cover: "/covers/brainwave.png",
    demoType: "web"
  },
  {
    title: "Iphone Copy Frontend",
    description: "Librería de componentes accesibles con dark mode y tokens de diseño.",
    tags: ["React", "Storybook", "A11y"],
    href: "https://iphone-copy-ln904spxm-diego-947ec1e2.vercel.app/",
    repo: "https://github.com/tuuser/astra-ui",
    cover: "/covers/iphoneCopy.png",
    demoType: "web"
  },
    {
    title: "App Flutter Camaronera",
    description: "App móvil de monitoreo en camaronera Naturisa.",
    tags: ["Flutter", "Dart", "Firebase", "Node.js", "WebSockets", "Rive"],
    href: "/videos/videoFlutter2.mp4",    // <-- el video mp4 en public/videos/
    repo: "https://github.com/tuuser/flutter-app",
    cover: "/covers/flutter2.avif",
    demoType: "flutter"
  },
  {
    title: "Iphone Copy Frontend",
    description: "Librería de componentes accesibles con dark mode y tokens de diseño.",
    tags: ["React", "Storybook", "A11y"],
    href: "https://iphone-copy-ln904spxm-diego-947ec1e2.vercel.app/",
    repo: "https://github.com/tuuser/astra-ui",
    cover: "/covers/iphoneCopy.png",
    demoType: "web"
  },
  {
    title: "Iphone Copy Frontend",
    description: "Librería de componentes accesibles con dark mode y tokens de diseño.",
    tags: ["React", "Storybook", "A11y"],
    href: "https://iphone-copy-ln904spxm-diego-947ec1e2.vercel.app/",
    repo: "https://github.com/tuuser/astra-ui",
    cover: "/covers/iphoneCopy.png",
    demoType: "web"
  },
];
