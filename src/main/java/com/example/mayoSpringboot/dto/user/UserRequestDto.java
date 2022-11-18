package com.example.mayoSpringboot.dto.user;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import lombok.*;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDto {
    private String userId;
    private String userPw;
    private String userName;
    private UserRole userRole;
    private int userScore;
    private int userPrevScore;

    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .userId(userId)
                .userPw(userPw)
                .userName(userName)
                .userRole(userRole)
                .userScore(userScore)
                .userPrevScore(userPrevScore)
                .build();
        return userEntity;
    }
}
