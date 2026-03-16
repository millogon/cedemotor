"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}>
      {/* Top bar */}
      <div className="bg-[#0a0a0a] text-gray-400 text-xs px-4 py-2 border-b border-[#1E40AF]/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF] inline-block" />
              0999427291
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF] inline-block" />
              gerencia@federicocedeno.com
            </span>
          </div>
          <span className="text-gray-500">Av. Raúl Gómez Lince, Guayaquil</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-[#111] border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center py-4 gap-3">
            <div className="w-8 h-8 bg-[#1E40AF] flex items-center justify-center">
              <span className="text-black font-black text-xs">FC</span>
            </div>
            <div>
              <div className="text-white font-black text-sm leading-tight">Federico Cedeño</div>
              <div className="text-[#1E40AF] text-xs font-bold uppercase tracking-widest">Vehículos</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center h-full">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center h-full px-5 py-5 text-sm font-semibold transition-all duration-200 group
                    ${active ? "text-[#1E40AF]" : "text-gray-400 hover:text-[#1E40AF]"}`}
                >
                  <span>{link.label}</span>
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#1E40AF] transition-all duration-200
                    ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
            <Link
              href="https://wa.me/593999427291"
              target="_blank"
              className="ml-4 px-5 py-2.5 bg-[#1E40AF] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#1532871] transition-colors"
            >
              WhatsApp
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none p-2"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-800 bg-[#111]">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-6 py-4 text-sm font-semibold border-b border-gray-800 transition-colors
                    ${active ? "text-[#1E40AF] border-l-4 border-l-[#1E40AF]" : "text-gray-400 hover:text-[#1E40AF]"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://wa.me/593999427291"
              target="_blank"
              className="flex items-center gap-3 px-6 py-4 text-sm font-bold text-[#1E40AF] border-b border-gray-800"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
