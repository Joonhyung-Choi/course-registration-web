package com.example.mayoSpringboot.dto.user;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import lombok.*;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDto {
    private Long id;
    private String userId;
    private String userPw;
    private String userName;
    private UserRole userRole;
    private int userScore;
    private int userPrevScore;
    private int userScoreDefault;
    private int userPrevScoreDefault;

    public UserRequestDto(UserEntity userEntity){
        this.id = userEntity.getId();
        this.userName =userEntity.getUserName();
        this.userId = userEntity.getUserId();
        this.userPw = userEntity.getUserPw();
        this.userRole = userEntity.getUserRole();
        this.userScore = userEntity.getUserScore();
        this.userPrevScore = userEntity.getUserPrevScore();
        this.userScoreDefault = userEntity.getUserScoreDefault();
        this.userPrevScoreDefault = userEntity.getUserPrevScoreDefault();
    }
    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .id(id)
                .userId(userId)
                .userPw(userPw)
                .userName(userName)
                .userRole(userRole)
                .userScore(userScore)
                .userPrevScore(userPrevScore)
                .userScoreDefault(userScoreDefault)
                .userPrevScoreDefault(userPrevScoreDefault)
                .build();
        return userEntity;
    }
}
