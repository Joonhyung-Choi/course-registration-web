import React, {} from 'react';
import styled from 'styled-components';

import StyledMenuButton from './StyledMenuButton';

const Wrapper = styled.div`
    display:flex;
    position: relative;
    flex-direction: row;
    justify-content:left;
    align-items:flex-end;
    background-color:#e8e8e8ee;
    width: 100vw;
    height: 4vh;
    padding: 0;
    margin: 0;
    z-index:9;
`;

function MenuButton(props){
    return(
        <Wrapper>
            <StyledMenuButton buttonName="교과목신청" zIndex="40" />
            <StyledMenuButton buttonName="예비수강신청" zIndex="30" />
            <StyledMenuButton buttonName="수강신청" zIndex="20" />
            <StyledMenuButton buttonName="수강내역조회" zIndex="10" />
        </Wrapper>
    );
}

export default MenuButton;