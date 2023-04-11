package com.smart.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cabinets")
public class Cabinet {

	@Id
	private String id;

	private String address;
	private float open;
	private float close;
	private String description;
	private String medecin;

	public Cabinet() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cabinet(String address, float open, float close, String description, String medecin) {
		super();
		this.address = address;
		this.open = open;
		this.close = close;
		this.description = description;
		this.medecin = medecin;
	}

	@Override
	public String toString() {
		return "Cabinet [address=" + address + ", open=" + open + ", close=" + close + ", description=" + description
				+ "]";
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public float getOpen() {
		return open;
	}

	public void setOpen(float open) {
		this.open = open;
	}

	public float getClose() {
		return close;
	}

	public void setClose(float close) {
		this.close = close;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getMedecin() {
		return medecin;
	}

	public void setMedecin(String medecin) {
		this.medecin = medecin;
	}

}
