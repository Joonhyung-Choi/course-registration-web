package com.example.mayoSpringboot.dto;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import lombok.*;

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDto {
    private String userId;
    private String userPw;
    private String userName;

    private UserRole userRole;

    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .userId(userId)
                .userPw(userPw)
                .userName(userName)
                .userRole(userRole)
                .build();
        return userEntity;
    }
}
