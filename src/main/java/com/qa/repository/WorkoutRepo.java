package com.qa.repository;

import java.util.Set;

import com.qa.model.User;
import com.qa.model.Workout;

public interface WorkoutRepo {
	
	public User addWorkout(Workout w, int id);
	
	public Workout findWorkout(int id);
	
	public Set<Workout> findWorkoutByUser(int id);
}
