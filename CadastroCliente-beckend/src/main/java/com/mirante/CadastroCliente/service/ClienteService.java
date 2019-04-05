package com.mirante.CadastroCliente.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.mirante.CadastroCliente.model.Cliente;
import com.mirante.CadastroCliente.repository.ClienteRepository;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository clienteRepository;

	public List<Cliente> listar() {
		return clienteRepository.findAll();
	}

	public Cliente salvar(Cliente cliente) {
		Cliente  salvaCliente = clienteRepository.save(cliente);
		return salvaCliente;
	}

	public void deletar(Long idCliente) {
		clienteRepository.deleteById(idCliente);
		
	}

	public Cliente atualizar(Long idCliente, Cliente cliente) {
		Cliente alteraCliente = buscarPorId(idCliente);
		BeanUtils.copyProperties(cliente, alteraCliente, "idCliente");
		return clienteRepository.save(alteraCliente);
	}

	private Cliente buscarPorId(Long idCliente) {
		Cliente cliente = buscarPorId(idCliente);
		if(cliente == null) 
			throw new EmptyResultDataAccessException(1);
		
		return cliente;
	}

}
