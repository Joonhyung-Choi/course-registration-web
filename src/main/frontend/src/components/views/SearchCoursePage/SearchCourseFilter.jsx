import React, { useState } from "react";
import styled from "styled-components";

import axios from "axios";

import {BsCaretRightFill,BsFillSquareFill} from 'react-icons/bs';

function SearchCourseFilter(props) {
  let dum = 1;
  const [courseList, setCourseList] = useState(props.courseList); // Initial Data List
  const [isSelMajor, setIsSelMajor] = useState(true);
  const [subjectTypeValue, setSubjectTypeValue] = useState("");
  const [majorValue, setMajorValue] = useState("");
  const [subjectNameValue, setSubjectNameValue] = useState("");
  const [subjectIdInput, setSubjectIdInput] = useState("");
  const [filterList, setFilterList] = useState(courseList);
  let filteringValue = filterList; // Final Data List

  // categorySel Event
  const onClickCategory = (e) => {
    setIsSelMajor(Boolean(e.target.value));
    setMajorValue("");
    setSubjectTypeValue("");
    setSubjectNameValue("");
    setSubjectIdInput("");
  };
  const onChangeCategory = () => {
    if (!isSelMajor) {
      dum = 0;
      if (dum === 0) {
        props.getFilteringList(courseList);
      }
    } else if (isSelMajor) {
      dum = 1;
      if (dum === 1) {
        {
          props.getFilteringList(courseList);
        }
      }
    }
  };
  // majorSel Event
  const onChangeMajor = (e) => {
    setMajorValue(e.target.value);
    setSubjectTypeValue("");
    setSubjectNameValue("");
    getFilterList();
  };
  // subjectTypeSel Event
  const onChangeSubjectType = (e) => {
    setSubjectTypeValue(e.target.value);
    setSubjectNameValue("");
    getFilterList();
  };
  // subjectNameSel Event
  const onChangeSubjectNameSel = (e) => {
    setSubjectNameValue(e.target.value);
  };
  // subjectIdInput Event
  const onChangeSubjectId = (e) => {
    setSubjectIdInput(e.target.value);
  };
  // Press Enter Event
  const onEnter = (e) => {
    if (subjectIdInput.length === 5) {
      onClickBtn();
    }
  };
  // filterList Event
  const getFilterList = () => {
    setFilterList(
      courseList.filter((item) => {
        if (item.major === majorValue) {
          if (subjectTypeValue.includes(item.subject_type)) {
            return item;
          } else if (subjectTypeValue === "") {
            return item;
          }
        } else if (majorValue === "") {
          if (subjectTypeValue.includes(item.subject_type)) {
            return item;
          } else if (subjectTypeValue === "") {
            return item;
          }
        }
      })
    );
  };
  // BtnSearch Click Event
  const onClickBtn = () => {
    if (isSelMajor) {
      filteringValue = filterList.filter((item) => {
        if (subjectNameValue === "") {
          return item;
        } else if (item.subject_name === subjectNameValue) {
          return item;
        }
      });
      props.getFilteringList(filteringValue);
    } else if (!isSelMajor) {
      filteringValue = filterList.filter((item) => {
        if (String(item.subject_id) === subjectIdInput) {
          return item;
        }
      });
      props.getFilteringList(filteringValue);
    }
  };

  return (
    <Wrapper>
      <InnerWrap>
        <BoardTrg />
        <BoardLeg  style={{left:"30px"}}/>
        <BoardLeg style={{right:"24px"}}/>
        <DivCategory>
          <PCategory>카테고리&nbsp;</PCategory>
          <SelCategory onClick={onClickCategory} onChange={onChangeCategory}>
            <Option value={"true"}>학과/이수 조회</Option>
            <Option value={""}>과목코드 검색</Option>
          </SelCategory>
        </DivCategory>
        {isSelMajor ? (
          <>
            <DivMajor>
              <PMajor>학과&nbsp;</PMajor>
              <SelMajor
                onClick={onChangeMajor}
                onChange={onChangeMajor}
                value={majorValue}
              >
                <Option value={""}>전체학과</Option>
                <Option value={"컴퓨터공학과"}>컴퓨터공학과</Option>
                <Option value={"교양학부"}>교양학부</Option>
              </SelMajor>
            </DivMajor>
            <DivSubjectType>
              <PSubjectType>이수구분&nbsp;</PSubjectType>
              <SelSubjectType
                onClick={onChangeSubjectType}
                onChange={onChangeSubjectType}
                value={subjectTypeValue}
              >
                <Option value={""}>전체이수</Option>
                <Option value={["교양필수", "전공필수"]}>교양/전공필수</Option>
                <Option value={["교양선택", "전공선택"]}>교양/전공선택</Option>
              </SelSubjectType>
            </DivSubjectType>
            <DivSubjectName>
              <PSubjectName>과목명&nbsp;</PSubjectName>
              <SelSubjectName
                title="전체과목"
                onChange={onChangeSubjectNameSel}
                onClick={onChangeSubjectNameSel}
                value={subjectNameValue}
              >
                <Option value={""}>전체과목</Option>
                {filterList.map((item) => {
                  return (
                    <Option value={item.subject_name}>
                      {item.subject_name}
                    </Option>
                  );
                })}
              </SelSubjectName>
            </DivSubjectName>
          </>
        ) : (
          <>
            <DivSubjectId>
              <PSubjectId>과목코드&nbsp;</PSubjectId>
              <InputSubjectId
                name="subjectId_input"
                type="number"
                placeholder="과목코드를 입력하세요"
                value={subjectIdInput}
                min="1"
                max="5"
                onChange={onChangeSubjectId}
                onKeyDown={onEnter}
              />
            </DivSubjectId>
            <DivSubjectName>
              <PSubjectName>과목명&nbsp;</PSubjectName>
              <OutputSubjectName>
                {subjectIdInput.length === 5 &&
                  courseList.map((item) => {
                    if (String(item.subject_id) === subjectIdInput) {
                      return item.subject_name;
                    }
                  })}
              </OutputSubjectName>
            </DivSubjectName>
          </>
        )}
        <BtnSearch onClick={onClickBtn}>조회</BtnSearch>
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
  position: relative;
  flex-direction: row;
  width: 760px;
  height: 23px;
  padding: 2px;
  padding-left: 8px;
  border-radius:4px;
  background-color:#b19879;
  align-items: center;
  color:#fff;
`;
const BoardTrg = styled(BsCaretRightFill)`
  display:flex;
  position:absolute;
  height:31px;
  width:auto;
  right:-17px;
  color:#b19879;
`;
const BoardLeg = styled(BsFillSquareFill)`
  display:flex;
  position:absolute;
  height:18px;
  width:auto;
  bottom: 4px;
  color:#b19879;
  transform: translate(0,100%);
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
  padding-top: 2px;
  margin: 0;
  align-items: center;
  font-size: 11px;
`;
const SelCategory = styled.select`
  padding: 0px;
  margin: 0px;
  align-items: center;
  font-size: 11px;
  border-radius:7px;
  border: 1px solid #fff;
  background-color: rgba(0, 0, 0, 0);
  color:#fff;
`;
const Option = styled.option`
  align-items: center;
  font-size: 11px;
  color:#313131;
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
  padding-top: 2px;
  margin: 0;
  align-items: center;
  font-size: 11px;
`;
const SelMajor = styled.select`
  padding: 0px;
  margin: 0px;
  align-items: center;
  font-size: 11px;
  border-radius:7px;
  border: 1px solid #fff;
  color:#fff;
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
  padding-top: 2px;
  margin: 0;
  align-items: center;
  font-size: 11px;
`;
const SelSubjectType = styled.select`
  padding: 0px;
  margin: 0px;
  align-items: center;
  font-size: 11px;
  border-radius:7px;
  border: 1px solid #fff;
  color:#fff;
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
  padding-top: 2px;
  margin: 0;
  align-items: center;
  font-size: 11px;
`;
const SelSubjectName = styled.select`
  padding: 0px;
  margin: 0px;
  width: 225px;
  align-items: center;
  font-size: 11px;
  border-radius:7px;
  border: 1px solid #fff;
  color:#fff;
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
  padding-top: 2px;
  margin: 0;
  align-items: center;
  font-size: 11px;
`;
const InputSubjectId = styled.input`
  padding: 0px;
  padding-left: 3px;
  margin: 0px;
  width: 126px;
  align-items: center;
  font-size: 11px;
  border-radius:7px;
  border: 1px solid #fff;
  color:#fff;
  background-color: rgba(0, 0, 0, 0);
`;
// subject_name
const OutputSubjectName = styled.div`
  padding: 0px;
  padding-left: 3px;
  margin: 0px;
  width: 225px;
  height: 13.5px;
  align-items: center;
  font-size: 11px;
  border: none;
  border-bottom: 1px solid #313131;
  background-color: rgba(0, 0, 0, 0);
`;
// BtnSearch
const BtnSearch = styled.a`
  padding: 0px 5px;
  padding-top:3px;
  height: 15px;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #313131;
  background-color: #f3f3f3;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #555555;
  }
`;
