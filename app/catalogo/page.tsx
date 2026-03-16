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
      <section className="bg-[#0f0f0f] pt-36 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#1E40AF]" />
            <span className="text-[#1E40AF] text-xs font-bold uppercase tracking-widest">Todos los vehículos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Catálogo de <span className="text-[#1E40AF]">Autos</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-lg">
            Encuentra tu vehículo ideal entre nuestra selección de autos casi nuevos. Todos verificados y con garantía.
          </p>
        </div>
      </section>

      <div className="h-px bg-[#1E40AF]" />

      {/* Listado */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {autos.map((auto) => (
              <div key={auto.id} className={`border transition-all duration-200 group bg-[#111] ${auto.disponible ? "border-gray-800 hover:border-[#1E40AF]" : "border-gray-900 opacity-60"}`}>
                {/* Imagen placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚗</div>
                    <div className="text-gray-500 text-sm">{auto.marca} {auto.modelo}</div>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#1E40AF] text-white text-xs font-black px-2 py-1">
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
                      <h3 className="text-white font-black text-lg group-hover:text-[#1E40AF] transition-colors">
                        {auto.marca} {auto.modelo}
                      </h3>
                      <p className="text-gray-500 text-sm">{auto.año} · {auto.km}</p>
                    </div>
                    <div className="text-[#1E40AF] font-black text-xl">{auto.precio}</div>
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
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1E40AF] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#1532871] transition-all"
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
