import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';

import SearchCourseList from './components/views/CourseList/SearchCourseList';
import MenuButton from './components/views/Menubar/MenuButton';
import SidebarPage from './components/views/SidebarPage/SidebarPage';
import SearchCoursePage from './components/views/SearchCoursePage/SearchCoursePage';
import LoginPage from './components/views/LoginPage/LoginPage';

const Wrapper = styled.div`
  background-color: #ffffff;
  width:100vw;
  height:100vh;
`;

const Main = styled.div`
  width:100vw;
  height:94vh;
  border:0px;
  box-sizing : border-box;
  margin:0px;
  padding:0px;
  background-color:white;
  z-index:100;
`;

function App() {
  return (
    <Wrapper>
      {/* <LoginPage/> */}
      <MenuButton />
      <Main>
        <SearchCoursePage>
          <SearchCourseList/>
        </SearchCoursePage>
      </Main>
      <SidebarPage width={280}/>
    </Wrapper>
  );
}

export default App;