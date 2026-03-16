export type Auto = {
  id: number;
  marca: string;
  modelo: string;
  año: number;
  km: string;
  precio: string;
  color: string;
  transmision: string;
  combustible: string;
  descripcion: string;
  disponible: boolean;
  imagen: string;
};

export const autos: Auto[] = [
  {
    id: 1,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    km: "18,000 km",
    precio: "$22,500",
    color: "Blanco Perla",
    transmision: "Automático",
    combustible: "Gasolina",
    descripcion: "Excelente estado, único dueño, mantenimientos al día.",
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    marca: "Hyundai",
    modelo: "Tucson",
    año: 2021,
    km: "25,000 km",
    precio: "$28,000",
    color: "Gris Titanio",
    transmision: "Automático",
    combustible: "Gasolina",
    descripcion: "SUV en perfecto estado, con todos los accesorios de fábrica.",
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    marca: "Kia",
    modelo: "Sportage",
    año: 2022,
    km: "15,000 km",
    precio: "$27,000",
    color: "Negro Brillante",
    transmision: "Automático",
    combustible: "Gasolina",
    descripcion: "Como nuevo, sin choques, papeles en regla.",
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    marca: "Chevrolet",
    modelo: "Sail",
    año: 2023,
    km: "8,000 km",
    precio: "$16,500",
    color: "Azul Marino",
    transmision: "Manual",
    combustible: "Gasolina",
    descripcion: "Casi nuevo, ideal para ciudad, bajo consumo.",
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    marca: "Nissan",
    modelo: "Sentra",
    año: 2021,
    km: "30,000 km",
    precio: "$19,000",
    color: "Plateado",
    transmision: "Automático",
    combustible: "Gasolina",
    descripcion: "Sedán cómodo y económico, excelente para familia.",
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    marca: "Mazda",
    modelo: "CX-5",
    año: 2022,
    km: "20,000 km",
    precio: "$32,000",
    color: "Rojo Soul",
    transmision: "Automático",
    combustible: "Gasolina",
    descripcion: "SUV premium, interior de lujo, sin detalles.",
    disponible: false,
    imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
  },
];
