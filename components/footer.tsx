export default function Footer() {
  return (
    <footer className="mt-24 pb-10">
      <div className="container-3xl text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Diego Z. Todos los derechos reservados.</p>
        <p>
          Hecho con <span className="gradient-text">Next.js</span> & Tailwind.
        </p>
      </div>
    </footer>
  );
}
