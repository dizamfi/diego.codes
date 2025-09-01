"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "TechNova",
    period: "2022 — Presente",
    bullets: ["Líder de UI", "Migración a App Router", "Mejoras de rendimiento 40%"]
  },
  {
    role: "Frontend Developer",
    company: "StartHub",
    period: "2020 — 2022",
    bullets: ["Componentes reutilizables", "SSG y SEO", "Accesibilidad AA"]
  }
];

export default function ExperienceSection() {
  return (
    <section className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Experiencia</h2>
      <ol className="relative border-s border-white/10 pl-6 space-y-6">
        {experience.map((e, i) => (
          <li key={e.role} className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="absolute -left-[9px] mt-1 w-4 h-4 rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500" />
              <h3 className="text-lg font-semibold">{e.role} · <span className="text-white/80">{e.company}</span></h3>
              <p className="text-sm text-white/70">{e.period}</p>
              <ul className="list-disc text-sm text-white/80 pl-5">
                {e.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  );
}
