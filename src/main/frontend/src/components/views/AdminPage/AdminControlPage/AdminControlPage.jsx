import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentAdminPageState } from "../../../recoil/adminDataStates";
import styled from "styled-components";

function AdminControlPage() {
  const location = useLocation();
  const [currentPageG, setCurrentPageG] = useRecoilState(currentAdminPageState);

  useEffect(() => {
    if (location.pathname === "/mayo-admin/admin-control") {
      setCurrentPageG("admin-control");
    }
  });

  const [openDateState, setOpenDateState] = useState("");
  const [openTimeState, setOpenTimeState] = useState("");

  const [closeDateState, setCloseDateState] = useState("");
  const [closeTimeState, setCloseTimeState] = useState("");

  const onChangeOpenDate = (e) => {
    setOpenDateState(e.target.value);
    console.log(e.target.value);
    console.log(typeof e.target.value)
  };
  const onChangeOpenTime = (e) => {
    setOpenTimeState(e.target.value);
    console.log(e.target.value);
    console.log(typeof e.target.value)
  };

  const onChangeCloseDate = (e) => {
    setCloseDateState(e.target.value);
    console.log(e.target.value);
    console.log(typeof e.target.value)
  };
  const onChangeCloseTime = (e) => {
    setCloseTimeState(e.target.value);
    console.log(e.target.value);
    console.log(typeof e.target.value )
  };

  function onClickConfirmButton() {
    console.log(openDateState);
    console.log(openTimeState);
    console.log(closeDateState);
    console.log(closeTimeState);
    // 여기에 서버시간 설정 axios 추가
  }

  return (
    <Wrapper>
      <PRDiv>
        <PRTitle>예비수강신청</PRTitle>
        <P>여는시간</P>
        <Input type={"date"} onChange={onChangeOpenDate}></Input>
        <Input
          type={"time"}
          onChange={onChangeOpenTime}
          style={{ marginBottom: "20px" }}
        ></Input>
        <P>닫는시간</P>
        <Input type={"date"} onChange={onChangeCloseDate}></Input>
        <Input type={"time"} onChange={onChangeCloseTime}></Input>
        <Button onClick={onClickConfirmButton}>확인</Button>
      </PRDiv>
      <RDiv>
        <PRTitle>수강신청</PRTitle>
        <P>여는시간</P>
        <Input type={"date"} onChange={onChangeOpenDate}></Input>
        <Input
          type={"time"}
          onChange={onChangeOpenTime}
          style={{ marginBottom: "20px" }}
        ></Input>
        <P>닫는시간</P>
        <Input type={"date"} onChange={onChangeCloseDate}></Input>
        <Input type={"time"} onChange={onChangeCloseTime}></Input>
        <Button onClick={onClickConfirmButton}>확인</Button>
      </RDiv>
    </Wrapper>
  );
}
export default AdminControlPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 45px);
  padding: 20px 20px;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  justify-content: space-around;
`;
const PRDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 80px;
`;
const PRTitle = styled.p`
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #fff;
`;
const RDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 80px;
`;
const RTitle = styled.p`
  display: flex;
  font-size: 18px;
  margin-bottom: 30px;
  border-bottom: 1px solid #fff;
`;
const P = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;
const Input = styled.input`
  font-size: 13px;
  margin-bottom: 3px;
  padding: 2px;
  width: 225px;
  text-align: center;
  cursor: pointer;
  background-color: #ccc;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: #fff;
  }
  &:active {
    background-color: #fff;
  }
`;
const Button = styled.button`
  font-size: 13px;
  margin-top: 20px;
  border: 1px solid #111;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
`;
