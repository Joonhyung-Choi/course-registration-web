import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  courseListState,
  prevRegisterFilteringState,
} from "../../recoil/userDataStates";
import styled from "styled-components";
import { BsCaretRightFill } from "react-icons/bs";

function PrevRegisterFilter() {
  let dum = 1;
  const courseListG = useRecoilValue(courseListState);
  const [filteringPRG, setFilteringPRG] = useRecoilState(
    prevRegisterFilteringState
  );

  const [isSelMajor, setIsSelMajor] = useState(true);
  const [subjectTypeValue, setSubjectTypeValue] = useState("");
  const [majorValue, setMajorValue] = useState("");
  const [subjectNameValue, setSubjectNameValue] = useState("");
  const [subjectIdInput, setSubjectIdInput] = useState("");

  useEffect(() => {
    if (subjectIdInput.length === 5) {
      setFilteringPRG(
        courseListG.filter((item) => {
          if (String(item.subjectId) === subjectIdInput) {
            return item;
          }
        })
      );
    }
    if (subjectIdInput.length === 0) {
      setFilteringPRG(courseListG);
    }
  }, [subjectIdInput]);

  useEffect(() => {
    if (isSelMajor) {
      setFilteringPRG(
        courseListG.filter((item) => {
          if (item.major === majorValue) {
            if (subjectTypeValue.includes(item.subject_type)) {
              if (subjectNameValue === "") {
                return item;
              } else if (item.subject_name === subjectNameValue) {
                return item;
              }
            } else if (subjectTypeValue === "") {
              if (subjectNameValue === "") {
                return item;
              } else if (item.subject_name === subjectNameValue) {
                return item;
              }
            }
          } else if (majorValue === "") {
            if (subjectTypeValue.includes(item.subject_type)) {
              if (subjectNameValue === "") {
                return item;
              } else if (item.subject_name === subjectNameValue) {
                return item;
              }
            } else if (subjectTypeValue === "") {
              if (subjectNameValue === "") {
                return item;
              } else if (item.subject_name === subjectNameValue) {
                return item;
              }
            }
          }
        })
      );
    } else {
      if (subjectIdInput.length === 5) {
        setFilteringPRG(
          courseListG.filter((item) => {
            if (String(item.subjectId) === subjectIdInput) {
              return item;
            }
          })
        );
      }
      if (subjectIdInput.length === 0) {
        setFilteringPRG(courseListG);
      }
    }
  }, [courseListG]);

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
        setFilteringPRG(courseListG);
      }
    } else if (isSelMajor) {
      dum = 1;
      if (dum === 1) {
        setFilteringPRG(courseListG);
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
    getFilterList();
  };
  // subjectIdInput Event
  const onChangeSubjectId = (e) => {
    setSubjectIdInput(e.target.value);
  };
  // get filteringPRG Event
  const getFilterList = () => {
    setFilteringPRG(
      courseListG.filter((item) => {
        if (item.major === majorValue) {
          if (subjectTypeValue.includes(item.subject_type)) {
            if (subjectNameValue === "") {
              return item;
            } else if (item.subject_name === subjectNameValue) {
              return item;
            }
          } else if (subjectTypeValue === "") {
            if (subjectNameValue === "") {
              return item;
            } else if (item.subject_name === subjectNameValue) {
              return item;
            }
          }
        } else if (majorValue === "") {
          if (subjectTypeValue.includes(item.subject_type)) {
            if (subjectNameValue === "") {
              return item;
            } else if (item.subject_name === subjectNameValue) {
              return item;
            }
          } else if (subjectTypeValue === "") {
            if (subjectNameValue === "") {
              return item;
            } else if (item.subject_name === subjectNameValue) {
              return item;
            }
          }
        }
      })
    );
  };
  return (
    <Wrapper>
      <InnerWrap>
        <BoardTrg />
        <DivCategory>
          <PCategory>????????????&nbsp;</PCategory>
          <SelCategory onClick={onClickCategory} onChange={onChangeCategory}>
            <Option value={"true"}>??????/?????? ??????</Option>
            <Option value={""}>???????????? ??????</Option>
          </SelCategory>
        </DivCategory>
        {isSelMajor ? (
          <>
            <DivMajor>
              <PMajor>??????&nbsp;</PMajor>
              <SelMajor
                onClick={onChangeMajor}
                onChange={onChangeMajor}
                value={majorValue}
              >
                <Option value={""}>????????????</Option>
                <Option value={"??????????????????"}>??????????????????</Option>
                <Option value={"????????????"}>????????????</Option>
              </SelMajor>
            </DivMajor>
            <DivSubjectType>
              <PSubjectType>????????????&nbsp;</PSubjectType>
              <SelSubjectType
                onClick={onChangeSubjectType}
                onChange={onChangeSubjectType}
                value={subjectTypeValue}
              >
                <Option value={""}>????????????</Option>
                <Option value={["????????????", "????????????"]}>??????/????????????</Option>
                <Option value={["????????????", "????????????"]}>??????/????????????</Option>
              </SelSubjectType>
            </DivSubjectType>
            <DivSubjectName>
              <PSubjectName>?????????&nbsp;</PSubjectName>
              <SelSubjectName
                title="????????????"
                onChange={onChangeSubjectNameSel}
                onClick={onChangeSubjectNameSel}
                value={subjectNameValue}
              >
                <Option value={""}>????????????</Option>
                {filteringPRG.map((item) => {
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
              <PSubjectId>????????????&nbsp;</PSubjectId>
              <InputSubjectId
                name="subjectId_input"
                type="number"
                placeholder="??????????????? ???????????????"
                value={subjectIdInput}
                min="1"
                max="5"
                onChange={onChangeSubjectId}
              />
            </DivSubjectId>
            <DivSubjectName>
              <PSubjectName>?????????&nbsp;</PSubjectName>
              <OutputSubjectName>
                {subjectIdInput.length === 5 &&
                  filteringPRG.map((item) => {
                    if (String(item.subjectId) === subjectIdInput) {
                      return item.subject_name;
                    }
                  })}
              </OutputSubjectName>
            </DivSubjectName>
          </>
        )}
      </InnerWrap>
    </Wrapper>
  );
}

export default PrevRegisterFilter;

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
  width: 725px;
  height: 23px;
  padding: 2px;
  padding-left: 8px;
  border-radius: 4px;
  background-color: rgb(129, 138, 146);
  align-items: center;
  color: #fff;
`;
const BoardTrg = styled(BsCaretRightFill)`
  display: flex;
  position: absolute;
  height: 31px;
  width: auto;
  right: -17px;
  color: rgb(129, 138, 146);
`;
// [????????????] -> 1. ??????/?????? ??????  2. ????????????
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
  height: 15px;
  align-items: center;
  font-size: 11px;
  border-radius: 7px;
  border: 1px solid #fff;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
`;
const Option = styled.option`
  align-items: center;
  font-size: 11px;
  color: #313131;
`;
// 1. ??????/?????? ??????
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
  height: 15px;
  align-items: center;
  font-size: 11px;
  border-radius: 7px;
  border: 1px solid #fff;
  color: #fff;
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
  height: 15px;
  align-items: center;
  font-size: 11px;
  border-radius: 7px;
  border: 1px solid #fff;
  color: #fff;
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
  height: 15px;
  width: 225px;
  align-items: center;
  font-size: 11px;
  border-radius: 7px;
  border: 1px solid #fff;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
`;
// 2. ????????????
// subjectId
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
  padding: 1px 0px 0px 4px;
  margin: 0px;
  height: 15px;
  width: 120px;
  align-items: center;
  font-size: 11px;
  border-radius: 7px;
  border: 1px solid #fff;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  &::placeholder {
    color: #cccccc;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
// subject_name
const OutputSubjectName = styled.div`
  padding: 0px;
  padding-left: 3px;
  margin: 0px;
  width: 210px;
  height: 13px;
  align-items: center;
  font-size: 11px;
  border: none;
  border-bottom: 1px solid #ffffff;
  background-color: rgba(0, 0, 0, 0);
`;
