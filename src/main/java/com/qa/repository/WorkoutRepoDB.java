package com.qa.repository;

import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import com.qa.model.User;
import com.qa.model.Workout;

@Transactional(value = TxType.SUPPORTS)
public class WorkoutRepoDB implements WorkoutRepo{
	
	
	@PersistenceContext(unitName = "myPU")
	EntityManager em;

	@Transactional(value = TxType.REQUIRED)
	public User addWorkout(Workout w, int id) {
		User user = em.find(User.class, id);
		user.addWorkouts(w);
		return user;
	}

	public Workout findWorkout(int id) {
		Workout w = em.find(Workout.class, id);
		return w;
	}

	public Set<Workout> findWorkoutByUser(int id) {
		User user = em.find(User.class, id);
		Set<Workout> w = user.getWorkouts();
		return w;
	}
}
