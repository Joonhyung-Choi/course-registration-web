package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.TimeRequsetDto;
import com.example.mayoSpringboot.dto.TimeResponseDto;
import com.example.mayoSpringboot.entity.TimeEntity;
import com.example.mayoSpringboot.error.ErrorCode;
import com.example.mayoSpringboot.error.exception.ForbiddenException;
import com.example.mayoSpringboot.repository.TimeRepository;
import com.example.mayoSpringboot.time.TimeGet;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;


@Slf4j
@RestController
@RequiredArgsConstructor
public class TimeController {
    private final TimeRepository timeRepository;
    @GetMapping("/api/time")
    public LocalTime timeThrow(){
        TimeGet timeGet = new TimeGet();
        return timeGet.getNow();
    }
    @PostMapping("/api/postAssignTime")
    public String assignTime(@RequestBody TimeRequsetDto timeRequsetDto){
        List<TimeEntity> time = timeRepository.findAll();
        if(time.size() == 0) {//처음 시간 정의할때
            TimeEntity timeEntity = TimeEntity.builder()
                    .startTime(timeRequsetDto.getStartTime())
                    .endTime(timeRequsetDto.getEndTime())
                    .build();
            timeRepository.save(timeEntity);
            return "시작시간: "+timeEntity.getStartTime()+", 종료시간: "+timeEntity.getEndTime()+"으로 저장되었습니다.";
        }
        //이미 정의된 시간이 있을때
        timeRepository.deleteAll();
        TimeEntity timeEntity = TimeEntity.builder()
                .startTime(timeRequsetDto.getStartTime())
                .endTime(timeRequsetDto.getEndTime())
                .build();
        timeRepository.save(timeEntity);
        return "시작시간: "+timeEntity.getStartTime()+", 종료시간: "+timeEntity.getEndTime()+"으로 저장되었습니다.";
    }
    @GetMapping("/api/getAssignTime")
    public List<TimeResponseDto> throwTime(){
        List<TimeEntity> time = timeRepository.findAll();
        if (time.size() == 0){
            throw new ForbiddenException(ErrorCode.UNDEFINED_TIME,"E0032");
        }
        return time.stream().map(TimeResponseDto::new).collect(Collectors.toList());
    }
}
