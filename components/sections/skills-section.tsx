// "use client";

// import { BadgeCheck, Code2, Cpu, Palette, Rocket, Accessibility } from "lucide-react";
// import { motion } from "framer-motion";

// const skills = [
//   { icon: Code2, title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind", "Flutter", "Javascript", "Dart"] },
//   { icon: Code2, title: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Supabase"] },
//   { icon: Cpu, title: "Performance", items: ["SSR/SSG", "Optimización", "Bundle splitting", "Caching"] },
//   { icon: Rocket, title: "DevOps", items: ["Vercel", "CI/CD", "Monorepos", "Turborepo"] },
//   { icon: Accessibility, title: "Accesibilidad", items: ["WCAG", "Keyboard-first", "Semántica", "Pruebas"] },
//   { icon: BadgeCheck, title: "Calidad", items: ["Testing", "Storybook", "Linter/Prettier"] }
// ];

// export default function SkillsSection() {
//   return (
//     <section className="scroll-mt-24">
//       <h2 className="text-3xl md:text-4xl font-bold mb-6">Habilidades <span className="gradient-text">Clave</span></h2>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {skills.map((s, i) => (
//           <motion.div
//             key={s.title}
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ delay: i * 0.05 }}
//             className="glass rounded-2xl p-5"
//           >
//             <div className="flex items-center gap-3 mb-3">
//               <s.icon className="h-5 w-5" />
//               <h3 className="font-semibold">{s.title}</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {s.items.map((it) => (
//                 <span key={it} className="text-xs px-2 py-1 rounded-lg bg-white/10">{it}</span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }





"use client";

import { FaReact, FaNodeJs, FaAccessibleIcon, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiJavascript, SiDart, SiExpress, SiMongodb, SiPostgresql, SiSupabase, SiVercel, SiGithubactions, SiTurborepo, SiTestinglibrary, SiStorybook, SiPrettier, SiAwsamplify } from "react-icons/si";
import { MdSpeed, MdOutlineDesignServices } from "react-icons/md";

const categories = [
  {
    title: "Frontend",
    icon: <FaReact className="text-sky-400" />,
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Flutter", icon: <SiFlutter className="text-sky-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Dart", icon: <SiDart className="text-sky-600" /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs className="text-green-500" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
    ],
  },
  // {
  //   title: "Performance",
  //   icon: <MdSpeed className="text-rose-400" />,
  //   skills: [
  //     { name: "SSR/SSG", icon: <SiNextdotjs /> },
  //     { name: "Optimización", icon: <MdOutlineDesignServices /> },
  //     { name: "Bundle splitting", icon: <MdOutlineDesignServices /> },
  //     { name: "Caching", icon: <MdOutlineDesignServices /> },
  //   ],
  // },
  {
    title: "DevOps",
    icon: <FaDocker className="text-blue-400" />,
    skills: [
      { name: "Vercel", icon: <SiVercel /> },
      { name: "AWS", icon: <SiAwsamplify className="text-indigo-400" /> },
    ],
  },

  // {
  //   title: "Calidad",
  //   icon: <SiPrettier className="text-yellow-400" />,
  //   skills: [
  //     { name: "Testing", icon: <SiTestinglibrary className="text-red-400" /> },
  //     { name: "Storybook", icon: <SiStorybook className="text-pink-500" /> },
  //     { name: "Linter/Prettier", icon: <SiPrettier /> },
  //   ],
  // },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Habilidades <span className="gradient-text">Clave</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">{cat.icon}</span>
              <h3 className="text-lg font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-sm hover:bg-white/20 transition"
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
