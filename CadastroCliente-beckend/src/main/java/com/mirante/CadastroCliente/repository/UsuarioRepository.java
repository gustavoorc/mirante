package com.mirante.CadastroCliente.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mirante.CadastroCliente.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
