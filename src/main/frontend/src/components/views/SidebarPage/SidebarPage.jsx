import React, { useRef, useState } from "react";

import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import styled from "styled-components";

import SidebarContent from "./SidebarContent";

function SidebarPage(props) {

  // sidebar toggle event
  const [isOpen, setIsOpen] = useState(true);
  const [xPosition, setXPosition] = useState(0);
  const sidebar = useRef();

  const toggleSidebar = () => {
    if (xPosition < 0) {
      props.getXPosition(xPosition);
      setXPosition(0);
      setIsOpen(true);
    } else {
      props.getXPosition(xPosition);
      setXPosition(-props.width);
      setIsOpen(false);
    }
  };

  return (
    <Sidebar
      ref={sidebar}
      isOpen={isOpen}
      style={{
        width: `${props.width}px`,
        height: "100%",
        transform: `translateX(${-xPosition}px)`,
      }}
    >
      <ToggleButton onClick={() => toggleSidebar()}>
        {isOpen ? (
          <CloseImage
            src="assets/img/rightArrow3.png"
            alt="rightArrowLeftArrow"
          />
        ) : (
          <OpenImage src="assets/img/leftArrow3.png" alt="leftArrow" />
        )}
      </ToggleButton>
      <SidebarContent />
    </Sidebar>
  );
}

export default SidebarPage;

const Sidebar = styled.div`
  background-color: #ffffff;
  box-shadow: -1px 0px 35px -22px gray;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transition: 0.4s ease;
  color: #202020;
  height: 100%;
  z-index: 99;
`;

const ToggleButton = styled.button`
  position: fixed;
  left: -55px;
  bottom: 15px;
  width: 55px;
  height: 40px;
  z-index: 99;
  padding-left: 7px;
  transition: 0.8s ease;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: -1px 0px 35px -10px gray;
  overflow: hidden;
  border: 0px;
  background-color: #ffcc1d;
  transition: 0.2s ease;
  cursor: pointer;
`;

const CloseImage = styled(FaAngleDoubleRight)`
  width: 100%;
  height: 100%;
  color: #fff;
`;

const OpenImage = styled(FaAngleDoubleLeft)`
  width: 100%;
  height: 100%;
  color: #fff;
`;
