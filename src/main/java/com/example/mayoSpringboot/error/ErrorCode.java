package com.example.mayoSpringboot.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
//@AllArgsConstructor
public enum ErrorCode {
//    INVALID_USER(HttpStatus.BAD_REQUSET, 400,"아이디 또는 비밀번호가 일치하지 않습니다.");
    Runtime_Exception(HttpStatus.BAD_REQUEST,"E0000","400 Bad_Request.. 잘못된 요청방식입니다."),
    ACCESS_DENIED_EXCEPTION(HttpStatus.UNAUTHORIZED,"E0001","401 UnAuthorized.. 로그인하세요."),
    FORBIDDEN_EXCEPTION(HttpStatus.FORBIDDEN,"E0002","403 Forbidden..인가되지 않은 사용자 입니다."),
    NOT_FOUND_EXCEPTION(HttpStatus.NOT_FOUND,"E0003","404 Not Found..잘못된 url입니다."),
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR,"E0005","500 Error.. 예기치 못한 오류입니다.");
    private HttpStatus status;

    private String code;

    private String message;

    ErrorCode(HttpStatus status, String code, String message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
