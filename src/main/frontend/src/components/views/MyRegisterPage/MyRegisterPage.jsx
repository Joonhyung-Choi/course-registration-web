import React, { useState, useEffect } from "react";
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

function MyRegisterPage(props) {
  const courseList = props.courseList;
  return (
    <Wrapper>
      <SizingBox>
        <div>나는 수강내역조회 페이지야~</div>
      </SizingBox>
    </Wrapper>
  );
}

export default MyRegisterPage;
