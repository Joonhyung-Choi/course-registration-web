import React, { useRef, useState } from "react";
import styled from "styled-components";

const Content = styled.p`
    color:red;
    padding:20px;
`;

function SidebarContent(props){

    return(
        <div>
            <Content>내용입니당</Content>
        </div>
    );
}

export default SidebarContent;