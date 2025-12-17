const API_URL = "http://localhost:8081/api";

//datos de respaldo (antes eran los datos de la pagina web normal)
const datosRespaldo = [
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


// LEER (GET)
export const obtenerProductos = async () => {
  try {
    const response = await fetch(`${API_URL}/productos`);
    
    if (!response.ok) throw new Error("Error conectando a Java"); 
    
    const datos = await response.json();
    
    if (datos.length === 0) { 
        console.warn("Datos respaldo"); //si el bd no tiene datos, mandamos aviso a la consola
        return datosRespaldo; 
    }

    return datos;
  } catch (error) { // si hay un error, uso los datos de respaldo
    console.error("Datos bd no disponibles", error);
    return datosRespaldo; 
  }
};

// post (producto)
export const crearProducto = async (nuevoProducto) => {
  try {
    const response = await fetch(`${API_URL}/productos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoProducto)
    });
    
    if (response.ok) {
        return await response.json();
    }
    return null;
  } catch (error) {
    console.error("Error al crear:", error);
    alert("No se pudo guardar en el servidor (Revisa la consola)");
    return null;
  }
};

// delete
export const eliminarProducto = async (id) => {
  try {
    await fetch(`${API_URL}/productos/${id}`, {
      method: "DELETE"
    });
  } catch (error) {
    console.error("Error al eliminar:", error);
  }
};


// Registro
export const registrarUsuario = async (usuario) => {
  try {
    const response = await fetch(`${API_URL}/usuarios/registro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.error("Fallo el registro");
      return null;
    }
  } catch (error) {
    console.error("Error de red en registro:", error);
    return null;
  }
};

// Inicio de sesion 
export const loginUsuario = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/usuarios/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const usuarioEncontrado = await response.json();
      // usuario valido
      if (usuarioEncontrado && usuarioEncontrado.id) {
          return usuarioEncontrado;
      }
    }
    return null;
  } catch (error) {
    console.error("Error de red en login:", error);
    return null;
  }
};