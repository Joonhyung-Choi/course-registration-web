import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding-top: 0px;
    padding-bottom:30px;
    maring: 0px;
`;

const Content = styled.div`
    color:black;
    maring:0px;
    padding:0px;
`;

const Img = styled.img`
    text-align:right;
    width:90%;
    height:100%;
    maring:0px;
    margin-left:19px;
`;

function SidebarContent(props){

    return(
        <Wrapper>
            <Img src="assets/img/mayoUniversityLogo4.png" alt="mayoUniversityLogo"/>
        </Wrapper>
    );
}

export default SidebarContent;