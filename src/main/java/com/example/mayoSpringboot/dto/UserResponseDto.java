package com.example.mayoSpringboot.DTO;

import com.example.mayoSpringboot.Entity.UserEntity;
import lombok.Getter;

@Getter
public class UserResponseDto {
    private String userName;
    private String userId;
    private String userPw;

    public UserResponseDto(UserEntity userEntity){
        this.userName =userEntity.getUserName();
        this.userId = userEntity.getUserId();
        this.userPw = userEntity.getUserPw();
    }
}
