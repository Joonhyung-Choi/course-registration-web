import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

import {useRecoilState} from "recoil";
import {currentPageState} from "../../recoil/currentPageStates";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

const SizingBox = styled.div`
  width: 90%;
  height: 90%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

function RegisterPage(props) {
    const location = useLocation();
    const courseList = location.state.courseList;

    // current page
    const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
    useEffect(()=>{
        if(location.pathname==="/mayo-main/register"){
            setCurrentPageG('register');
        }
    },[]);

    let dataBung = [];

    return (
        <Wrapper>
            <SizingBox>
            </SizingBox>
        </Wrapper>
    );
}

export default RegisterPage;
