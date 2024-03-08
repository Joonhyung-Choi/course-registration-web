package com.example.mayoSpringboot.dto;

import com.example.mayoSpringboot.entity.TimeEntity;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class TimeResponseDto {
    private String prevStartDate;
    private String prevStartTime;
    private String prevEndDate;
    private String prevEndTime;
    private String startDate;
    private String endDate;
    private String startTime;
    private String endTime;

    public TimeResponseDto(TimeEntity timeEntity){
        this.prevStartDate = timeEntity.getPrevStartDate();
        this.prevStartTime = timeEntity.getPrevStartTime();
        this.prevEndDate = timeEntity.getPrevEndDate();
        this.prevEndTime = timeEntity.getPrevEndTime();
        this.startDate = timeEntity.getStartDate();
        this.endDate = timeEntity.getEndDate();
        this.startTime = timeEntity.getStartTime();
        this.endTime = timeEntity.getEndTime();

    }
}
