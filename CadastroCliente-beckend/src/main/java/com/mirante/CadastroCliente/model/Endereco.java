package com.mirante.CadastroCliente.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "endereco")
public class Endereco {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long idEndereco;

@NotNull
private String cep;

@NotNull
private String logradouro;

@NotNull
private String bairro;

@NotNull
private String cidade;

@NotNull
private String uf;


private String complemento;


public Long getIdEndereco() {
	return idEndereco;
}


public void setIdEndereco(Long idEndereco) {
	this.idEndereco = idEndereco;
}


public String getCep() {
	return cep;
}


public void setCep(String cep) {
	this.cep = cep;
}


public String getLogradouro() {
	return logradouro;
}


public void setLogradouro(String logradouro) {
	this.logradouro = logradouro;
}


public String getBairro() {
	return bairro;
}


public void setBairro(String bairro) {
	this.bairro = bairro;
}


public String getCidade() {
	return cidade;
}


public void setCidade(String cidade) {
	this.cidade = cidade;
}


public String getUf() {
	return uf;
}


public void setUf(String uf) {
	this.uf = uf;
}


public String getComplemento() {
	return complemento;
}


public void setComplemento(String complemento) {
	this.complemento = complemento;
}

	
}
