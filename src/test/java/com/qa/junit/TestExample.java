package com.qa.junit;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

import com.qa.model.User;

public class TestExample {

	User user;
	
	@Before
	public void setup() {
		user = new User();
	}
	
	@Test
	public void testingFirstName() {
		user.setFirstName("H");
		
		assertEquals("H", user.getFirstName());
		
	}
	
	@Test
	public void testingLastName() {
		user.setLastName("H");
		assertEquals("H", user.getLastName());
	}
}
