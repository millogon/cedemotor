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
  },
];
