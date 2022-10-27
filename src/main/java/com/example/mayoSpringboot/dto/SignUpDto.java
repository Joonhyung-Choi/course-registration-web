package com.example.mayoSpringboot.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SignUpDto {
    private String userId;
    private String userName;
    private String userPw;
}
