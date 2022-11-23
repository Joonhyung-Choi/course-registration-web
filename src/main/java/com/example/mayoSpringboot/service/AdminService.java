package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.ArticleDto;
import com.example.mayoSpringboot.dto.user.UserResponseDto;
import com.example.mayoSpringboot.dto.usersubjcet.UserSubjectResponseDto;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.subjectEntity.Article;
import com.example.mayoSpringboot.entity.subjectEntity.UserSubjectEntity;
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
    public List<UserResponseDto> getAllUser(){
        List<UserEntity> entityList = userRepository.findAll();
        return entityList.stream().map(UserResponseDto::new).sorted().collect(Collectors.toList());
    }

    @Transactional
    public List<ArticleDto> getAllSubject(){
        List<Article> entityList = articleRepository.findAll();
        return entityList.stream().map(ArticleDto::new).sorted().collect(Collectors.toList());
    }

    @Transactional
    public List<UserSubjectResponseDto> getAllUsersSubject(){
        List<UserSubjectEntity> entityList = userSubjectRepository.findAllUserSubject();
        return entityList.stream().map(UserSubjectResponseDto::new).sorted().collect(Collectors.toList());
    }
}
