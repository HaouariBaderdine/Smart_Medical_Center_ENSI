package com.smart.backend.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "advices")
public class Advice {

	@Id
	private String id;

	private String etat;
	private String type;
	private String description;
	private Date createdAt;
	private String demandeur;
	private String medecin;

	public Advice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Advice(String etat, String type, String description, Date createdAt, String demandeur, String medecin) {
		super();
		this.etat = etat;
		this.type = type;
		this.description = description;
		this.createdAt = createdAt;
		this.demandeur = demandeur;
		this.medecin = medecin;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public String getDemandeur() {
		return demandeur;
	}

	public void setDemandeur(String demandeur) {
		this.demandeur = demandeur;
	}

	public String getMedecin() {
		return medecin;
	}

	public void setMedecin(String medecin) {
		this.medecin = medecin;
	}

	@Override
	public String toString() {
		return "Advice [id=" + id + ", etat=" + etat + ", type=" + type + ", description=" + description
				+ ", createdAt=" + createdAt + "]";
	}

}
