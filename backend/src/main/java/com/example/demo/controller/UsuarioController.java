package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/registro")
    public Usuario registrar(@RequestBody Usuario nuevoUsuario) {
        if ("admin@gmail.com".equals(nuevoUsuario.getEmail())) {
            nuevoUsuario.setRol("admin");
        }
        else if (nuevoUsuario.getRol() == null) { 
            nuevoUsuario.setRol("cliente");
        }
        return usuarioRepository.save(nuevoUsuario);
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario loginData) {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(loginData.getEmail());

        if (usuario.isPresent() && usuario.get().getPassword().equals(loginData.getPassword())) {
            return usuario.get();
        }
        
        return null;
    }
}