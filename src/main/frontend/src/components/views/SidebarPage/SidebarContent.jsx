import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px;
  margin: 0px;
`;

const Content = styled.div`
  color: #313131;
  margin: 0px;
  padding: 0px;
`;

const Img = styled.img`
  width: 100%;
  padding-bottom: 40px;
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  color: #696969;
  font-size: 13px;
  padding: 2px;
  margin-left: 5px;
  letter-spacing: -0.30px;
`;

const Strong = styled.div`
  color: #313131;
  font-size: 14px;
  font-weight: 600;
  text-align: right;
  padding: 2px;
  margin-right: 5px;
`;

const Hr = styled.div`
  width: 100%;
  height: 2px;
  background: #696969;
  margin: 3px 0;
`;

function SidebarContent(props) {
  return (
    <Wrapper>
      <Img src="/assets/img/mayoUniversityLogo4.png" alt="mayoUniversityLogo2" />
      <Test>
        <Title>UserName</Title>
        <Hr />
        <Strong>{props.userData}</Strong>
      </Test>
      <Test>
        <Title>UserAge</Title>
        <Hr />
        <Strong>23</Strong>
      </Test>
    </Wrapper>
  );
}

export default SidebarContent;
