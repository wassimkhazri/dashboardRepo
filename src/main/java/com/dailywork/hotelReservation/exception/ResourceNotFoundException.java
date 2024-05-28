package com.dailywork.hotelReservation.exception;

public class ResourceNotFoundException extends RuntimeException {
	public ResourceNotFoundException(String message) {
		super(message);
	}
}