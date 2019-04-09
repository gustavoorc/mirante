package com.mirante.CadastroCliente.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "cliente")

public class Cliente {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long idCliente;

@NotNull
@Size(min = 3, max = 100)
private String nome;

@NotNull
private String cpf;


@NotNull
@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name = "id_endereco")
private Endereco endereco;

@NotEmpty
@OneToMany(cascade = CascadeType.ALL)
@JoinColumn(name = "id_cliente")
private List<Telefone> telefone;

@NotEmpty
@OneToMany(cascade = CascadeType.ALL)
@JoinColumn(name = "id_cliente")
private List<Email> email;

public Long getIdCliente() {
	return idCliente;
}

public void setIdCliente(Long idCliente) {
	this.idCliente = idCliente;
}

public String getNome() {
	return nome;
}

public void setNome(String nome) {
	this.nome = nome;
}

public String getCpf() {
	return cpf;
}

public void setCpf(String cpf) {
	this.cpf = cpf;
}

public Endereco getEndereco() {
	return endereco;
}

public void setEndereco(Endereco endereco) {
	this.endereco = endereco;
}

public List<Telefone> getTelefones() {
	return telefone;
}

public void setTelefone(List<Telefone> telefones) {
	this.telefone = telefones;
}

public List<Email> getEmails() {
	return email;
}

public void setEmail(List<Email> emails) {
	this.email = emails;
}








}
