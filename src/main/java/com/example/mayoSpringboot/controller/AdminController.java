package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.ArticleDto;
import com.example.mayoSpringboot.dto.user.UserResponseDto;
import com.example.mayoSpringboot.dto.usersubjcet.UserSubjectResponseDto;
import com.example.mayoSpringboot.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/api/adminUser")
    public List<UserResponseDto> getAllUser(){
        return adminService.getAllUser();
    }

    @GetMapping("/api/adminSubject")
    public List<ArticleDto> getAllArticle(){
        return adminService.getAllSubject();
    }

    @GetMapping("/api/adminUserSubject")
    public List<UserSubjectResponseDto> getAllUsersSubject(){
        return adminService.getAllUsersSubject();
    }
}
