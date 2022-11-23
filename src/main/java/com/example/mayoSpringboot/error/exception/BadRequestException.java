package com.example.mayoSpringboot.error.exception;

import com.example.mayoSpringboot.error.ErrorCode;

public class BadRequestException extends BusinessException{

    BadRequestException(String message, ErrorCode errorCode) {
        super(errorCode, message);
    }
}
