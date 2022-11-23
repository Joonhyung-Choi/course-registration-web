package com.example.mayoSpringboot.error;

import com.example.mayoSpringboot.error.exception.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestControllerAdvice
public class ErrorExceptionControllerAdvice {
    @ExceptionHandler({BadRequestException.class})//400
    public ResponseEntity<ErrorEntity> exceptionHandler(HttpServletRequest request, final BadRequestException e){
        return ResponseEntity
                .status(e.getErrorCode().getStatus())
                .body(ErrorEntity.builder()
                        .errorCode(e.getErrorCode().getCode())
                        .errorMessage(e.getErrorCode().getMessage())
                        .build());
    }
    @ExceptionHandler({UnAuthorizedException.class})//401
    public ResponseEntity<ErrorEntity> exceptionHandler(HttpServletRequest request, final UnAuthorizedException e){
        return ResponseEntity
                .status(e.getErrorCode().getStatus())
                .body(ErrorEntity.builder()
                        .errorCode(e.getErrorCode().getCode())
                        .errorMessage(e.getErrorCode().getMessage())
                        .build());
    }

    @ExceptionHandler({ForbiddenException.class})//403
    public ResponseEntity<ErrorEntity> exceptionHandler(HttpServletRequest request, final ForbiddenException e){
        return ResponseEntity
                .status(e.getErrorCode().getStatus())
                .body(ErrorEntity.builder()
                        .errorCode(e.getErrorCode().getCode())
                        .errorMessage(e.getErrorCode().getMessage())
                        .build());
    }

    @ExceptionHandler({InternerServerException.class})//500
    public ResponseEntity<ErrorEntity> exceptionHandler(HttpServletRequest request, final InternerServerException e) {
        return ResponseEntity
                .status(e.getErrorCode().getStatus())
                .body(ErrorEntity.builder()
                        .errorCode(e.getErrorCode().getCode())
                        .errorMessage(e.getErrorCode().getMessage())
                        .build());
    }

    @ExceptionHandler({NotFoundException.class}) //404
    public ResponseEntity<ErrorEntity> exceptionHandler(HttpServletRequest request, final NotFoundException e){
        return ResponseEntity
                .status(e.getErrorCode().getStatus())
                .body(ErrorEntity.builder()
                        .errorCode(e.getErrorCode().getCode())
                        .errorMessage(e.getErrorCode().getMessage())
                        .build());
    }

}
