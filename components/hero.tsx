"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-20 md:pt-28 text-center relative">
      <Spotlight />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <p className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1 rounded-full glass mx-auto">
          <span className="rounded-full w-2 h-2 bg-emerald-400 animate-pulse" />
          Disponible para proyectos
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="gradient-text">Hola, soy Diego</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80">
          <Balancer>
            Desarrollador FullStack. Disfruto creando interfaces modernas con" <strong>Next.js</strong>, animaciones con <strong>Framer Motion</strong> y
            un ojo obsesivo por el detalle.
          </Balancer>
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="#projects" className="group relative overflow-hidden rounded-2xl px-5 py-3 glass">
            <span className="relative z-10 inline-flex items-center gap-2 font-medium">
              Ver proyectos <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-500/30 to-fuchsia-500/30 opacity-0 group-hover:opacity-100 transition" />
          </Link>
          <a href="/" className="rounded-2xl px-5 py-3 bg-white text-black font-medium hover:opacity-90 transition inline-flex items-center gap-2">
            <Download className="h-4 w-4" /> Descargar CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Spotlight() {
  return (
    <div className="relative">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(300px_circle_at_var(--x,_50px),black,transparent)]"
        id="spotlight"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const el = document.getElementById('spotlight');
            window.addEventListener('pointermove', (e) => {
              const x = e.clientX + 'px';
              el?.style.setProperty('--x', x);
            });
          `
        }}
      />
    </div>
  );
}
