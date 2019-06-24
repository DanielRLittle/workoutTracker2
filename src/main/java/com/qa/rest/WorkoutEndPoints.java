package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.qa.model.User;
import com.qa.model.Workout;
import com.qa.repository.UserRepo;
import com.qa.repository.WorkoutRepo;

@Path("/")
public class WorkoutEndPoints {

	@Inject
	WorkoutRepo wr;
	
	@Inject
	UserRepo ur;
	
	@PUT
	@Consumes({"application/json"})
	@Produces(MediaType.TEXT_PLAIN)
	@Path("/workout/{user_id}")
	public Response addingWorkout(Workout workout, @PathParam("user_id") int id) {
		if (ur.readUser(id).equals(null)) {
			return Response.status(Status.NOT_FOUND).build();
		}
		User user = wr.addWorkout(workout, id);
		return Response.ok(user).build();
	}
}
