package com.mirante.CadastroCliente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mirante.CadastroCliente.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
	
	@Query("SELECT c FROM Cliente c WHERE c.id = :id")
	Cliente buscaPorId(@Param("id") Long id);

	
}
