import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function ManagePage() {
    const location = useLocation();

    return (
        <Wrapper>
            <>관리자 페이지 입니당</>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
`;
