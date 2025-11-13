const datosIniciales = [
  {
    id: 1,
    nombre: "Hamburguesa Clásica",
    descripcion: "Carne 100% vacuno.",
    precio: 5990,
    categoria: "hamburguesas",
    imagen: "/images/hambur.jpg" 
  },
  {
    id: 2,
    nombre: "Hamburguesa Queso",
    descripcion: "Doble queso cheddar y tocino crujiente.",
    precio: 7990,
    categoria: "hamburguesas",
    imagen: "/images/hpremium.jpg"
  },
  {
    id: 3,
    nombre: "Hamburguesa al Plato",
    descripcion: "Hamburguesa al plato con lechuga.",
    precio: 9990,
    categoria: "hamburguesas",
    imagen: "/images/alplato.webp"
  },
  {
    id: 4,
    nombre: "Helado de Chocolate",
    descripcion: "Exquisito helado de chocolate 85% cacao.",
    precio: 2500,
    categoria: "postres",
    imagen: "/images/helado1.png"
  },
  {
    id: 5,
    nombre: "Helado de Frutilla",
    descripcion: "Artesanal con trozos de fruta natural.",
    precio: 3500,
    categoria: "postres",
    imagen: "/images/heladofrutilla.png"
  },
  {
    id: 6,
    nombre: "Helado de Vainilla",
    descripcion: "Delicioso helado de vainilla con ralladura de oreo.",
    precio: 3200,
    categoria: "postres",
    imagen: "/images/heladovai.png"
  },
  {
    id: 7,
    nombre: "Hamburguesa de Pollo de la Casa",
    descripcion: "Hamburguesa de pollo al estilo Zyre!.",
    precio: 9990,
    categoria: "hamburguesasP",
    imagen: "/images/hpollocasera.webp"
  },
  {
    id: 8,
    nombre: "Hamburguesa Pollo Krispy",
    descripcion: "Hamburguesa con todo el flow Americano.",
    precio: 9990,
    categoria: "hamburguesasP",
    imagen: "/images/hpollocrispy.jpg"
  },
  {
    id: 9,
    nombre: "Hamburguesa Pollo Pobre",
    descripcion: "Hamburguesa de pollo al estilo a lo pobre.",
    precio: 9990,
    categoria: "hamburguesasP",
    imagen: "/images/hpollohuevo.webp"
  },
];


const guardarCambios = (productos) => {
  localStorage.setItem('mis_productos', JSON.stringify(productos));
};

export const obtenerProductos = () => {
  const guardados = localStorage.getItem('mis_productos');
  if (!guardados) {
    guardarCambios(datosIniciales);
    return datosIniciales;
  }
  return JSON.parse(guardados);
};

export const crearProducto = (nuevoProducto) => {
  const productos = obtenerProductos();
  const productoConId = { ...nuevoProducto, id: Date.now() };
  productos.push(productoConId);
  guardarCambios(productos);
  return productoConId;
};

export const eliminarProducto = (id) => {
  const productos = obtenerProductos();
  const filtrados = productos.filter(p => p.id !== id);
  guardarCambios(filtrados);
};