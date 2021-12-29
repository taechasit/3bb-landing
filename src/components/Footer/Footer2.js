import styled from "styled-components";
import logo from "../../assets/imgs/logo.jpg";
import db from "../../assets/imgs/db.png";
import f1 from "../../assets/imgs/f1.png";
import f2 from "../../assets/imgs/f2.png";
import f3 from "../../assets/imgs/f3.png";
import f4 from "../../assets/imgs/f4.png";
import f5 from "../../assets/imgs/f5.png";
const Footer2 = () => {
  return (
    <FooterDiv>
      <div className="container">
        <div className="lmenu">
          <h3>บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน)</h3>
          <p>
            200 หมู่ 4 ถนนแจ้งวัฒนะ ตำบลปากเกร็ด อำเภอปากเกร็ด จังหวัดนนทบุรี
            11120
          </p>
          <p>โทรศัพท์ : 66-2-100-2100 แฟกซ์ : 66-2-100-2121</p>
          <p>สำหรับร้องเรียน : 66-2-100-1100</p>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="rmenu">
          <div>
            <div className="textl">
              รองรับโดย
              <img src={db} alt="" />
            </div>
            <div className="logoContainer">
              <p>
                <img src={f1} alt="" />
              </p>
              <p>
                <img src={f2} alt="" />
              </p>
              <p>
                <img src={f3} alt="" />
              </p>
              <p>
                <img src={f4} alt="" />
              </p>
              <p>
                <img src={f5} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="lf">
        <p>
          © 2020 บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน) All rights reserved
        </p>
        <p>นโยบายการคุ้มครองข้อมูลส่วนบุคคล | ช่วยเหลือ</p>
      </div>
    </FooterDiv>
  );
};

export default Footer2;

const FooterDiv = styled.div`
  background: #fff;
  padding: 55px 0 0 0;
  hr {
    margin-top: 55px;
    background-color: #ccc;
  }
  .lf {
    width: 70%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    flex-wrap: wrap;
  }
  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    > div {
      width: 33%;
    }
    .logo {
      display: flex;
      justify-content: center;
    }
    .lmenu {
      h3 {
        color: #f5941c;
        font-size: 24px;
        font-weight: bold;
      }
      p {
        font-size: 16px;
        margin: 8px 0;
      }
    }
    .rmenu {
      justify-content: center;
      display: flex;
      .textl {
        align-items: center;
        display: flex;
        img {
          padding: 0 8px;
        }
      }
      .logoContainer {
        justify-content: center;
        align-items: center;
        display: flex;
        p {
          padding: 8px;
        }
      }
    }
  }

  @media (max-width: 1550px) {
    .lf {
      justify-content: center;
    }
    hr {
      margin-top: 25px;
    }
    .container {
      gap: 22px;
      > div {
        width: 100%;
      }
      .lmenu {
        text-align: center;
      }
      .rmenu {
        .textl {
          justify-content: center;
          margin: 12px 0;
          img {
            padding: 0 8px;
          }
        }
        .logoContainer {
          justify-content: center;
          display: flex;
          p {
            padding: 8px;
          }
        }
      }
    }
  }
`;
