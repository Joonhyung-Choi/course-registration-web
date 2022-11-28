package com.example.mayoSpringboot.dto.subjcet;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.subjectEntity.WaitingSubjectEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WaitingResponseDto {
    private Long id;
    private UserEntity userEntity;
    private int subjectId;

    public WaitingResponseDto(WaitingSubjectEntity waitingSubjectEntity){
        this.id = waitingSubjectEntity.getId();
        this.userEntity = waitingSubjectEntity.getUserEntity();
        this.subjectId = waitingSubjectEntity.getSubjectId();
    }
}
