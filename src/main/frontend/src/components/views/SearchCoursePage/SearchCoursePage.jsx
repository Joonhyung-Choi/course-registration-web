import React,{ useState } from 'react';
import styled from 'styled-components';

import SearchCourseList from '../CourseList/SearchCourseList';

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0px;
    padding:2vw;
    padding-top:5vh;
    padding-bottom:5vh;
`;

const SizingBox = styled.div`
    width:90%;
    height:90%;
    boxsizing:border-box;
    margin:0px;
    padding: 0px;
`;

function SearchCoursePage(props){

    return (
        <Wrapper>
            <SizingBox>
                <SearchCourseList />
            </SizingBox>
        </Wrapper>
    );
}

export default SearchCoursePage;