package com.example.mayoSpringboot.entity.subjectEntity;

import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "queuesubject")
public class WaitingSubjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="user")
    private UserEntity userEntity;

    @Column
    private int subjectId; // 과목번호


    public void update(UserSubjectRequestDto userSubjectRequestDto){
        this.userEntity = userSubjectRequestDto.getUserEntity();
        this.subjectId = userSubjectRequestDto.getSubjectId();
    }

}
