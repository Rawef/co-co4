package com.example.testeditions.Exception;

public class UsernameAlreadyUsedException extends Exception{

    private static final long serialVersionUID = -2640349678938102139L;

    public UsernameAlreadyUsedException(String message) {
        super(message);
    }


}
