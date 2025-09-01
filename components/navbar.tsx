"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { clsx } from "clsx";

import type { Route } from "next";

const links: { href: Route; label: string }[] = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" }
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50">
      <div className="container-3xl py-4">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between shadow-glow">
          <div className="flex items-center gap-6">
            {/* <Link href="/" className="text-sm font-semibold tracking-wide uppercase">
              <span className="gradient-text">SPECTRA</span>
            </Link> */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link key={l.href} href={l.href} className="relative px-3 py-2 rounded-xl hover:bg-white/5 transition">
                    <span className={clsx("text-sm", active && "gradient-text font-semibold")}>{l.label}</span>
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-white/50 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a className="text-sm link-underline" href="mailto:diego.z.f99@gmail.com">Contacto</a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
