import React from "react";
import styled from "styled-components";

const StyledMennuButton = styled.button`
  width: 200px;
  height: 35px;
  background-color: #dee1e6;
  border: 1px solid #dee1e6;
  border-radius: 10px 10px 0px 0px;
  &:hover {
    background-color: #eff0f2;
    border: 1px solid #eff0f2;
  }
  &:active {
    background-color: white;
    border: 1px solid white;
  }
`;

function MennuButton({ children }) {
  return <StyledMennuButton>{children}</StyledMennuButton>;
}

export default MennuButton;
