import styled from "styled-components";
import bg1 from "../../assets/imgs/bg1.png";
import pg1 from "../../assets/imgs/pg1.jpeg";
import pg2 from "../../assets/imgs/pg2.jpg";
const Packet = () => {
  return (
    <PacketDiv>
      <div className="container">
        <div className="emty"></div>
        <div className="header">แพ็กเกจแนะนำ</div>
        <div className="pakList">
          <div>
            <img src={pg1} alt="" />
          </div>
          <div>
            <img src={pg2} alt="" />
          </div>
        </div>
      </div>
    </PacketDiv>
  );
};

export default Packet;

const PacketDiv = styled.div`
  background: #0f2539 url(${bg1});
  .container {
    width: 70%;
    margin: 0 auto;
    .emty {
      height: 68px;
    }
    .header {
      color: white;
      padding: 26px 0;
      font-size: 36px;
    }
    .pakList {
      display: flex;
      align-items: center;
      padding-bottom: 36px;
      > div {
        width: 287px;
        height: 552px;
        margin: 0 10px;
        img {
          width: 100%;
          height: 100;
        }
      }
    }
  }
`;
