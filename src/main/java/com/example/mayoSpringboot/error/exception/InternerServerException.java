package com.example.mayoSpringboot.error.exception;

import com.example.mayoSpringboot.error.ErrorCode;

public class InternerServerException extends BusinessException{
    public InternerServerException(ErrorCode errorCode, String message) {
        super(errorCode, message);
    }
}
