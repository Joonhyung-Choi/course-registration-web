import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userRegisterState } from "../../recoil/userDataStates";
import TimeTableClass from "./MiniTableClass";

function MiniTable() {
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
                <Th>시간</Th>
                <TdDay>월</TdDay>
                <TdDay>화</TdDay>
                <TdDay>수</TdDay>
                <TdDay>목</TdDay>
                <TdDay>금</TdDay>
              </Tr>
            </thead>
            <tbody>
              <Tr>
                <Th>1교시</Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>2교시</Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>3교시</Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>4교시</Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>5교시</Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>6교시</Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>7교시</Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>8교시</Th>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>9교시</Th>
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

export default MiniTable;

const Wrapper = styled.div`
  width: 100%;
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
  background-color: #ffcc1d;
  color: #404040;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  table-layout: fixed;
  font-size: 12px;
`;
const Tr = styled.tr`
  padding: 0;
  margin: 0;
  /* border-bottom: 2px solid #ffca1d3b; */
  height: 27px;
`;
const TdDay = styled.td`
  padding: 0;
  background-color: #ffcc1d;
  white-space: nowrap;
  padding-top: 4px;
`;
const Th = styled.td`
  background-color: #ffcc1d;
  // border-bottom: solid 1px white;
  overflow: hidden;
  padding-top: 4px;
`;
const Td = styled.td`
  padding: 0;
  /* border-left: solid 1px white; */
  background-color: #fff;
  color: #000000;
`;
