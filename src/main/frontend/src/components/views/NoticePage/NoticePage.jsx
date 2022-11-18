import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

import { useRecoilState } from "recoil";
import { currentPageState } from "../../recoil/currentStates";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";

import styled from "styled-components";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

function NoticePage(props) {
  const location = useLocation();

  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/") {
      setCurrentPageG("");
    }
  }, []);

  const [Notices, setNotices] = useState([
    {
      index: 0,
      src: "/assets/img/notice1.jpg",
    },
    {
      index: 1,
      src: "/assets/img/notice2.jpg",
    },
    {
      index: 2,
      src: "/assets/img/notice1.jpg",
    },

    {
      index: 3,
      src: "/assets/img/notice2.jpg",
    },

    {
      index: 4,
      src: "/assets/img/notice1.jpg",
    },
    {
      index: 5,
      src: "/assets/img/notice2.jpg",
    },
  ]);

  SwiperCore.use([Navigation, Pagination]);

  return (
    <Wrapper>
      <SizingBox>
        <InnerWrap>
          <Swiper
            modules={[Navigation, Pagination]}
            className="swiper_container_notice"
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            loopedSlides={3}
            pagination={{ el: ".swiper_pagination_notice", clickable: false }}
            navigation={{
              nextEl: ".swiper_button_next_notice",
              prevEl: ".swiper_button_prev_notice",
            }}
            scrollbar={{ draggable: true, el: null }}
          >
            {Notices.map((idx) => (
              <SwiperSlide className="swiper_slide_notice" key={idx.index}>
                <ImgNotice src={idx.src} />
              </SwiperSlide>
            ))}
          </Swiper>
          <BtnSwiperPrev className="swiper_button_prev_notice">
            <ImgSwiperPrev />
          </BtnSwiperPrev>
          <BtnSwiperNext className="swiper_button_next_notice">
            <ImgSwiperNext />
          </BtnSwiperNext>
          <DivPagination>
            <div className="swiper_pagination_notice"></div>
          </DivPagination>
        </InnerWrap>
      </SizingBox>
    </Wrapper>
  );
}

export default NoticePage;

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

const InnerWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ImgNotice = styled.img`
  display: flex;
  width: 90%;
  height: auto;
  margin: auto;
`;
const BtnSwiperPrev = styled.a`
  position: absolute;
  z-index: 50;
  width: auto;
  height: auto;
  bottom: 50%;
  left: 0px;
  transform: translate(0, 0);
`;
const ImgSwiperPrev = styled(HiChevronLeft)`
  width: 50px;
  height: 50px;
  color: #313131;
`;
const BtnSwiperNext = styled.a`
  position: absolute;
  z-index: 50;
  width: auto;
  height: auto;
  bottom: 50%;
  right: 0px;
  transform: translate(0, 0);
`;
const ImgSwiperNext = styled(HiChevronRight)`
  width: 50px;
  height: 50px;
  color: #313131;
`;
const DivPagination = styled.div`
  position: absolute;
  z-index: 50;
  width: auto;
  height: auto;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
