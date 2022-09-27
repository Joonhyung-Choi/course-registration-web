import React, { useRef, useState } from "react";
import styled from "styled-components";

import SidebarContent from "./SidebarContent";

const Sidebar = styled.div`
  background-color: #ffffff;
  box-shadow: -1px 0px 35px -25px gray;
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
  position: relative;
  left: -55px;
  top: 93vh;
  width: 55px;
  height: 40px;
  z-index: 99;
  padding-left:7px;
  transition: 0.8s ease;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: -1px 0px 35px -9px gray;
  overflow: hidden;
  border: 0px;
  background-color:#FFCC1D;
`;

const CloseImage = styled.img`
  text-align: left;
  width: 80%;
  height: 80%;
`;

const OpenImage = styled.img`
  text-align: left;
  width: 80%;
  height: 80%;
`;

function SidebarPage(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [xPosition, setXPosition] = useState(0);
  const sidebar = useRef();

  const toggleSidebar = () => {
    if (xPosition < 0) {
      setXPosition(0);
      setIsOpen(true);
    } else {
      setXPosition(-props.width);
      setIsOpen(false);
    }
  };

  return (
    <Sidebar ref={sidebar} style={{ width: `${props.width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
      <ToggleButton onClick={() => toggleSidebar()}>
        {isOpen ? 
          <CloseImage src="assets/img/rightArrow3.png" alt="rightArrowleftArrow"/> : <OpenImage src="assets/img/leftArrow3.png" alt="leftArrow"/>}
      </ToggleButton>
      <SidebarContent />
    </Sidebar>
  );
}

export default SidebarPage;
