import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
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
    width:75%;
    padding-bottom:2vh;
`;

function SidebarContent(props){

    return(
        <Wrapper>
            <Img src="assets/img/mayoUniversityLogo4.png" alt="mayoUniversityLogo2"/>
        </Wrapper>
    );
}

export default SidebarContent;