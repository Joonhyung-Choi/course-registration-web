import React, { useState } from "react";
import styled from "styled-components";

import axios from "axios";

function SearchCourseFilter(props) {
  const courseList = props.courseList; // Initial Data List
  const [filterList1, setFilterList1] = useState();
  const [filterList2, setFilterList2] = useState();

  const [isSelMajor, setIsSelMajor] = useState(true);
  const [majorValue, setMajorValue] = useState("");
  const [subjectTypeValue, setSubjectTypeValue] = useState("");
  const [subjectNameValue, setSubjectNameValue] = useState("");
  const [subjectIdInput, setSubjectIdInput] = useState("");
  const [subjectNameOutput, setSubjectNameOutput] = useState("");

  // categorySel Event
  const onChangeCategory = (e) => {
    setIsSelMajor(Boolean(e.target.value));
    setMajorValue(null);
    setSubjectTypeValue(null);
    setSubjectNameValue(null);
    setSubjectIdInput("");
    setSubjectNameOutput("");
  };
  // majorSel Event
  const onChangeMajor = (e) => {
    setMajorValue(e.target.value);
    setSubjectTypeValue(null);
    setSubjectNameValue(null);
    setFilterList1(
      courseList.filter((item) => {
        if (majorValue === "") {
          return item;
        } else if (item.major === majorValue) {
          return item;
        }
      })
    );
  };
  // subjectTypeSel Event
  const onChangeSubjectType = (e) => {
    setSubjectTypeValue(e.target.value);
    setSubjectNameValue(null);
    setFilterList2(
      filterList1.filter((item) => {
        if (subjectTypeValue === "") {
          return item;
        } else if (subjectTypeValue.includes(item.subject_type)) {
          return item;
        }
      })
    );
  };
  // subjectNameSel Event
  const onChangeSubjectNameSel = (e) => {
    setSubjectNameValue(e.target.value);
  };
  // subjectIdInput Event
  const onChangeSubjectId = (e) => {
    setSubjectIdInput(e.value);
  };
  // subjectNameOutput Event
  const onChangeSubjectNameOutput = (e) => {
    setSubjectNameOutput(e.value);
  };

  // Press Enter Event
  const onEnter = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      onChangeSubjectId(e);
      //filter기능!!!!
    }
  };

  return (
    <Wrapper>
      <InnerWrap>
        <DivCategory>
          <PCategory>카테고리: </PCategory>
          <SelCategory title="전공/학과 조회" onChange={onChangeCategory}>
            <Option value={"true"}>전공/학과 조회</Option>
            <Option value={""}>과목코드 검색</Option>
          </SelCategory>
        </DivCategory>
        {isSelMajor ? (
          <>
            <DivMajor>
              <PMajor>학과: </PMajor>
              <SelMajor title="전체학과" onChange={onChangeMajor}>
                <Option value={""}>전체학과</Option>
                <Option value={"컴퓨터공학과"}>컴퓨터공학과</Option>
                <Option value={"교양학부"}>교양학부</Option>
              </SelMajor>
            </DivMajor>
            <DivSubjectType>
              <PSubjectType>이수구분: </PSubjectType>
              <SelSubjectType title="전체이수" onChange={onChangeSubjectType}>
                <Option value={""}>전체이수</Option>
                <Option value={["교양필수", "전공필수"]}>교양/전공필수</Option>
                <Option value={["교양선택", "전공필수"]}>교양/전공선택</Option>
              </SelSubjectType>
            </DivSubjectType>
            <DivSubjectName>
              <PSubjectName>과목: </PSubjectName>
              <SelSubjectName
                title="전체과목"
                onChange={onChangeSubjectNameSel}
              >
                <Option value={""}>전체과목</Option>
                {/* {filterList2.map((item) => {
                  return (
                    <Option value={item.subject_name}>
                      {item.subject_name}
                    </Option>
                  );
                })} */}
              </SelSubjectName>
            </DivSubjectName>
          </>
        ) : (
          <>
            {/*<DivSubjectId>*/}
            {/*  <PSubjectId>과목코드: </PSubjectId>*/}
            {/*  <InputSubjectId*/}
            {/*      name="subjectId_input"*/}
            {/*      placeholder="과목코드를 입력하세요."*/}
            {/*      value={subjectIdInput}*/}
            {/*      onChange={onChangeSubjectId}*/}
            {/*      onKeyPress={onEnter}*/}
            {/*  ></InputSubjectId>*/}
            {/*</DivSubjectId>*/}
            {/*<DivSubjectName>*/}
            {/*  <PSubjectName>과목: </PSubjectName>*/}
            {/*  <InputSubjectName*/}
            {/*      name="subjectId_input"*/}
            {/*      placeholder="과목코드를 입력하세요."*/}
            {/*      value={subjectNameOutput}*/}
            {/*      onChange={onChangeSubjectId}*/}
            {/*  >*/}
            {/*    {subjectNameOutput}*/}
            {/*  </InputSubjectName>*/}
            {/*</DivSubjectName>*/}
          </>
        )}
        <BtnSearch>조회</BtnSearch>
      </InnerWrap>
    </Wrapper>
  );
}

export default SearchCourseFilter;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 0 5px;
  margin-bottom: 5px;
  align-items: center;
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 24px;
  padding: 2px;
  padding-left: 10px;
  border-radius: 6px;
  border: 2px solid #e2e2e2;
  background-color: #f1f1f1;
  align-items: center;
`;
// [카테고리] -> 1. 전공/학과 조회  2. 과목검색
const DivCategory = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
`;
const PCategory = styled.p`
  padding: 0;
  margin: 0;
  align-items: center;
  color: #313131;
  font-size: 11px;
  font-weight: 700;
`;
const SelCategory = styled.select`
  padding: 0px;
  margin: 0px;
  align-items: center;
  font-size: 11px;
  color: #313131;
  border: none;
  border-bottom: 1px solid #313131;
  background-color: rgba(0, 0, 0, 0);
`;
const Option = styled.option`
  align-items: center;
  font-size: 11px;
  color: #313131;
`;
// 1. 전공/학과 조회
// major
const DivMajor = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
`;
const PMajor = styled.p`
  padding: 0;
  margin: 0;
  align-items: center;
  color: #313131;
  font-size: 11px;
  font-weight: 700;
`;
const SelMajor = styled.select`
  padding: 0px;
  margin: 0px;
  align-items: center;
  font-size: 11px;
  color: #313131;
  border: none;
  border-bottom: 1px solid #313131;
  background-color: rgba(0, 0, 0, 0);
`;
// subject_type
const DivSubjectType = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
`;
const PSubjectType = styled.p`
  padding: 0;
  margin: 0;
  align-items: center;
  color: #313131;
  font-size: 11px;
  font-weight: 700;
`;
const SelSubjectType = styled.select`
  padding: 0px;
  margin: 0px;
  align-items: center;
  font-size: 11px;
  color: #313131;
  border: none;
  border-bottom: 1px solid #313131;
  background-color: rgba(0, 0, 0, 0);
`;
// subject_name
const DivSubjectName = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
`;
const PSubjectName = styled.p`
  padding: 0;
  margin: 0;
  align-items: center;
  color: #313131;
  font-size: 11px;
  font-weight: 700;
`;
const SelSubjectName = styled.select`
  padding: 0px;
  margin: 0px;
  align-items: center;
  font-size: 11px;
  color: #313131;
  border: none;
  border-bottom: 1px solid #313131;
  background-color: rgba(0, 0, 0, 0);
`;
// 2. 과목검색
// subject_id
const DivSubjectId = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
`;
const PSubjectId = styled.p`
  padding: 0;
  margin: 0;
  align-items: center;
  color: #313131;
  font-size: 11px;
  font-weight: 700;
`;
const InputSubjectId = styled.input``;
// subject_name
const InputSubjectName = styled.input``;
// BtnSearch
const BtnSearch = styled.a`
  padding: 3px 5px;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #fff;
  background-color: #999999;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #313131;
  }
`;
