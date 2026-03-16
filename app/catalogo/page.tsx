import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { autos } from "../data/autos";

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden mt-24">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&h=500&fit=crop"
          alt="Catálogo de autos"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Degradé de derecha a izquierda */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c] via-[#0d1f3c]/80 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#6b9fd4]" />
              <span className="text-[#6b9fd4] text-xs font-bold uppercase tracking-widest">Todos los vehículos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              Catálogo de <span className="text-[#6b9fd4]">Autos</span>
            </h1>
            <p className="text-gray-300 mt-3 max-w-md text-sm">
              Vehículos casi nuevos verificados y con garantía.
            </p>
          </div>
        </div>
      </section>

      <div className="h-[3px] bg-[#1A3A8A]" />

      {/* Listado */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {autos.map((auto) => (
              <div key={auto.id} className={`border transition-all duration-200 group bg-[#111] ${auto.disponible ? "border-gray-800 hover:border-[#1A3A8A]" : "border-gray-900 opacity-60"}`}>
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={auto.imagen}
                    alt={`${auto.marca} ${auto.modelo}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-[#1A3A8A] text-white text-xs font-black px-2 py-1">
                    {auto.año}
                  </div>
                  {!auto.disponible && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-black text-sm uppercase tracking-widest border border-white px-3 py-1">Vendido</span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-black text-lg group-hover:text-[#1A3A8A] transition-colors">
                        {auto.marca} {auto.modelo}
                      </h3>
                      <p className="text-gray-500 text-sm">{auto.año} · {auto.km}</p>
                    </div>
                    <div className="text-[#1A3A8A] font-black text-xl">{auto.precio}</div>
                  </div>

                  {/* Detalles */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      ["Color", auto.color],
                      ["Transmisión", auto.transmision],
                      ["Combustible", auto.combustible],
                    ].map(([label, val]) => (
                      <div key={label} className="text-xs">
                        <span className="text-gray-600 uppercase tracking-widest">{label}</span>
                        <div className="text-gray-300 font-semibold">{val}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-500 text-sm mb-4">{auto.descripcion}</p>

                  {auto.disponible && (
                    <a
                      href={`https://wa.me/593999427291?text=Hola,%20me%20interesa%20el%20${auto.marca}%20${auto.modelo}%20${auto.año}%20-%20${auto.precio}`}
                      target="_blank"
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1A3A8A] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#1532871] transition-all"
                    >
                      Consultar por WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
