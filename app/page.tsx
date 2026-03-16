import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { autos } from "./data/autos";


export default function Home() {
  const autosDisponibles = autos.filter((a) => a.disponible).slice(0, 3);

  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-[#0f0f0f] pt-[90px]">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#1A3A8A 1px, transparent 1px), linear-gradient(90deg, #1A3A8A 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#1A3A8A] to-transparent" />

        <div className="relative max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#1A3A8A]" />
              <span className="text-[#1A3A8A] text-xs font-bold uppercase tracking-widest">Guayaquil, Ecuador</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Tu próximo auto<br />
              <span className="text-gray-400 font-light">te está esperando</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Vehículos <strong className="text-gray-200">casi nuevos</strong> con garantía de calidad.
              Más de 10 años conectando personas con su auto ideal en Guayaquil.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catalogo"
                className="px-8 py-3.5 bg-[#1A3A8A] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#1532871] transition-colors"
              >
                Ver Catálogo
              </Link>
              <a
                href="https://wa.me/593999427291?text=Hola,%20me%20interesa%20un%20vehículo"
                target="_blank"
                className="px-8 py-3.5 border border-[#1A3A8A] text-[#1A3A8A] font-bold text-sm uppercase tracking-widest hover:bg-[#1A3A8A]/10 transition-colors"
              >
                Consultar ahora
              </a>
            </div>
          </div>

          {/* Foto Federico */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-96 overflow-hidden shadow-2xl ring-4 ring-[#1A3A8A]/40">
              <Image
                src="/federico.jpeg"
                alt="Federico Cedeño"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-black text-lg">Federico Cedeño</div>
                <div className="text-[#6b9fd4] text-xs font-bold uppercase tracking-widest">Propietario · Guayaquil</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#1A3A8A] to-transparent" />

      {/* AUTOS DESTACADOS */}
      <section className="py-24 bg-[#0f0f0f] relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-[#1A3A8A]" />
                <span className="text-[#1A3A8A] text-xs font-bold uppercase tracking-widest">Disponibles ahora</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Autos<br /><span className="text-[#6b9fd4]">Destacados</span>
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#1A3A8A] uppercase tracking-widest transition-colors shrink-0 border-b border-gray-700 hover:border-[#1A3A8A] pb-1"
            >
              Ver catálogo completo <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {autosDisponibles.map((auto) => (
              <div key={auto.id} className="border border-gray-800 hover:border-[#1A3A8A] transition-all duration-200 group bg-[#111]">
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
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-black text-lg group-hover:text-[#1A3A8A] transition-colors">
                        {auto.marca} {auto.modelo}
                      </h3>
                      <p className="text-gray-500 text-sm">{auto.km} · {auto.transmision}</p>
                    </div>
                    <div className="text-[#1A3A8A] font-black text-xl">{auto.precio}</div>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{auto.descripcion}</p>
                  <a
                    href={`https://wa.me/593999427291?text=Hola,%20me%20interesa%20el%20${auto.marca}%20${auto.modelo}%20${auto.año}`}
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#1A3A8A] text-[#1A3A8A] text-sm font-bold uppercase tracking-widest hover:bg-[#1A3A8A] hover:text-black transition-all"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[3px] bg-[#1A3A8A]" />

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-[#1A3A8A]" />
            <span className="text-[#1A3A8A] text-xs font-bold uppercase tracking-widest">¿Por qué elegirnos?</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Autos Verificados", desc: "Cada vehículo pasa por una revisión completa antes de ser publicado.", icon: "✓" },
              { title: "Financiamiento", desc: "Te ayudamos a gestionar el crédito con los mejores bancos del país.", icon: "💳" },
              { title: "Atención personalizada", desc: "Te asesoramos en todo el proceso de compra, sin presiones.", icon: "🤝" },
            ].map((item) => (
              <div key={item.title} className="group border border-gray-200 p-8 hover:shadow-md hover:border-t-4 hover:border-t-[#1A3A8A] transition-all duration-200">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#111] mb-3 group-hover:text-[#1A3A8A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
