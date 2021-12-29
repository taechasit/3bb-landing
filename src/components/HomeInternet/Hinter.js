import styled from "styled-components";
import text from "../../assets/imgs/text.png";
import hinterimg from "../../assets/imgs/hinter.png";

const Hinter = () => {
  return (
    <HinterDiv>
      <div className="container">
        <div className="header">
          <img src={text} alt="" />
          <span>อินเทอร์เน็ตบ้านพร้อมความบันเทิง</span>
        </div>
        <div className="imgContainer">
          <img src={hinterimg} alt="" />
        </div>
        <div className="moreBtn">
          <a href className="more">
            ดูรายละเอียด
          </a>
        </div>
      </div>
    </HinterDiv>
  );
};

export default Hinter;

const HinterDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px 0;
    img {
      height: 38px;
    }
    span {
      color: white;
      font-size: 25px;
    }
  }
  .imgContainer {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .moreBtn {
    display: flex;
    justify-content: center;
    padding: 25px 0;
    .more {
      width: 145px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: white;
      cursor: pointer;
      background-image: linear-gradient(
        to right,
        #f5941c 0%,
        #f58320 50%,
        #f5941c 100%
      );
      border-radius: 5px;
    }
  }
`;
