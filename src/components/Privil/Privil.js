import { useCallback, useState } from "react";
import styled from "styled-components";

const Privil = (props) => {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    if (index + 1 !== props.imgs.length) {
      setIndex(index + 1);
    } else if (index + 1 >= props.imgs.length) {
      setIndex(0);
    }
  }, [index, props.imgs]);

  const prevSlide = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else if (index - 1 < 0) {
      setIndex(props.imgs.length - 1);
    }
  };

  let sItem = props.imgs.map((item, index) => {
    return (
      <div className="sliderItem" key={index + "silder2"}>
        <div className="imgContainer">
          <img src={item.i} alt="" />
        </div>
        <div className="subText">
          <div className="msub">{item.t}</div>
          <div className="ssub">{item.s}</div>
        </div>
      </div>
    );
  });

  return (
    <PrivilDiv lenght={props.imgs.length} index={index}>
      <div className="container">
        <div className="header">
          <div className="text">{props.header}</div>
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
    </PrivilDiv>
  );
};

export default Privil;

const PrivilDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 26vw;
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
        font-weight: bold;
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
        width: ${(props) => props.lenght / 4 + "00"}%;
        .sliderItem {
          margin: 0 12px;
          width: 25%;
          .imgContainer {
            width: 100%;
            img {
              width: 100%;
              height: auto;
              display: block;
            }
          }
          .subText {
            padding: 20px;
            font-size: 18px;
            color: black;
            background-color: white;
            font-weight: bold;
            width: 100%;
            > div {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .ssub {
              -webkit-line-clamp: 1;
              font-weight: normal;
              font-size: 12px;
              margin-top: 16px;
              color: #ccc;
            }
            .msub {
              min-height: 54px;
            }
          }
        }
      }
    }
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
    &:hover {
      background: #0000004d;
    }
  }
  .prev {
    top: 58%;
    left: 260px;
    transform: translateY(-60%);
  }
  .next {
    top: 58%;
    right: 260px;
    transform: translateY(-60%);
  }

  @media (max-width: 1550px) {
    height: auto;
    .prev {
      top: 60%;
      left: 90px;
      transform: translateY(-60%);
    }
    .next {
      top: 60%;
      right: 90px;
      transform: translateY(-60%);
    }
    .container {
      .sliderContainer {
        .sliderList {
          width: ${(props) => props.lenght / 2 + "00"}%;
          .sliderItem {
            .subText {
              .ssub {
                -webkit-line-clamp: 1;
              }
            }
          }
        }
      }
    }
  }
`;
