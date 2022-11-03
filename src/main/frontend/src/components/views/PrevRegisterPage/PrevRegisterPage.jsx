import React from "react";
import {useLocation} from "react-router-dom";

import styled from "styled-components";
import PrevRegisterList from "./PrevRegisterList";
import MyPrevRegisterList from "./MyPrevRegisterList";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

const SizingBox = styled.div`
  width: 90%;
  height: 90%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

const PrevRegisterBox = styled.div`
  width : 100%;
  height : 50%;
  overflow : auto;
  
`

const MyPrevRegisterBox = styled.div`
  width : 100%;
  height : 50%;
  overflow : auto;
`

function PrevRegisterPage() {
    // 방법 1
    // 여기서 axios 통신으로 과목 정보(registerButtonState)를 db에 저장
    // 내가 신청한 과목이 반영된 유저의 예비수강신청 리스트를 반환받아 MyPrevRegisterList에 전달
    // 생각해본 방법 : useNavigate를 이용해 PrevRegisterPage를 다시 호출하면서 파라미터 값으로 신청 과목 리스트 전달
    // 이후 PrevRegisterPage에서 MyPrevRegisterList로 리스트를 다시 뿌려주는 구조로 해보면 어떨까...

    // 방법 2
    // 이 방법이 더 좋은듯?
    // PrevRegisterPage를 호출할때마다 PrevRegisterpage에서 axios를 통해 유저의 신청 과목 리스트를 받아오면
    // 굳이 여기서 useNavigate를 사용하지 않아도 괜찮을 것 같음

    // 알고리즘 순서
    // 1. 유저가 취소할 과목의 취소 버튼 클릭
    // 2. registerCancelButtonState의 값이 취소할 과목의 정보로 변경
    // 3. 취소할 과목의 정보를 axios를 통해 백엔드에 전달(방법 1은 여기까지만 하면 됨)
    // 4. axios 통신을 통해 유저의 신청 과목 리스트를 리턴받아옴
    // 5. 해당 정보를 어떻게든 PrevRegisterpage 혹은 그 하위의 List 컴포넌트들에 전달(방법 2 끝)


    const location = useLocation();
    const courseList = location.state.courseList;

  return (
    <Wrapper>
      <SizingBox>
          <PrevRegisterBox>
              <PrevRegisterList courseList={courseList}/>
          </PrevRegisterBox>
          <hr/>
          <MyPrevRegisterBox>
              <MyPrevRegisterList courseList={courseList}/>
          </MyPrevRegisterBox>
      </SizingBox>
    </Wrapper>
  );
}

export default PrevRegisterPage;
