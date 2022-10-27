import React, { useState } from "react";
import styled from "styled-components";

function SearchCourseFilter(props) {
    const [isSelMajor, setIsSelMajor] = useState(true);

    const onChangeCategory = (e) => {
        setIsSelMajor(Boolean(e.target.value));
    };

    return (
        <Wrapper>
            <InnerWrap>
                <DivCategory>
                    <PCategory>카테고리 :</PCategory>
                    <SelCategory title="전공/학과 조회" onChange={onChangeCategory}>
                        <Option value={"true"}>전공/학과 조회</Option>
                        <Option value={""}>과목코드 검색</Option>
                    </SelCategory>
                </DivCategory>
                {isSelMajor ? (
                    <>
                        <DivMajor>전공/학과 조회</DivMajor>
                        <DivSubjectType></DivSubjectType>
                        <DivSubjectName></DivSubjectName>
                    </>
                ) : (
                    <>
                        <DivSubjectId>과목코드 검색</DivSubjectId>
                        <DivSubjectName></DivSubjectName>
                    </>
                )}
            </InnerWrap>
        </Wrapper>
    );
}

export default SearchCourseFilter;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  padding: 5px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #c7c7c7;
  background-color: #e2e2e2;
`;
// [카테고리] -> 1. 전공/학과 조회  2. 과목검색
const DivCategory = styled.div`
  display: flex;
  flex-direction: row;
`;
const PCategory = styled.p`
  padding: 0;
  margin: 0;
  color: #313131;
  font-size: 16px;
`;
const SelCategory = styled.select``;
const Option = styled.option``;
// 1. 전공/학과 조회
const DivMajor = styled.div`
  display: flex;
  flex-direction: row;
`;
const DivSubjectType = styled.div`
  display: flex;
  flex-direction: row;
`;
const DivSubjectName = styled.div`
  display: flex;
  flex-direction: row;
`;
// 2. 과목검색
const DivSubjectId = styled.div`
  display: flex;
  flex-direction: row;
`;