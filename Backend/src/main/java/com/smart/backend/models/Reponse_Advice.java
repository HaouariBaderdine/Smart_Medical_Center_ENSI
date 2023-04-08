package com.smart.backend.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reponses_advices")
public class Reponse_Advice {

	@Id
	private String id;

	private String description;
	private Date createdAt;
	private Boolean isLike;
	private String advice;

	public Reponse_Advice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Reponse_Advice(String description, Date createdAt, String advice) {
		super();
		this.description = description;
		this.createdAt = createdAt;
		this.advice = advice;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	public Boolean getIsLike() {
		return isLike;
	}

	public void setIsLike(Boolean isLike) {
		this.isLike = isLike;
	}

	public String getAdvice() {
		return advice;
	}

	public void setAdvice(String advice) {
		this.advice = advice;
	}

}
