import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a0a0a] text-gray-500">
      <div className="h-[3px] bg-[#1E40AF]" />

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#1E40AF] flex items-center justify-center">
              <span className="text-black font-black text-xs">FC</span>
            </div>
            <div>
              <div className="text-white font-black text-sm">Federico Cedeño</div>
              <div className="text-[#1E40AF] text-xs font-bold uppercase tracking-widest">Vehículos</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Venta de vehículos casi nuevos en Guayaquil, Ecuador. Calidad y confianza garantizada.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-px bg-[#1E40AF] inline-block" /> Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Inicio", "/"],
              ["Catálogo", "/catalogo"],
              ["Nosotros", "/nosotros"],
              ["Contacto", "/contacto"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#1E40AF] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-[#1E40AF] transition-all duration-200 inline-block" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-px bg-[#1E40AF] inline-block" /> Contacto
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://wa.me/593999427291" target="_blank" className="hover:text-[#1E40AF] transition-colors flex items-center gap-2">
                <span className="text-[#1E40AF]">WA</span> 0999427291
              </a>
            </li>
            <li>
              <a href="tel:042938828" className="hover:text-[#1E40AF] transition-colors">
                042938828
              </a>
            </li>
            <li>
              <a href="mailto:gerencia@federicocedeno.com" className="hover:text-[#1E40AF] transition-colors">
                gerencia@federicocedeno.com
              </a>
            </li>
            <li className="border-t border-gray-800 pt-3 mt-1 text-gray-600">
              Av. Raúl Gómez Lince (Av. de las Aguas)<br />
              100m del Primax · Guayaquil, Ecuador
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-700">
        &copy; {year} Federico Cedeño Vehículos &mdash; Todos los derechos reservados
      </div>
    </footer>
  );
}
