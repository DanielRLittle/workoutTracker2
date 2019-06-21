package com.qa.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class User {
	
	@Id
	@GeneratedValue
	int id;
	String firstName;
	String lastName;
	String userName;
	
	@OneToMany
	@JoinColumn(name = "User_id")
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName() {
		this.userName = this.firstName + this.lastName;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public void setAll(User newUser) {
		this.firstName = newUser.firstName;
		this.lastName = newUser.lastName;
		this.userName= newUser.firstName + newUser.lastName;
	}
}


