import { useCallback, useEffect, useState, useMemo } from "react";
import styled from "styled-components";

import s1 from "../../../assets/imgs/s1.jpg";
import s2 from "../../../assets/imgs/s2.jpg";
import s3 from "../../../assets/imgs/s3.jpg";

const Slide1 = (props) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const imgs = useMemo(() => {
    return [s1, s2, s3];
  }, []);

  const nextSlide = useCallback(() => {
    if (slideIndex !== imgs.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imgs.length) {
      setSlideIndex(1);
    }
  }, [slideIndex, imgs]);

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imgs.length);
    }
  };

  useEffect(() => {
    const int = setInterval(nextSlide, 7000);
    return () => {
      clearInterval(int);
    };
  }, [nextSlide]);

  let sliderContent = imgs.map((data, index) => {
    return (
      <div
        key={index + "slider"}
        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
      >
        <img src={data} alt="slider" />
      </div>
    );
  });
  return (
    <Slider className="container-slider">
      {sliderContent}
      <button className="btn-slide prev" onClick={prevSlide}>{"<"}</button>
      <button className="btn-slide next" onClick={nextSlide}>{">"}</button>
    </Slider>
  );
};

export default Slide1;

const Slider = styled.div`
  width: 100%;
  height: 40vw;
  margin: 0 auto;
  position: relative;
  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    overflow: hidden;
    transition: opacity ease-in-out 0.5s;
  }
  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .active-anim {
    opacity: 1;
  }
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
    &:hover{
        background: #0000004d;
    }
  }
  .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }
  .next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }
`;
