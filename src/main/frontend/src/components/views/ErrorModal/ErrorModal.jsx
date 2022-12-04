import ReactModal from "react-modal";
import { useRecoilValue } from "recoil";
import { currentErrorState } from "../../recoil/currentStates";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";

export default function ErrorModal() {
  const currentErrorG = useRecoilValue(currentErrorState);

  return (
    <ReactModal
      isOpen={true}
      style={{
        overlay: {
          position: "absolute",
          inset:"auto auto 0px 0px",
          zIndex: "89",
          width: "0",
          height: "0",
        },
        content: {
          position: "absolute",
          zIndex: "90",
          inset:"auto auto 25px 10px",
          width: "260px",
          height: "30px",
          margin: "0",
          padding: "0",
          backgroundColor: "#313131",
          borderRadius: "12px",
          boxShadow: "grey 2px 2px 7px -1px",
          border: "none",
          fontSize: "14px",
          color: "#fff",transform: `${
              currentErrorG[1] ? "translate(0px,0px)" : "translate(-310px,0)"
          }`,

          transition: "0.7s ease",
        },
      }}
    >
      <Wrapper>
        <IconCaution />
        <Context>{currentErrorG[0]}</Context>
      </Wrapper>
    </ReactModal>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8px;
`;
const Context = styled.p`
  font-size: 14px;
  color: #fff;
  padding-top: 3px;
`;
const IconCaution = styled(FaBell)`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  color: #ffcc1d;
`;
