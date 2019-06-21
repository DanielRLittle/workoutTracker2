package com.qa.repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import com.qa.model.User;
import com.qa.model.Workout;

public class WorkoutRepoDB implements WorkoutRepo{
	
	EntityManager em;

	@Transactional(value = TxType.REQUIRED)
	public User addWorkout(Workout w, int id) {
		User user = em.find(User.class, id);
		user.getWorkouts().add(w);
		return user;
	}

}
