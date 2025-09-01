// "use client";

// import { projects as data } from "@/data/projects";
// import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";
// import Link from "next/link";

// export default function ProjectsSection({ limit }: { limit?: number }) {
//   const projects = limit ? data.slice(0, limit) : data;
//   return (
//     <section id="projects" className="scroll-mt-24">
//       <div className="flex items-end justify-between mb-6">
//         <h2 className="text-3xl md:text-4xl font-bold">Proyectos <span className="gradient-text">Destacados</span></h2>
//         <Link href="/projects" className="link-underline">Ver todos</Link>
//       </div>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((p, i) => (
//           <motion.div
//             key={p.title}
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ delay: i * 0.05 }}
//             className="group glass rounded-2xl overflow-hidden card-hover"
//           >
//             <div className="aspect-[16/10] bg-gradient-to-br from-brand-500/30 to-fuchsia-500/30" />
//             <div className="p-5 space-y-3">
//               <h3 className="text-lg font-bold">{p.title}</h3>
//               <p className="text-sm text-white/80">{p.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {p.tags.map(t => (
//                   <span key={t} className="text-xs px-2 py-1 rounded-lg bg-white/10">{t}</span>
//                 ))}
//               </div>
//               <div className="flex items-center gap-3 pt-2">
//                 {p.href && (
//                   <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm link-underline">
//                     Demo <ExternalLink className="h-4 w-4" />
//                   </a>
//                 )}
//                 {p.repo && (
//                   <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm link-underline">
//                     Código <Github className="h-4 w-4" />
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }




// "use client";

// import { projects as data } from "@/data/projects";
// import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function ProjectsSection({ limit }: { limit?: number }) {
//   const projects = limit ? data.slice(0, limit) : data;
//   return (
//     <section id="projects" className="scroll-mt-24">
//       <div className="flex items-end justify-between mb-6">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Proyectos <span className="gradient-text">Destacados</span>
//         </h2>
//         <Link href="/projects" className="link-underline">
//           Ver todos
//         </Link>
//       </div>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((p, i) => (
//           <motion.div
//             key={p.title}
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ delay: i * 0.05 }}
//             className="group glass rounded-2xl overflow-hidden card-hover"
//           >
//             <div className="aspect-[16/10] relative">
//               {p.cover ? (
//                 <Image
//                   src={p.cover}
//                   alt={p.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gradient-to-br from-brand-500/30 to-fuchsia-500/30" />
//               )}
//             </div>
//             <div className="p-5 space-y-3">
//               <h3 className="text-lg font-bold">{p.title}</h3>
//               <p className="text-sm text-white/80">{p.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {p.tags.map((t) => (
//                   <span
//                     key={t}
//                     className="text-xs px-2 py-1 rounded-lg bg-white/10"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex items-center gap-3 pt-2">
//                 {p.href && (
//                   <a
//                     href={p.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-1 text-sm link-underline"
//                   >
//                     Demo <ExternalLink className="h-4 w-4" />
//                   </a>
//                 )}
//                 {p.repo && (
//                   <a
//                     href={p.repo}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-1 text-sm link-underline"
//                   >
//                     Código <Github className="h-4 w-4" />
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }







"use client";

import { useState } from "react";
import { projects as data } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DemoModal from "@/components/demo-modal";

export default function ProjectsSection({ limit }: { limit?: number }) {
  const [openDemo, setOpenDemo] = useState<null | { title: string; demoUrl: string }>(null);
  const projects = limit ? data.slice(0, limit) : data;

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">Proyectos <span className="gradient-text">Destacados</span></h2>
        <Link href="/projects" className="link-underline">Ver todos</Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
            className="group glass rounded-2xl overflow-hidden card-hover"
          >
            <div className="aspect-[16/10] relative">
              {p.cover ? (
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-brand-500/30 to-fuchsia-500/30" />
              )}
            </div>

            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="text-sm text-white/80">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags?.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-lg bg-white/10">{t}</span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                {p.href && (
                  // Si el proyecto está marcado como `demoType: "flutter"` abrimos modal con video
                  p.demoType === "flutter" ? (
                    <button
                      onClick={() => setOpenDemo({ title: p.title, demoUrl: p.href! })}
                      className="inline-flex items-center gap-1 text-sm link-underline"
                    >
                      Demo <ExternalLink className="h-4 w-4" />
                    </button>
                  ) : (
                    <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm link-underline">
                      Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  )
                )}

                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm link-underline">
                    Código <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal que reproduce el video dentro del mockup */}
      {openDemo && (
        <DemoModal
          isOpen={true}
          onClose={() => setOpenDemo(null)}
          videoUrl={openDemo.demoUrl}
          title={openDemo.title}
        />
      )}
    </section>
  );
}
