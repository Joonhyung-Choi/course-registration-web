import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

function FindIdPwPage(props) {
  const onClickClose = () => {
    props.getToggleFind(false);
  };

  return (
    <Wrapper
      style={props.toggleFind ? { display: "flex" } : { display: "none" }}
    >
      <InnerWrap>
        <BtnClose onClick={onClickClose}>
          <IconClose />
        </BtnClose>
      </InnerWrap>
    </Wrapper>
  );
}

export default FindIdPwPage;

const Wrapper = styled.div`
  position: absolute;
  width: 70%;
  min-width: 767px;
  height: 90%;
  background-image: linear-gradient(#ffffff 80%, #fff0b3 100%);
  border-radius: 20px;
  box-shadow: 3px 3px 12px -3px gray;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const InnerWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const BtnClose = styled.a`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  width: auto;
  height: auto;
  cursor: pointer;
`;
const IconClose = styled(AiOutlineClose)`
  width: 25px;
  height: 25px;
  color: #313131;
`;
