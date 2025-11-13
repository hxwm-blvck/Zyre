// src/data/database.js

// 1. Datos Iniciales (Esto se cargará si es la primera vez que abres la página)
const datosIniciales = [
  {
    id: 1,
    nombre: "Hamburguesa Clásica",
    descripcion: "Carne 100% vacuno",
    precio: 5990,
    categoria: "hamburguesas",
    imagen: "/images/hambur.jpg" 
  },
  {
    id: 2,
    nombre: "Hamburguesa Queso",
    descripcion: "Doble queso cheddar y tocino crujiente",
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
    nombre: "Helado de Vainilla",
    descripcion: "Con salsa de chocolate",
    precio: 2500,
    categoria: "postres",
    imagen: "/images/helado1.png"
  },
  {
    id: 5,
    nombre: "Helado de frutilla",
    descripcion: "Artesanal con trozos de fruta natural.",
    precio: 3500,
    categoria: "postres",
    imagen: "/images/heladofrutilla.png"
  },
  {
    id: 6,
    nombre: "Helado de vainilla",
    descripcion: "Delicioso helado de vainilla",
    precio: 3200,
    categoria: "postres",
    imagen: "/images/heladovai.png"
  },
];

// 2. Función Auxiliar para guardar en LocalStorage (Persistencia)
const guardarCambios = (productos) => {
  localStorage.setItem('mis_productos', JSON.stringify(productos));
};

// 3. CRUD: READ (Leer productos) - ¡ESTA ES LA QUE TE FALTABA!
export const obtenerProductos = () => {
  const guardados = localStorage.getItem('mis_productos');
  if (!guardados) {
    // Si no hay nada guardado, iniciamos con los datos base
    guardarCambios(datosIniciales);
    return datosIniciales;
  }
  return JSON.parse(guardados);
};

// 4. CRUD: CREATE (Crear producto - Para el Admin)
export const crearProducto = (nuevoProducto) => {
  const productos = obtenerProductos();
  // Agregamos ID único basado en la fecha actual
  const productoConId = { ...nuevoProducto, id: Date.now() };
  productos.push(productoConId);
  guardarCambios(productos);
  return productoConId;
};

// 5. CRUD: DELETE (Eliminar producto - Para el Admin)
export const eliminarProducto = (id) => {
  const productos = obtenerProductos();
  const filtrados = productos.filter(p => p.id !== id);
  guardarCambios(filtrados);
};