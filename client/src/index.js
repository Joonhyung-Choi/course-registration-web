import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import CourseList from './components/views/CourseList/CourseList';
import MenuButton from './components/views/Menubar/MenuButton';
import SidebarPage from './components/views/SideBarPage/SidebarPage';

ReactDOM.render(
  <React.StrictMode>
    <CourseList />
    <MenuButton />
    <SidebarPage width={280}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
