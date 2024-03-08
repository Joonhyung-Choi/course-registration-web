package com.example.mayoSpringboot.error;

import lombok.Builder;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ErrorEntity {
    private String errorCode;

    private String errorMessage;

    @Builder
    public ErrorEntity(HttpStatus httpStatus, String errorCode, String errorMessage){
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}
