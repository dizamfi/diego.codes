"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export default function DemoModal({ isOpen, onClose, videoUrl, title }: DemoModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-transparent rounded-3xl p-6 max-w-[920px] w-full"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <button
              className="absolute -top-3 -right-3 bg-white/6 rounded-full p-2 hover:bg-white/12 transition z-50"
              onClick={onClose}
              aria-label="Cerrar demo"
            >
              <X size={20} />
            </button>

            <div className="bg-black/80 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
              {/* Mockup teléfono con video */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-[280px] h-[600px] rounded-[36px] overflow-hidden border-4 border-white/5 shadow-2xl">
                  <video
                    src={videoUrl}
                    className="w-full h-full object-cover bg-black"
                    autoPlay
                    loop
                    muted
                    controls
                  />
                </div>
              </div>

              {/* Info lateral */}
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-white/80 mb-4">
                  Demo dentro de un mockup de celular. Usa los controles del video para pausar, ver fullscreen o bajar el volumen.
                </p>
                <div className="flex gap-3">
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-white/8 rounded-lg hover:bg-white/12 transition"
                  >
                    Abrir video en nueva pestaña
                  </a>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-emerald-500 rounded-lg hover:bg-emerald-600 transition text-black font-medium"
                  >
                    Cerrar demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}