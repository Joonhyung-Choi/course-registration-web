package com.example.mayoSpringboot.dto.UserSubjcet;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.UserSubjectEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserSubjectRequestDto {
    private UserEntity userEntity;
    private String major;
    private int grade;
    private String subject_name;
    private int subject_id;
    private String subject_type;
    private int score;
    private int max_count;
    private int register_count;
    private String subject_time;
    private String professor;
}
