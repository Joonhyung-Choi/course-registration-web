import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { currentAdminPageState } from "../../../recoil/adminDataStates";
import styled from "styled-components";
import axios from "axios";

function AdminControlPage() {
  const location = useLocation();
  const setCurrentPageG = useSetRecoilState(currentAdminPageState);

  useEffect(() => {
    if (location.pathname === "/mayo-admin/admin-control") {
      setCurrentPageG("admin-control");
    }
  });

  const [openDateState, setOpenDateState] = useState("");
  const [openTimeState, setOpenTimeState] = useState("");
  const [closeDateState, setCloseDateState] = useState("");
  const [closeTimeState, setCloseTimeState] = useState("");

  const [prevOpenDateState, setPrevOpenDateState] = useState("");
  const [prevOpenTimeState, setPrevOpenTimeState] = useState("");
  const [prevCloseDateState, setPrevCloseDateState] = useState("");
  const [prevCloseTimeState, setPrevCloseTimeState] = useState("");

  const onChangeOpenDate = (e) => {
    setOpenDateState(e.target.value);
    console.log(e.target.value);
  };
  const onChangeOpenTime = (e) => {
    setOpenTimeState(e.target.value);
    console.log(e.target.value);
  };

  const onChangeCloseDate = (e) => {
    setCloseDateState(e.target.value);
    console.log(e.target.value);
  };
  const onChangeCloseTime = (e) => {
    setCloseTimeState(e.target.value);
    console.log(e.target.value);
  };

  const onChangePrevOpenDate = (e) => {
    setPrevOpenDateState(e.target.value);
    console.log(e.target.value);
  };
  const onChangePrevOpenTime = (e) => {
    setPrevOpenTimeState(e.target.value);
    console.log(e.target.value);
  };

  const onChangePrevCloseDate = (e) => {
    setPrevCloseDateState(e.target.value);
    console.log(e.target.value);
  };
  const onChangePrevCloseTime = (e) => {
    setPrevCloseTimeState(e.target.value);
    console.log(e.target.value);
  };

  const onClickConfirmButton = async () => {
    const prevStartDate = prevOpenDateState;
    const prevStartTime = prevOpenTimeState;
    const prevEndDate = prevCloseDateState;
    const prevEndTime = prevCloseTimeState;

    const startDate = openDateState;
    const startTime = openTimeState;
    const endDate = closeDateState;
    const endTime = closeTimeState;
    if (
      prevStartDate === "" ||
      prevStartTime === "" ||
      prevEndDate === "" ||
      prevEndTime === ""
    ) {
      alert(
        "예비수강신청의 여닫는 날짜 혹은 시간이 제대로 설정되지 않았습니다."
      );
    } else if (
      startDate === "" ||
      startTime === "" ||
      endDate === "" ||
      endTime === ""
    ) {
      alert("수강신청의 여닫는 날짜 혹은 시간이 제대로 설정되지 않았습니다.");
    } else {
      await axios
        .post("/api/postAssignTime", {
          prevStartDate,
          prevStartTime,
          prevEndDate,
          prevEndTime,
          startDate,
          startTime,
          endDate,
          endTime,
        })
        .then();
      await axios.get("/api/getAssignTime").then((res) => {
        console.log(res);
      });
      alert("서버관리의 값이 정상적으로 저장되었습니다.");
    }
  };

  return (
    <Wrapper>
      <PRDiv>
        <PRTitle>예비수강신청</PRTitle>
        <P>여는시간</P>
        <Input type={"date"} onChange={onChangePrevOpenDate}></Input>
        <Input
          type={"time"}
          onChange={onChangePrevOpenTime}
          style={{ marginBottom: "20px" }}
        ></Input>
        <P>닫는시간</P>
        <Input type={"date"} onChange={onChangePrevCloseDate}></Input>
        <Input type={"time"} onChange={onChangePrevCloseTime}></Input>
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
      </RDiv>
      <Button onClick={onClickConfirmButton}>확인</Button>
    </Wrapper>
  );
}
export default AdminControlPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 45px);
  padding: 20px;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  justify-content: center;
`;
const PRDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
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
  padding-left: 40px;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 210px));
  margin: auto;
  display: box;
  width: 110px;
  height: 60px;
  font-size: 16px;
  margin-top: 20px;
  border: 1px solid #111;
  background-color: #eee;
  padding: 5px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
  &:active {
    background-color: #fff;
    box-shadow: inset 3px 3px 1px 1px #999;
  }
`;
