package com.example.mayoSpringboot.entity;

import com.example.mayoSpringboot.enumcustom.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Table(name ="Users")
public class UserEntity extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(nullable = false, length = 30)
    private String userId;

    @Column(nullable = false, length = 255)
    private String userPw;

    @Column(nullable = false, length = 10)
    private String userName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole userRole;

    @Column(nullable = false)
    private int userScore;

    @Column(nullable = false)
    private int userPrevScore;

    @Column(nullable = false)
    private int userScoreDefault;

    @Column(nullable = false)
    private int userPrevScoreDefault;
}
