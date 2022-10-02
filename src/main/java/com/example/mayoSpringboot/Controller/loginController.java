package com.example.mayoSpringboot.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
public class loginController {
    @GetMapping("/loginpage")
    public String loginpage(){
        return "loginpage";
    }
}
