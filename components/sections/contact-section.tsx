"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="scroll-mt-24">
      <div className="glass rounded-2xl p-8 md:p-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          ¿Construimos algo <span className="gradient-text">épico</span>?
        </motion.h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          Escríbeme y conversemos sobre tu idea, producto o equipo. Respondo rápido.
        </p>
        <a href="mailto:diego.z.f99@gmail.com" className="inline-flex items-center gap-2 bg-white text-black font-medium px-5 py-3 rounded-2xl hover:opacity-90 transition">
          <Mail className="h-4 w-4" /> Contactar
        </a>
      </div>
    </section>
  );
}
