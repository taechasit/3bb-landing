import styled from "styled-components";
import headline from "../../assets/imgs/3BBhead.jpg";
import foot from "../../assets/imgs/nfoot.png";
const News = (props) => {
  let nItem = props.data.map((item, index) => {
    return (
      <div className="nItem" key={index + "keys"}>
        <div className="imgContainer">
          <img src={item.i} alt="" />
        </div>
        <div className="text">
          <div className="head">{item.h}</div>
          <div className="date">{item.d}</div>
          <div className="subtext">{item.s}</div>
        </div>
      </div>
    );
  });
  return (
    <NewsDiv news={props.news}>
      <div className="container">
        <div className="headerContainer">
          <div className="header">
            <div className="lmenu" onClick={props.newsOne}>
              <div className="inner">
                <img src={headline} alt="" />
                <span>&nbsp;ข่าวสารและกิจกรรม</span>
              </div>
            </div>
            <div className="rmenu" onClick={props.newsTwo}>
              กิจกรรมเพื่อสังคม
            </div>
          </div>
          <div className="btn">{"ดูทั้งหมด >"}</div>
        </div>
        <div className="listContainer">{nItem}</div>
      </div>
      <img className="footerimg" src={foot} alt="" />
    </NewsDiv>
  );
};

export default News;

const NewsDiv = styled.div`
  background-color: white;
  .footerimg {
    width: 100%;
    display: block;
  }
  .container {
    width: 70%;
    margin: 0 auto;
    padding: 60px 0;
    .headerContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn {
        background-color: transparent;
        margin-top: 10px;
        border-radius: 32px;
        padding: 8px 25px;
        border: 1px solid #f27025;
        color: #f27025;
        cursor: pointer;
      }
    }
    .listContainer {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 26px;
      gap: 18px;
      .nItem {
        width: 49%;
        display: flex;
        .imgContainer {
          width: 50%;
          img {
            width: 100%;
            display: block;
          }
        }
        .text {
          width: 50%;
          padding: 15px;
          .head {
            font-size: 20px;
            font-weight: bold;
          }
          .date {
            color: #f8941c;
            font-size: 13px;
            padding: 8px 0;
          }
          .subtext {
            color: #777;
            font-size: 14px;
          }
        }
      }
    }
    .header {
      display: flex;
      align-items: center;
      .lmenu {
        padding: 16px;
        margin-right: 16px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        border-bottom: 4px solid
          ${(props) => (props.news === 1 ? "#f27025" : "#ccc")};
        .inner {
          display: flex;
          align-items: center;
          span {
            margin-top: 10px;
          }
        }
      }
      .rmenu {
        padding: 16px;
        margin-top: 10px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        border-bottom: 4px solid
          ${(props) => (props.news === 2 ? "#f27025" : "#ccc")};
      }
    }
  }

  @media (max-width: 1550px) {
    .container {
      .listContainer {
        .nItem {
          width: auto;
        }
      }
    }
  }
`;
