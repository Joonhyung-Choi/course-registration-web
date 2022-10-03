import React, {} from 'react';
import styled from 'styled-components';

import StyledMenuButton from './StyledMenuButton';

const Wrapper = styled.div`
    width:100vw;
    height:3.6vh;
    background-color:#ebebeb;
`;

const Menubar = styled.div`
    display:flex;
    position: relative;
    flex-direction: row;
    justify-content:left;
    align-items:flex-end;
    background-color:#ebebeb;
    height:3.6vh;
    padding: 0;
    margin: 0;
    z-index:9;
    transition: 0.4s ease;
`;

function MenuButton(props){
    // xPosition 차이 값 (open&close)
    let xNum = 20;

    return(
        <Wrapper>
            <Menubar style={{ width: `${100+props.xPosition}vw`, tranform: `scaleX(${1+(xNum+props.xPosition)*0.01}`}}>
                <StyledMenuButton buttonName="교과목신청" zIndex="40" />
                <StyledMenuButton buttonName="예비수강신청" zIndex="30" />
                <StyledMenuButton buttonName="수강신청" zIndex="20" />
                <StyledMenuButton buttonName="수강내역조회" zIndex="10" />
            </Menubar>
        </Wrapper>
    );
}

export default MenuButton;