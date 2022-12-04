import React from "react";
import { useRecoilState } from "recoil";
import { registerSwitchState } from "../../recoil/currentStates";
import styled from "styled-components";

export default function RegisterSwitch() {
  const [registerSwitchG, setRegisterSwitchG] =
    useRecoilState(registerSwitchState);

  return (
    <Wrapper>
      <SwitchBody
        onClick={() => {
          setRegisterSwitchG((prev) => !prev);
        }}
      >
        <SwitchThumb>
          <SwitchThumbTop
            style={registerSwitchG ? { left: "2px" } : { left: "25px" }}
          />
          <SwitchThumbBottom
            style={registerSwitchG ? { left: "2px" } : { left: "25px" }}
          />
        </SwitchThumb>
        <SwitchContent style={{ left: "0", marginLeft: "4px" }}>
          예비
        </SwitchContent>
        <SwitchContent style={{ right: "0", marginRight: "4px" }}>
          전체
        </SwitchContent>
      </SwitchBody>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  padding-right: 5px;
  top: 0px;
  right: 0px;
`;
const SwitchBody = styled.div`
  display: flex;
  position: relative;
  width: 54px;
  height: 25px;
  background: rgb(129, 138, 146);
  border-radius: 13px;
  border: 2px solid rgb(210 210 210);
  cursor: pointer;
`;
const SwitchThumb = styled.div``;
const SwitchThumbTop = styled.div`
  display: flex;
  position: absolute;
  z-index: 25;
  width: 23px;
  height: 17px;
  top: -1px;
  border-radius: 13px;
  background: rgb(255, 247, 216);
  border: 1px solid rgb(208 201 174);
  transition: left 0.3s ease;
`;
const SwitchThumbBottom = styled.div`
  display: flex;
  position: absolute;
  z-index: 20;
  width: 23px;
  height: 17px;
  top: 2px;
  border-radius: 13px;
  background: rgb(208 201 174);
  border: 1px solid rgb(208 201 174);
  transition: left 0.3s ease;
`;
const SwitchContent = styled.p`
  display: flex;
  position: absolute;
  font-size: 8px;
  color: #ffffff;
  top: 50%;
  transform: translate(0, -50%);
`;
