package com.example.demo.controller;

import com.example.demo.model.Producto;
import com.example.demo.service.ProductoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/productos") //  localhost:8081/api/productos
@CrossOrigin(origins = "*")       // Conexcion con el front end (react)
@Api(value = "Sistema de Productos Zyre")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    @ApiOperation(value = "Listar todos los productos")
    public List<Producto> getAllProductos() {
        return productoService.getAllProductos();
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "Obtener producto por ID")
    public Producto getProductoById(@PathVariable Long id) {
        return productoService.getProductoById(id);
    }

    @PostMapping
    @ApiOperation(value = "Crear nuevo producto")
    public Producto createProducto(@RequestBody Producto producto) {
        return productoService.saveProducto(producto);
    }

    @PutMapping("/{id}")
    @ApiOperation(value = "Actualizar producto")
    public Producto updateProducto(@PathVariable Long id, @RequestBody Producto producto) {
        Producto existente = productoService.getProductoById(id);
        if (existente != null) {
            existente.setNombre(producto.getNombre());
            existente.setPrecio(producto.getPrecio());
            existente.setDescripcion(producto.getDescripcion());
            existente.setCategoria(producto.getCategoria());
            existente.setImagen(producto.getImagen());
            return productoService.saveProducto(existente);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "Eliminar producto")
    public void deleteProducto(@PathVariable Long id) {
        productoService.deleteProducto(id);
    }
}