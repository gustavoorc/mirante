package com.mirante.CadastroCliente.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mirante.CadastroCliente.model.Cliente;
import com.mirante.CadastroCliente.service.ClienteService;

@RestController
@RequestMapping("/clientes")
public class ClienteResource {
	
	@Autowired
	private ClienteService clienteService;
	
	@GetMapping
	public ResponseEntity<?> listar(){
		List<Cliente> clientes = clienteService.listar();
		
		if(!clientes.isEmpty()) {
			return ResponseEntity.ok(clientes);
		}else {
			return ResponseEntity.noContent().build();
		}
				
	}
	
	@PostMapping
	public ResponseEntity<Cliente> salvar(@RequestBody Cliente cliente ){
		Cliente salvaCliente = clienteService.salvar(cliente);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(salvaCliente);
	}
	
	@DeleteMapping
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletar (@PathVariable Long idCliente) {
		clienteService.deletar(idCliente);
	}
	
	@PutMapping("/idCliente")
	public ResponseEntity<Cliente> atualizar(@PathVariable Long idCliente, @RequestBody Cliente cliente){
		Cliente atualizaCliente = clienteService.atualizar(idCliente, cliente);
		
		return ResponseEntity.ok(atualizaCliente);
	}

}
