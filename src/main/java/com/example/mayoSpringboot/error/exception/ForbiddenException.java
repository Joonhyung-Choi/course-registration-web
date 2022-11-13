package com.example.mayoSpringboot.error.exception;

import com.example.mayoSpringboot.error.ErrorCode;
import lombok.Builder;

public class ForbiddenException extends BusinessException {
    public ForbiddenException(ErrorCode errorCode, String message) {
        super(errorCode, message);
    }
} // 나랑 코드 다르게짰낭 나잠만 아빠전화
