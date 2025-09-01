import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Portafolio — Tu Nombre",
  description: "Un portafolio moderno con animaciones, dark mode y diseño espectacular.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Portafolio — Tu Nombre",
    description: "Un portafolio moderno con animaciones, dark mode y diseño espectacular.",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Portafolio — Tu Nombre", description: "Un portafolio moderno" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="container-3xl">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
