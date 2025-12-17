package com.example.demo.controller;

import com.example.demo.model.Compra;
import com.example.demo.repository.CompraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/compras")
@CrossOrigin(origins = "*")
public class CompraController {

    @Autowired
    private CompraRepository compraRepository;

    @PostMapping
    public Compra crearCompra(@RequestBody Compra compra) {
        return compraRepository.save(new Compra(compra.getUsuarioEmail(), compra.getDetalleCompra(), compra.getTotal()));
    }

    @GetMapping
    public List<Compra> listarTodas() {
        return compraRepository.findAll();
    }

    @GetMapping("/mis-compras")
    public List<Compra> misCompras(@RequestParam String email) {
        return compraRepository.findByUsuarioEmail(email);
    }
}
