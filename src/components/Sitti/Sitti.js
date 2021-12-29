import styled from "styled-components";
import { useCallback, useEffect, useState, useMemo } from "react";

import s1 from "../../assets/imgs/s3-1.jpg";
import s2 from "../../assets/imgs/s3-2.jpg";
import s3 from "../../assets/imgs/s3-3.jpg";

const Sitti = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const imgs = useMemo(() => {
    return [s1, s2, s3];
  }, []);

  const nextSlide = useCallback(() => {
    if (slideIndex + 1 < imgs.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex + 1 >= imgs.length) {
      setSlideIndex(0);
    }
  }, [slideIndex, imgs]);

  const prevSlide = () => {
    if (slideIndex - 1 >= 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex - 1 < 0) {
      setSlideIndex(imgs.length - 1);
    }
  };

  useEffect(() => {
    const int = setInterval(nextSlide, 7000);
    return () => {
      clearInterval(int);
    };
  }, [nextSlide]);

  let sItem = imgs.map((item, index) => {
    return (
      <div
        className={slideIndex === index ? "sliderItem active" : "sliderItem"}
        key={index + "silder3"}
      >
        <div className="imgContainer">
          <img src={item} alt="" />
        </div>
      </div>
    );
  });

  return (
    <SittiDiv index={slideIndex} lenght={imgs.length}>
      <div className="headeContainer">
        <div className="header">สิทธิพิเศษสำหรับลูกค้า 3BB</div>
      </div>
      <div className="container">
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
    </SittiDiv>
  );
};

export default Sitti;

const SittiDiv = styled.div`
  background-color: #0f2539;
  overflow: hidden;
  position: relative;
  height: 40vw;
  .container {
    width: 70%;
    margin: 0 auto;
  }
  .btn-slide {
    z-index: 4;
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
    top: 55%;
    left: 190px;
    transform: translateY(-60%);
  }
  .next {
    top: 55%;
    right: 190px;
    transform: translateY(-60%);
  }
  .headeContainer {
    display: flex;
    justify-content: center;
    .header {
      padding: 50px 0;
      font-size: 36px;
      color: white;
    }
  }
  .sliderContainer {
    padding: 12px 0 52px 0;
    .sliderList {
      display: flex;
      transition: all 0.2s ease-in;
      transform: translateX(-${(props) => (props.index / props.lenght) * 100}%);
      width: ${(props) => props.lenght + "00"}%;
      .sliderItem {
        margin: 0 12px;
        width: 100%;
        opacity: 0.5;
        transform: scale(1);
        transition: all 0.4s ease-in;
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
      .active {
        transform: scale(1.1);
        opacity: 1;
        z-index: 3;
      }
    }
  }

  @media (max-width: 1550px) {
    height: auto;
    .prev {
    top: 60%;
    left: 80px;
    transform: translateY(-60%);
  }
  .next {
    top: 60%;
    right: 80px;
    transform: translateY(-60%);
  }
  }
`;
