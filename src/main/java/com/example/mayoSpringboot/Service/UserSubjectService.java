package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.ArticleDto;
import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.dto.user.UserResponseDto;
import com.example.mayoSpringboot.dto.usersubjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.Article;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.UserPreSubjectEntity;
import com.example.mayoSpringboot.entity.UserSubjectEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import com.example.mayoSpringboot.error.ErrorCode;
import com.example.mayoSpringboot.error.exception.ForbiddenException;
import com.example.mayoSpringboot.error.exception.NotFoundException;
import com.example.mayoSpringboot.repository.ArticleRepository;
import com.example.mayoSpringboot.repository.UserRepository;
import com.example.mayoSpringboot.repository.UserSubjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.example.mayoSpringboot.error.ErrorCode.NOT_FOUND_EXCEPTION;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserSubjectService {
    private final UserRepository userRepository;
    private final UserSubjectRepository userSubjectRepository;
    private final ArticleRepository articleRepository;

    public String subjectAdd(String userName, UserSubjectRequestDto userSubjectRequestDto){
        UserEntity userEntity = userRepository.findByUserName(userName);
        if(!userEntity.getUserRole().equals(UserRole.USER)){
            throw new ForbiddenException(ErrorCode.FORBIDDEN_EXCEPTION, "유저계정으로 로그인하세요.");
        }
        //아티클에 신청인원 추가
        Article article = articleRepository.findById(userSubjectRequestDto.getId())
                .orElseThrow(()->{throw new NotFoundException(NOT_FOUND_EXCEPTION,"E0004");});
        ArticleDto articleDto = new ArticleDto(article);

        //신청한 과목의 학점을 유저 학점에서 마이너스
        UserResponseDto userResponseDto = new UserResponseDto(userEntity);
        userResponseDto.setUserPrevScore(userResponseDto.getUserScore()-userSubjectRequestDto.getScore());
        UserRequestDto userRequestDto = userResponseDto.transfer(userResponseDto);
        userEntity = userRequestDto.toEntity();

        int a = articleDto.getRegister_count();
        articleDto.setRegister_count(++a);
        article.update(articleDto);
        articleRepository.save(article);

        userSubjectRequestDto.setUserEntity(userEntity);
        UserSubjectEntity userSubjectEntity = new UserSubjectEntity();
        userSubjectEntity.update(userSubjectRequestDto);
        userSubjectRepository.save(userSubjectEntity);
        return "성공?";
    }

    public List<UserSubjectEntity> subjectRead(String user) {
        UserEntity userEntity = userRepository.findByUserName(user);
        return userSubjectRepository.findByUserEntity(userEntity);
    }
    public String subjectDelete(String user,int subject_id){
        UserEntity userEntity = userRepository.findByUserName(user);
        List<UserSubjectEntity> userSubjectList = userSubjectRepository.findByUserEntity(userEntity);
        int index = userSubjectList.indexOf(subject_id);
        UserSubjectEntity userSubjectEntity = userSubjectList.get(index);
        userSubjectRepository.delete(userSubjectEntity);

        return "삭제완료";
    }
}
