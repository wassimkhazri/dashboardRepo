package com.dailywork.hotelReservation.exception;

public class InvalidBookingRequestException extends RuntimeException {
	public InvalidBookingRequestException(String message) {
		super(message);
	}
}
