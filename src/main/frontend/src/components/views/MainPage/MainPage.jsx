import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from "styled-components";

import SearchCoursePage from '../SearchCoursePage/SearchCoursePage';

const Wrapper = styled.div`
  height: 96.5vh;
  border: 0px;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  background-color: white;
  z-index: 100;
  transition: 0.4s ease;
`;

function MainPage(props) {
    let xNum = 20;

    return (
        <Wrapper style={{ width: `${100+props.xPosition}vw`, tranform: `scaleX(${1+(xNum+props.xPosition)*0.01}`}}>
            <SearchCoursePage courseList={props.courseList}/>
        </Wrapper>
    );
  }
  
  export default MainPage;