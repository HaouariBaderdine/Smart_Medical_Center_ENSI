package com.smart.backend.payload.response;

import java.util.List;

public class UserInfoResponse {
	private String id;
	private String username;
	private String email;
	private String name;
	private String gender;
	private String address;
	private int age;
	private int experience;
	private String specialite;
	private List<String> roles;

	public UserInfoResponse(String id, String username, String email, List<String> roles) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.roles = roles;
	}

	// for medecin user
	public UserInfoResponse(String id, String username, String email, String name, String gender, String address,
			int age, int experience, String specialite, List<String> roles) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.address = address;
		this.experience = experience;
		this.specialite = specialite;
		this.roles = roles;
	}

	// for client user
	public UserInfoResponse(String id, String username, String email, String name, String gender, String address,
			int age, List<String> roles) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.name = name;
		this.address = address;
		this.gender = gender;
		this.age = age;
		this.roles = roles;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getSpecialite() {
		return specialite;
	}

	public void setSpecialite(String specialite) {
		this.specialite = specialite;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<String> getRoles() {
		return roles;
	}
}
