import React from "react";
import styled from "styled-components";

function AdminCheckRegister(props) {
  const userList = props.user;
  const userList2 = userList.map((item) => {
    return `${item.userEntity.userName}(${item.userEntity.userId})`;
  });

  let checkRegisterButtonState = "";

  function checkRegisterButtonClicked() {
    checkRegisterButtonState = userList2;
    console.log(checkRegisterButtonState);
    alert(userList2);
  }
  return (
    <CheckRegisterButton onClick={checkRegisterButtonClicked}>
      인원확인
    </CheckRegisterButton>
  );
}

const CheckRegisterButton = styled.button`
  display: flex;
  font-size: 11px;
  padding: 2.2px;
  border: 1px solid #111;
  border-radius: 4px;
  margin: auto;
`;

export default AdminCheckRegister;
