package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.ArticleDto;
import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.dto.user.UserResponseDto;
import com.example.mayoSpringboot.dto.usersubjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.Article;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.UserPreSubjectEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import com.example.mayoSpringboot.error.ErrorCode;
import com.example.mayoSpringboot.error.exception.ForbiddenException;
import com.example.mayoSpringboot.error.exception.NotFoundException;
import com.example.mayoSpringboot.repository.ArticleRepository;
import com.example.mayoSpringboot.repository.UserPrevSubjectRepository;
import com.example.mayoSpringboot.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.example.mayoSpringboot.error.ErrorCode.NOT_FOUND_EXCEPTION;
@Service
@Slf4j
@RequiredArgsConstructor
public class UserPrevSubjectService {
    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;
    private final UserPrevSubjectRepository userPrevSubjectRepository;

    public String prevAdd(String userName, UserSubjectRequestDto userSubjectRequestDto){
        UserEntity userEntity = userRepository.findByUserName(userName);
        if(!userEntity.getUserRole().equals(UserRole.USER)){
            throw new ForbiddenException(ErrorCode.FORBIDDEN_EXCEPTION, "유저계정으로 로그인하세요.");
        }
        //아티클에 예비신청인원 추가
        Article article = articleRepository.findById(userSubjectRequestDto.getId())
                .orElseThrow(()->{throw new NotFoundException(NOT_FOUND_EXCEPTION,"E0004");});

        //신청한 과목의 학점을 유저 학점에서 마이너스
        UserResponseDto userResponseDto = new UserResponseDto(userEntity);
        userResponseDto.setUserPrevScore(userResponseDto.getUserPrevScore()-userSubjectRequestDto.getScore());
        UserRequestDto userRequestDto = userResponseDto.transfer(userResponseDto);
        userEntity = userRequestDto.toEntity();

        ArticleDto articleDto = new ArticleDto(article);
        int a = articleDto.getPrev_register_count();
        articleDto.setPrev_register_count(++a);
        article.update(articleDto);
        articleRepository.save(article);

        userSubjectRequestDto.setUserEntity(userEntity);
        UserPreSubjectEntity userPreSubjectEntity = new UserPreSubjectEntity();
        userPreSubjectEntity.update(userSubjectRequestDto);
        userPrevSubjectRepository.save(userPreSubjectEntity);
        return "성공?";
    }

    public List<UserPreSubjectEntity> prevRead(String user) {
        UserEntity userEntity = userRepository.findByUserName(user);
        return userPrevSubjectRepository.findByUserEntity(userEntity);
    }
    public void prevDelete(String user,Long id){
        UserEntity userEntity = userRepository.findByUserName(user);
        List<UserPreSubjectEntity> userPreSubjectList = userPrevSubjectRepository.findByUserEntity(userEntity);
        int index = userPreSubjectList.indexOf(id); // index >> indexOf 사용(지성)
        UserPreSubjectEntity userPreSubjectEntity = userPreSubjectList.get(index);
        userPrevSubjectRepository.delete(userPreSubjectEntity);
    }
}
