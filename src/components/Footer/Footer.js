import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <div className="container">
        <ul>
          <li>
            <h3>เกี่ยวกับเรา</h3>
            <p>
              <a href>เกี่ยวกับเรา</a>
            </p>
            <p>
              <a href>สิทธิพิเศษ</a>
            </p>
            <p>
              <a href>เงื่อนไขและข้อกำหนด</a>
            </p>
            <p>
              <a href>ร่วมงานกับเรา</a>
            </p>
            <p>
              <a href>ติดต่อเรา</a>
            </p>
          </li>
          <li>
            <h3>แพ็กเกจแนะนำ</h3>
            <p>
              <a href>3BB Broadband</a>
            </p>
            <p>
              <a href>3BB Corporate</a>
            </p>
            <p>
              <a href>3BB WiFi</a>
            </p>
            <p>
              <a href>Other Service</a>
            </p>
          </li>
          <li>
            <h3>กิจกรรมเพื่อสังคม</h3>
            <p>
              <a href>โครงการบรอดแบนด์อินเทอร์เน็ตฟรี เพื่อการศึกษา</a>
            </p>
            <p>
              <a href>
                โครงการ JAS ส่งเสริมการศึกษาให้เด็กไทย ก้าวทันยุคดิจิทัล
              </a>
            </p>
            <p>
              <a href>ด้านอื่น ๆ</a>
            </p>
            <p>
              <a href>CSR News & Acitivities</a>
            </p>
          </li>
          <li>
            <h3>ช่วยเหลือและบริการ</h3>
            <p>
              <a href>3BB Speed Test</a>
            </p>
            <p>
              <a href>ศูนย์บริการ 3BB</a>
            </p>
            <p>
              <a href>ช่องทางการแจ้งเว็บที่ผิดกฎหมาย</a>
            </p>
            <p>
              <a href>ช่องทางการแจ้งสายเคเบิ้ลตกหรือหย่อน</a>
            </p>
          </li>
          <li>
            <div className="telCon">
              <div className="tel">
                <div className="maintext">3BB Call Center</div>
                <div className="maintel">1530</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  background: #0f2539;
  padding: 55px 0;
  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    ul {
      width: 100%;
      list-style-type: none;
      display: flex;
      align-items: flex-start;
      gap: 24px;
      li {
        width: 20%;
      }
      .telCon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 226px;
        font-weight: bold;
        .tel {
          text-align: center;
        }
        .maintext {
          font-size: 24px;
          color: white;
        }
        .maintel {
          font-size: 54px;
          color: #f5941c;
        }
      }
      h3 {
        color: #f27025;
        font-size: 24px;
        margin-bottom: 14px;
      }
      p {
        padding: 6px 0;
        color: white;
        font-size: 16px;
        text-decoration-color: #f27025;
        cursor: pointer;
        &:hover {
          a {
            text-decoration: underline;
            text-decoration-color: #f27025;
          }
        }
      }
    }
  }

  @media (max-width: 1550px) {
    .container {
      ul {
        flex-wrap: wrap;
        li {
          text-align: center;
          width: 47%;
          &:nth-last-child(1) {
            flex-grow: 1;
          }
        }
      }
    }
  }
`;
