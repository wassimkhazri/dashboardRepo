package com.dailywork.hotelReservation.service;

import com.dailywork.hotelReservation.model.User;

import java.util.List;

public interface IUserService {
	User registerUser(User user);

	List<User> getUsers();

	void deleteUser(String email);

	User getUser(String email);
}
