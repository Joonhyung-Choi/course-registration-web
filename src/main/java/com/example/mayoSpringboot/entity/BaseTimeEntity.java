package com.example.mayoSpringboot.Entity;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass // 여기서 자식에게 상속을 줄때 자식에게 매핑 정보만 넘겨주고 싶을때 사용
@EntityListeners(AuditingEntityListener.class) // 자녀entity가 수정되었을 때 실행됌
public abstract class BaseTimeEntity {
    @CreatedDate //생생될때의 시간정보
    private LocalDateTime createTime;

    @LastModifiedDate //수정될때의 시간정보
    private  LocalDateTime modifiedTime;
}
