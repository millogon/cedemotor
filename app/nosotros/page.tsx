import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="bg-[#0f0f0f] pt-36 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-xs font-bold uppercase tracking-widest">Nuestra historia</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Quiénes <span className="text-[#D4A017]">Somos</span>
          </h1>
        </div>
      </section>

      <div className="h-px bg-[#D4A017]" />

      {/* Contenido */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                <strong className="text-white">Federico Cedeño Vehículos</strong> es una empresa guayaquileña con más de 10 años de experiencia en la compra y venta de vehículos casi nuevos.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Nacimos con la misión de ofrecer a las familias ecuatorianas la posibilidad de acceder a autos de calidad, con transparencia, buen precio y sin complicaciones.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Cada vehículo que ofrecemos pasa por una revisión técnica completa. Nos aseguramos de que lo que vendes sea exactamente lo que recibes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Años en el mercado" },
                { value: "500+", label: "Vehículos vendidos" },
                { value: "100%", label: "Clientes satisfechos" },
                { value: "0", label: "Sorpresas desagradables" },
              ].map((s) => (
                <div key={s.label} className="border border-gray-800 hover:border-[#D4A017] p-6 transition-colors group">
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-[#D4A017] transition-colors">{s.value}</div>
                  <div className="text-xs text-[#D4A017] font-bold uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-xs font-bold uppercase tracking-widest">Nuestros valores</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Honestidad", desc: "Te mostramos el historial real del vehículo, sin ocultar nada." },
              { title: "Calidad", desc: "Solo ofrecemos autos que nosotros mismos compraríamos." },
              { title: "Confianza", desc: "Más de 500 familias nos han elegido y eso nos compromete." },
            ].map((v) => (
              <div key={v.title} className="border border-gray-200 p-8 hover:border-t-4 hover:border-t-[#D4A017] hover:shadow-md transition-all">
                <div className="w-8 h-[3px] bg-[#D4A017] mb-4" />
                <h3 className="text-lg font-black text-[#111] mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
