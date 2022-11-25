package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.ArticleDto;
import com.example.mayoSpringboot.dto.user.UserResponseDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectResponseDto;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.subjectEntity.Article;
import com.example.mayoSpringboot.entity.subjectEntity.UserSubjectEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import com.example.mayoSpringboot.error.ErrorCode;
import com.example.mayoSpringboot.error.exception.ForbiddenException;
import com.example.mayoSpringboot.repository.ArticleRepository;
import com.example.mayoSpringboot.repository.UserRepository;
import com.example.mayoSpringboot.repository.UserSubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;
    private final UserSubjectRepository userSubjectRepository;
    @Transactional
    public List<UserResponseDto> getAllUser(String user){
        UserEntity userEntity = userRepository.findByUserName(user);
        if ( !userEntity.getUserRole().equals(UserRole.ADMIN) ){
            throw new ForbiddenException(ErrorCode.FORBIDDEN_EXCEPTION,"E0003");
        }
        List<UserEntity> entityList = userRepository.findAll();
        return entityList.stream().map(UserResponseDto::new).sorted().collect(Collectors.toList());
    }

    @Transactional
    public List<ArticleDto> getAllSubject(String user){
        UserEntity userEntity = userRepository.findByUserName(user);
        if ( !userEntity.getUserRole().equals(UserRole.ADMIN) ){
            throw new ForbiddenException(ErrorCode.FORBIDDEN_EXCEPTION,"E0003");
        }

        List<Article> entityList = articleRepository.findAll();
        return entityList.stream().map(ArticleDto::new).sorted().collect(Collectors.toList());
    }

    @Transactional
    public List<UserSubjectResponseDto> getAllUsersSubject(String user){
        UserEntity userEntity = userRepository.findByUserName(user);
        if ( !userEntity.getUserRole().equals(UserRole.ADMIN) ){
            throw new ForbiddenException(ErrorCode.FORBIDDEN_EXCEPTION,"E0003");
        }

        List<UserSubjectEntity> entityList = userSubjectRepository.findAllUserSubject();
        return entityList.stream().map(UserSubjectResponseDto::new).sorted().collect(Collectors.toList());
    }
}
