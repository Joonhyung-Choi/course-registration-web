package com.example.mayoSpringboot.dto.user;

import com.example.mayoSpringboot.entity.UserEntity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {
    private String userName;
    private String userId;
    private String userPw;
    private int userScore;
    private int userPrevScore;

    public UserResponseDto(UserEntity userEntity){
        this.userName =userEntity.getUserName();
        this.userId = userEntity.getUserId();
        this.userPw = userEntity.getUserPw();
        this.userScore = userEntity.getUserScore();
        this.userPrevScore = userEntity.getUserPrevScore();
    }
    public UserRequestDto transfer(UserResponseDto userResponseDto){
        UserRequestDto userRequestDto = new UserRequestDto();
        userRequestDto.setUserName(userResponseDto.getUserName());
        userRequestDto.setUserId(userResponseDto.getUserId());
        userRequestDto.setUserPw(userResponseDto.getUserPw());
        userRequestDto.setUserScore(userResponseDto.getUserScore());
        userRequestDto.setUserPrevScore(userResponseDto.getUserPrevScore());

        return userRequestDto;
    }
}
