import React from "react";
import { useRecoilValue } from "recoil";
import { userRegisterState } from "../../recoil/userDataStates";
import styled from "styled-components";
import TimeTableClass from "./TimeTableClass";

function TimeTable() {
  const registeredClass = useRecoilValue(userRegisterState);

  return (
    <Wrapper>
      <TableOuter>
        <TableWrapper>
          <Table>
            <colgroup>
              <col width="20%" />
              <col width="16%" />
              <col width="16%" />
              <col width="16%" />
              <col width="16%" />
              <col width="16%" />
            </colgroup>
            <thead>
              <Tr>
                <Th style={{ borderTopLeftRadius: "10px" }}>시간</Th>
                <TdDay>월요일</TdDay>
                <TdDay>화요일</TdDay>
                <TdDay>수요일</TdDay>
                <TdDay>목요일</TdDay>
                <TdDay style={{ borderTopRightRadius: "10px" }}>금요일</TdDay>
              </Tr>
            </thead>
            <tbody>
              <Tr>
                <Th>
                  1교시
                  <br />
                  09:00~09:50
                </Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>
                  2교시
                  <br />
                  10:00~10:50
                </Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>
                  3교시
                  <br />
                  11:00~11:50
                </Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>
                  4교시
                  <br />
                  12:00~12:50
                </Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>
                  5교시
                  <br />
                  13:00~13:50
                </Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>
                  6교시
                  <br />
                  14:00~14:50
                </Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>
                  7교시
                  <br />
                  15:00~15:50
                </Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>
                  8교시
                  <br />
                  16:00~16:50
                </Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>
                  9교시
                  <br />
                  17:00~17:50
                </Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </tbody>
          </Table>
          {registeredClass.map((item) => {
            return <TimeTableClass item={item} />;
          })}
        </TableWrapper>
      </TableOuter>
    </Wrapper>
  );
}

export default TimeTable;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  text-align: center;
  margin: auto;
`;
const TableOuter = styled.div`
  margin: 0 20px;
`;
const TableWrapper = styled.div`
  margin: auto;
  position: relative;
`;
const Table = styled.table`
  margin: auto;
  padding: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(237 226 182);
  color: #404040;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  table-layout: fixed;
`;
const Tr = styled.tr`
  padding: 0;
  margin: 0;
`;
const TdDay = styled.td`
  padding: 10px;
  background-color: #fff7d8;
  border-left: solid 1px white;
  border-bottom: solid 1px white;
  white-space: nowrap;
`;
const Th = styled.td`
  padding: 10px;
  background-color: #fff7d8;
  overflow: hidden;
`;
const Td = styled.td`
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
`;
