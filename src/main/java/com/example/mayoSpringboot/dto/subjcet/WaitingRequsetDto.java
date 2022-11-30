package com.example.mayoSpringboot.dto.subjcet;

import com.example.mayoSpringboot.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WaitingRequsetDto {
    private UserEntity userEntity;
    private int subjectId;


}
