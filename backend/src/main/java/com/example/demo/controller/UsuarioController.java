package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Usuario> login(@RequestBody Usuario usuarioLogin) {
    Usuario usuario = usuarioRepository.findByEmail(usuarioLogin.getEmail()).orElse(null);
    
    
    if (usuario != null && usuario.getPassword().equals(usuarioLogin.getPassword())) {
        return ResponseEntity.ok(usuario);
    }
    
    return ResponseEntity.status(401).build();
}
}