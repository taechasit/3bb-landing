import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/imgs/logo.jpg";
import pf from "../../assets/imgs/pf.png";

const Header = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover((prveState) => {
      return !prveState;
    });
  };
  return (
    <HeaderDiv isHover={hover}>
      <div className="header1Container">
        <div className="header1">
          <div className="lmenu">
            <div className="mainMenu" onMouseOver={onHover}>
              เมนูหลัก
            </div>
            <HiddenMenu>
              <div>
                <h4>เมนูหลัก</h4>
                <p>ทีวีและความบันเทิง</p>
                <p>โปรโมชั่น</p>
                <p>ช้อปปิ้ง</p>
                <p>พ้อยต์และสิทธิพิเศษ</p>
                <p>ศูนย์บริการ</p>
                <p>ข่าวสารและกิจกรรม</p>
                <p>CSR</p>
                <p>ช่วยเหลือ</p>
              </div>
              <div className="vl"></div>
              <div>
                <h4>อินเทอร์เน็ตบ้าน</h4>
                <p>3BB GIGA Fiber</p>
                <p>3BB GIGA TV</p>
              </div>
              <div>
                <h4>อินเทอร์เน็ตองค์กร</h4>
                <p>Corperate Solotion</p>
                <p>3BB Dark Fiber</p>
              </div>
              <div>
                <h4>VAS</h4>
                <p>3BB WiFi</p>
                <p>3BB CloudTv</p>
                <p>3BB Movie</p>
                <p>3BB Voice</p>
                <p>3BB Game Hub</p>
              </div>
              <div>
                <h4>อื่นๆ</h4>
                <p>3BB Mail</p>
              </div>
            </HiddenMenu>
          </div>
          <div className="logo">
            <img src={logo} width={100} height={38} alt="" />
          </div>
          <div className="rmenu">
            <div className="menu">ช่องทางชำระค่าบริการ</div> <div>|</div>{" "}
            <div className="menu">ช่วยเหลือ</div>
            <div className="login">
              <img src={pf} alt="" width={22} height={22} />
              <div>เข้าสู่ระบบ</div>
            </div>
            <div className="changeLanguage">
              <div>{"TH ▼"}</div>
              <div className="dropDown">
                <div>TH</div>
                <div>EN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header2Container">
        <div className="header2">
          <ul className="navMenu">
            <li>
              <a href>หน้าแรก</a>
            </li>
            <li>
              <a href>แพ็กเกจอินเทอร์เน็ต</a>
            </li>
            <li>
              <a href>ทีวีและความบันเทิง</a>
            </li>
            <li>
              <a href>โปรโมชั่น</a>
            </li>
            <li>
              <a href>พอยต์และสิทธิพิเศษ</a>
            </li>
            <li>
              <a href>ศูนย์บริการ</a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;

const HiddenMenu = styled.div`
  width: 100%;
  padding: 35px 65px;
  background: linear-gradient(to bottom, #fb7a09, #f99d34);
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  top: 75px;
  left: 0;
  color: white;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
  transition: all 0.2s ease-in;
  z-index: 2;
  h4 {
    margin-bottom: 12px;
    cursor: pointer;
  }
  p {
    font-size: 16px;
    margin-bottom: 6px;
    cursor: pointer;
  }
  &:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(-10px);
  }
  .vl {
    width: 1px;
    background-color: white;
  }
`;

const HeaderDiv = styled.header`
  .header1Container {
    .header1 {
      width: 75%;
      height: 70px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      .logo {
        img {
          margin-top: 6px;
        }
      }
      .lmenu {
        font-size: 18px;
        width: 40%;
        .mainMenu {
          width: 74px;
          line-height: 70px;
          text-align: center;
          cursor: pointer;
          &:hover {
            color: #f27025;
          }
          &:hover + ${HiddenMenu} {
            opacity: 1;
            visibility: visible;
            transform: translateY(-10px);
          }
        }
      }
      .rmenu {
        width: 40%;
        display: flex;
        justify-content: flex-end;
        > div {
          padding: 0 12px;
          display: flex;
          align-items: center;
        }
        .menu {
          cursor: pointer;
          &:hover {
            color: #f27025;
          }
        }
        .login {
          display: flex;
          padding: 4px;
          margin: 0 10px;
          border: 1px solid #e8e8e8;
          cursor: pointer;
        }
        .changeLanguage {
          border: 1px solid #e8e8e8;
          cursor: pointer;
          position: relative;
          border-radius: 0.25rem;
          .dropDown {
            position: absolute;
            display: none;
            background-color: white;
            width: 100%;
            left: 0;
            bottom: -50px;
            text-align: center;
            border-radius: 0.25rem;
            border: 1px solid #e8e8e8;
            > div {
              &:hover {
                background-color: #f27025;
                color: white;
              }
            }
          }
          &:hover {
            .dropDown {
              display: block;
            }
          }
        }
      }
    }
  }
  .header2Container {
    background-color: #f27025;
    .header2 {
      width: 80%;
      margin: 0 auto;
      .navMenu {
        list-style-type: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        li {
          margin-right: 28px;
          color: white;
          align-items: center;
          a {
            line-height: 50px;
            display: block;
            padding: 0 13px;
            cursor: pointer;
            &:hover {
              color: #f27025;
              background-color: white;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1550px) {
    .lmenu {
      width: auto !important;
    }
    .rmenu {
      width: auto !important;
    }
  }
`;
