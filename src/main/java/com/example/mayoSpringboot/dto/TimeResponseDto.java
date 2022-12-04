package com.example.mayoSpringboot.dto;

import com.example.mayoSpringboot.entity.TimeEntity;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class TimeResponseDto {
    private String startTime;
    private String endTime;

    public TimeResponseDto(TimeEntity timeEntity){
        this.startTime = timeEntity.getStartTime();
        this.endTime = timeEntity.getEndTime();
    }
}
