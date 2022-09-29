import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchCourseList from './components/views/CourseList/SearchCourseList';
import MenuButton from './components/views/Menubar/MenuButton';
<<<<<<< HEAD
import SidebarPage from './components/views/SidebarPage/SidebarPage';
import SearchCoursePage from './components/views/SearchCoursePage/SearchCoursePage';
=======
import SidebarPage from './components/views/SideBarPage/SidebarPage';
>>>>>>> parent of f75e539 (파일 폴더 이름 수정)

const Wrapper = styled.div`
  background-color: #ffffff;
  width:100vw;
  height:100vh;
  box-size: border-box;
`;

const Main = styled.div`
  width:100vw;
  height:94vh;
  box-size: border-box;
  margin:0px;
  padding:0px;
  background-color:white;
  z-index:100;
`;



ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <MenuButton />
      <Main>
        <SearchCoursePage>
          <SearchCourseList/>
        </SearchCoursePage>
      </Main>
      <SidebarPage width={280}/>
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
