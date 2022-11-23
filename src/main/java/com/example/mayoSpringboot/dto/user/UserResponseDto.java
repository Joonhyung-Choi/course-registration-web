package com.example.mayoSpringboot.dto.user;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {
    private Long id;
    private String userId;
    private String userPw;
    private String userName;
    private UserRole userRole;
    private int userScore;
    private int userPrevScore;
    private int userScoreDefault;
    private int userPrevScoreDefault;

    public UserResponseDto(UserEntity userEntity){
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
    public UserRequestDto transfer(UserResponseDto userResponseDto){
        UserRequestDto userRequestDto = new UserRequestDto();
        userRequestDto.setId(userResponseDto.id);
        userRequestDto.setUserName(userResponseDto.userName);
        userRequestDto.setUserId(userResponseDto.userId);
        userRequestDto.setUserPw(userResponseDto.userPw);
        userRequestDto.setUserScore(userResponseDto.userScore);
        userRequestDto.setUserPrevScore(userResponseDto.userPrevScore);
        userRequestDto.setUserScoreDefault(userResponseDto.userScoreDefault);
        userRequestDto.setUserPrevScoreDefault(userResponseDto.userPrevScoreDefault);
        userRequestDto.setUserRole(userResponseDto.userRole);
        return userRequestDto;
    }
}
