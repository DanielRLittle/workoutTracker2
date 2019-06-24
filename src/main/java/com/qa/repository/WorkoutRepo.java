package com.qa.repository;

import com.qa.model.User;
import com.qa.model.Workout;

public interface WorkoutRepo {
	
	public User addWorkout(Workout w, int id);
	
	public Workout findWorkout(int id);
}
