package com.qa.repository;

import com.qa.model.User;
import com.qa.model.Workout;

public interface WorkoutRepo {
	
	public User addWorkout(Workout w, int id);
	
}
