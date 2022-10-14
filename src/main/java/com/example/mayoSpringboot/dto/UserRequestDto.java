package com.example.mayoSpringboot.DTO;

import com.example.mayoSpringboot.Entity.UserEntity;
import lombok.*;

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDto {
    private String userId;
    private String userPw;
    private String userName;

    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .userId(userId)
                .userPw(userPw)
                .userName(userName)
                .build();
        return userEntity;
    }
}
