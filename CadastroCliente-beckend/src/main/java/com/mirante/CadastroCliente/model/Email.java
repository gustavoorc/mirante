package com.mirante.CadastroCliente.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "email")
public class Email {

	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long idEmail;

@NotNull
private String email;

public Long getIdEmail() {
	return idEmail;
}

public void setIdEmail(Long idEmail) {
	this.idEmail = idEmail;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}


}
