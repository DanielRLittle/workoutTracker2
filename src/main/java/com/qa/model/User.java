package com.qa.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class User {
	
	@Id
	@GeneratedValue
	private int id;
	private String firstName;
	private String lastName;
	private String userName;
	
	@OneToMany
	@JoinColumn(name = "User_id")
	private List<Workout> workouts;
	
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
	public List<Workout> getWorkouts() {
		return workouts;
	}
	public void setWorkouts(List<Workout> workouts) {
		this.workouts = workouts;
	}
	
	
}


