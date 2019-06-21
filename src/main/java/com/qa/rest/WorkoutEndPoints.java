package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.qa.model.User;
import com.qa.model.Workout;
import com.qa.repository.WorkoutRepo;

@Path("/")
public class WorkoutEndPoints {

	@Inject
	WorkoutRepo wr;
	
	@POST
	@Consumes({"application/json"})
	@Produces(MediaType.TEXT_PLAIN)
	@Path("/workout/{user_id}")
	public User addingWorkout(Workout workout, @PathParam("user_id") int id) {
		User user = wr.addWorkout(workout, id);
		return user;
	}
}
