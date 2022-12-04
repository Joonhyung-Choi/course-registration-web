import React from "react";
import styled from "styled-components";

export default function NotFoundPage() {
  return (
    <Wrapper>
      <LogoImg
        src="assets/img/mayoUniversityLogo.png"
        alt="mayoUniversityLogo1"
      />
      <Content>요청하신 페이지를 찾을 수 없습니다!</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Content = styled.p`
  font-size: 16pxZ;
  color: #313131;
`;
const LogoImg = styled.img`
  width: 6.5%;
  min-width: 80px;
  height: auto;
  margin-bottom: 35px;
`;
