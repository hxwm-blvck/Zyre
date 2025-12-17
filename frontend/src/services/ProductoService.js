
import api from './AxiosConfig'; 

class ProductoService {
    

    getAllProductos() {
        
        return api.get('/productos'); 
    }

    
    createProducto(producto) {
        return api.post('/productos', producto);
    }
}

export default new ProductoService();