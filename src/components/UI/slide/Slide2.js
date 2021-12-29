import { useCallback, useEffect, useState, useMemo } from "react";
import useWindowDimensions from "../../../customHook/useWindowDimensions";
import styled from "styled-components";

import bg from "../../../assets/imgs/bgpromo.jpg";
import s1 from "../../../assets/imgs/s2-1.jpg";
import s2 from "../../../assets/imgs/s2-2.jpg";
import s3 from "../../../assets/imgs/s2-3.jpg";
import s4 from "../../../assets/imgs/s2-4.jpg";
import s5 from "../../../assets/imgs/s2-5.jpg";
import s6 from "../../../assets/imgs/s2-6.jpg";
import s7 from "../../../assets/imgs/s2-7.jpg";
import s8 from "../../../assets/imgs/s2-8.jpg";
const Slide2 = () => {
  const imgs = useMemo(() => {
    return [
      { i: s1, t: "จ่ายบิล 3BB รับส่วนลดฟินๆ สูงสุด 50 บาท" },
      { i: s2, t: "3BB X CHERISHFRUIT" },
      { i: s3, t: "3BB X Cozxy" },
      { i: s4, t: "3BB X MOOTAEWORLD" },
      { i: s5, t: "Deal of the Day" },
      { i: s6, t: "Highlight of the month Dec 2021" },
      { i: s7, t: "แจกโชคใหญ่ปลายปี" },
      { i: s8, t: "3BB X KKDAY" },
    ];
  }, []);

  const [index, setIndex] = useState(0);
  const [perSlide, setPerSlide] = useState(4);
  const { width } = useWindowDimensions();

  const nextSlide = useCallback(() => {
    if (index + 1 !== Math.ceil(imgs.length / perSlide)) {
      setIndex(index + 1);
    } else if (index + 1 >= Math.ceil(imgs.length / perSlide)) {
      setIndex(0);
    }
  }, [index, imgs, perSlide]);

  const prevSlide = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else if (index - 1 < 0) {
      setIndex(Math.ceil(imgs.length / perSlide) - 1);
    }
  };

  useEffect(() => {
    if (width < 1550) {
      setPerSlide(2);
      setIndex(0);
    } else {
      setPerSlide(4);
      setIndex(0);
    }
  }, [width]);

  useEffect(() => {
    const int = setInterval(nextSlide, 7000);
    return () => {
      clearInterval(int);
    };
  }, [nextSlide]);

  let sItem = imgs.map((item, index) => {
    return (
      <div className="sliderItem" key={index + "silder2"}>
        <div className="imgContainer">
          <img src={item.i} alt="" />
        </div>
        <div className="subText">{item.t}</div>
      </div>
    );
  });
  return (
    <Slider lenght={Math.ceil(imgs.length / perSlide)} index={index}>
      <div className="container">
        <div className="header">
          <div className="text">{"โปรโมชั่นแนะนำ"}</div>
          <div className="btn">{"ดูทั้งหมด >"}</div>
        </div>
        <div className="sliderContainer">
          <div className="sliderList">{sItem}</div>
        </div>
      </div>
      <button className="btn-slide prev" onClick={prevSlide}>
        {"<"}
      </button>
      <button className="btn-slide next" onClick={nextSlide}>
        {">"}
      </button>
    </Slider>
  );
};

export default Slide2;

const Slider = styled.div`
  background: #0f2539 url(${bg});
  position: relative;
  height: 36vw;
  .btn-slide {
    width: 60px;
    height: 60px;
    font-size: 2rem;
    color: #f27025;
    border-radius: 50%;
    background: #00000014;
    border: none;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #0000004d;
    }
  }
  .prev {
    top: 50%;
    left: 260px;
    transform: translateY(-60%);
  }
  .next {
    top: 50%;
    right: 260px;
    transform: translateY(-60%);
  }
  .container {
    width: 70%;
    margin: 0 auto;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      .text {
        padding: 26px 12px;
        font-size: 36px;
      }
      .btn {
        background-color: transparent;
        border-radius: 32px;
        padding: 8px 25px;
        border: 1px solid white;
        cursor: pointer;
      }
    }
    .sliderContainer {
      overflow-x: hidden;
      padding: 12px 0 52px 0;
      .sliderList {
        display: flex;
        transition: all 0.5s ease-in;
        transform: translateX(
          -${(props) => (props.index / props.lenght) * 100}%
        );
        width: ${(props) => props.lenght + "00"}%;
        .sliderItem {
          margin: 0 12px;
          width: 25%;
          .imgContainer {
            width: 100%;
            img {
              width: 100%;
              height: auto;
            }
          }
          .subText {
            font-size: 20px;
            color: white;
            font-weight: bold;
          }
        }
      }
    }
  }

  @media (max-width: 1550px) {
    height: auto;
    .prev {
      top: 50%;
      left: 140px;
      transform: translateY(-60%);
    }
    .next {
      top: 50%;
      right: 140px;
      transform: translateY(-60%);
    }
  }
`;
