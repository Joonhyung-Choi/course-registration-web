package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.service.AdminService;
import com.example.mayoSpringboot.dto.ArticleDto;
import com.example.mayoSpringboot.dto.user.UserResponseDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectResponseDto;
import com.example.mayoSpringboot.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/api/adminUserGet")
    public List<UserResponseDto> getAllUser(@CookieValue(value="userName", required = false)
                                                String userName){
        String user = LoginService.sessionBox.get(userName);

        return adminService.getAllUser(user);
    }

    @GetMapping("/api/adminSubjectGet")
    public List<ArticleDto> getAllArticle(@CookieValue(value="userName", required = false)
                                              String userName){
        String user = LoginService.sessionBox.get(userName);
        return adminService.getAllSubject(user);
    }

    @GetMapping("/api/adminUserSubjectGet")
    public List<UserSubjectResponseDto> getAllUsersSubject(@CookieValue(value="userName", required = false)
                                                               String userName){
        String user = LoginService.sessionBox.get(userName);
        return adminService.getAllUsersSubject(user);
    }
}
