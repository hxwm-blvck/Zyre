package com.example.demo.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Compra {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String usuarioEmail;
    private String detalleCompra;
    private Double total;
    private LocalDateTime fecha;

 
    public Compra() {}


    public Compra(String usuarioEmail, String detalleCompra, Double total) {
        this.usuarioEmail = usuarioEmail;
        this.detalleCompra = detalleCompra;
        this.total = total;
        this.fecha = LocalDateTime.now();
    }


    public Long getId() { return id; }
    public String getUsuarioEmail() { return usuarioEmail; }
    public void setUsuarioEmail(String usuarioEmail) { this.usuarioEmail = usuarioEmail; }
    public String getDetalleCompra() { return detalleCompra; }
    public void setDetalleCompra(String detalleCompra) { this.detalleCompra = detalleCompra; }
    public Double getTotal() { return total; }
    public void setTotal(Double total) { this.total = total; }
    public LocalDateTime getFecha() { return fecha; }
}

