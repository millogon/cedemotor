import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Federico Cedeño Vehículos – Autos casi nuevos en Guayaquil",
  description: "Venta de vehículos casi nuevos en Guayaquil, Ecuador. Encuentra tu auto ideal con Federico Cedeño Vehículos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
