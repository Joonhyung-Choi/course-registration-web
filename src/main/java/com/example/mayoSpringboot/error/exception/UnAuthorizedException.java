package com.example.mayoSpringboot.error.exception;

import com.example.mayoSpringboot.error.ErrorCode;

public class UnAuthorizedException extends BusinessException{
    public UnAuthorizedException(ErrorCode errorCode, String message) {
        super(errorCode, message);
    }
}
