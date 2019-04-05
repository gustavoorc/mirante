package com.mirante.CadastroCliente.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "telefone")
public class Telefone {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long idTelefone;

@NotNull
private String numero;

@NotNull
private String tipoTelefone;

public Long getIdTelefone() {
	return idTelefone;
}

public void setIdTelefone(Long idTelefone) {
	this.idTelefone = idTelefone;
}

public String getNumero() {
	return numero;
}

public void setNumero(String numero) {
	this.numero = numero;
}

public String getTipoTelefone() {
	return tipoTelefone;
}

public void setTipoTelefone(String tipoTelefone) {
	this.tipoTelefone = tipoTelefone;
}
}
