package com.example.mayoSpringboot.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
//@AllArgsConstructor
public enum ErrorCode {
    Runtime_Exception(HttpStatus.BAD_REQUEST,"E0000","잘못된 요청방식입니다."),
    ACCESS_DENIED_EXCEPTION(HttpStatus.UNAUTHORIZED,"E0001","로그인하세요."),
    DUPLICATE_USER(HttpStatus.UNAUTHORIZED,"E0002","이미 사용되고 있는 ID입니다."),
    FORBIDDEN_EXCEPTION(HttpStatus.FORBIDDEN,"E0003","인가되지 않은 사용자 입니다."),
    IN_EXCEEDED_COUNT(HttpStatus.FORBIDDEN,"E00031","초과된 신청입니다."),
    NOT_FOUND_EXCEPTION(HttpStatus.NOT_FOUND,"E0004","잘못된 주소입니다."),
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR,"E0005","예기치 못한 오류입니다.");
    private HttpStatus status;

    private String code;

    private String message;

    ErrorCode(HttpStatus status, String code, String message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
