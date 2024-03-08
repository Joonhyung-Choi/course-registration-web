package com.example.mayoSpringboot.error.exception;

import com.example.mayoSpringboot.error.ErrorCode;

public class NotFoundException extends BusinessException{
    public NotFoundException(ErrorCode errorCode, String message) {
        super(errorCode, message);
    }
}
