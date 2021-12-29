import Slide1 from "../UI/slide/Slide1";
import styled from "styled-components";
import p1 from "../../assets/imgs/p1.jpg";
import Packet from "../packet/Packet";
import Hinter from "../HomeInternet/Hinter";
import Slide2 from "../UI/slide/Slide2";
import Sitti from "../Sitti/Sitti";
import Privil from "../Privil/Privil";

import s41 from "../../assets/imgs/s4-1.jpg";
import s42 from "../../assets/imgs/s4-2.jpg";
import s43 from "../../assets/imgs/s4-3.jpg";
import s44 from "../../assets/imgs/s4-4.jpg";
import s45 from "../../assets/imgs/s4-5.jpg";
import s46 from "../../assets/imgs/s4-6.jpg";
import s47 from "../../assets/imgs/s4-7.jpg";
import s48 from "../../assets/imgs/s4-8.jpg";

import s51 from "../../assets/imgs/s5-1.jpg";
import s52 from "../../assets/imgs/s5-2.jpg";
import s53 from "../../assets/imgs/s5-3.jpg";
import s54 from "../../assets/imgs/s5-4.jpg";
import s55 from "../../assets/imgs/s5-5.jpg";
import s56 from "../../assets/imgs/s5-6.jpg";
import s57 from "../../assets/imgs/s5-7.jpg";
import s58 from "../../assets/imgs/s5-8.jpg";
import News from "../News/News";

import n11 from "../../assets/imgs/n1-1.jpg";
import n12 from "../../assets/imgs/n1-2.jpg";
import n13 from "../../assets/imgs/n1-3.jpg";
import n14 from "../../assets/imgs/n1-4.jpg";
import n15 from "../../assets/imgs/n1-5.jpg";
import n16 from "../../assets/imgs/n1-6.jpg";
import n21 from "../../assets/imgs/n2-1.jpg";
import n22 from "../../assets/imgs/n2-2.jpg";
import n23 from "../../assets/imgs/n2-3.jpg";
import n24 from "../../assets/imgs/n2-4.jpg";
import n25 from "../../assets/imgs/n2-5.jpg";
import n26 from "../../assets/imgs/n2-6.jpg";
import { useState } from "react";

const Main = () => {
  const s4 = [
    {
      i: s41,
      t: "ส่วนลด 200 บาท เมื่อช้อปครบ 1,500 บาท ขึ้นไป ที่ Central  Application",
      s: "CENTRAL APP - 12.12 MEGA FESTIVAL",
    },
    {
      i: s42,
      t: "ส่วนลด 100 บาท เมื่อซื้อสินค้าครบ 599 บาท ที่ LionShopOnline",
      s: "LionShopOnline",
    },
    {
      i: s43,
      t: "ส่วนลดการทำเลสิค 1,000 บาท และรับสิทธิ์ตรวจตาเพื่อทำเลสิคโดยไม่คิดค่าใช้จ่าย ที่ศูนย์เลสิค โรงพยาบาลลาดพร้าว",
      s: "โรงพยาบาลลาดพร้าว - ส่วนลดการทำเลสิค 1,000 บาท",
    },
    {
      i: s44,
      t: "ส่วนลดค่าห้องพักเพิ่ม 10% ที่ กู๊ดไวป์ คาบิน เชียงใหม่",
      s: "กู๊ดไวป์ คาบิน เชียงใหม่",
    },
    {
      i: s45,
      t: "ส่วนลดค่าห้องพักเพิ่ม 10% ที่ เกาะจัมรีสอร์ท กระบี่",
      s: "เกาะจัมรีสอร์ท กระบี่",
    },
    {
      i: s46,
      t: "ส่วนลดเพิ่ม 1,000 บาท เมื่อสั่งซื้อเครื่องทำน้ำแข็งทุกรุ่น",
      s: "Hicon New World",
    },
    {
      i: s47,
      t: "ส่วนลด 500 บาท เมื่อซื้อสินค้าเครื่องฟอกอากาศในรถยนต์ CONOCO รุ่นใดก็ได้ ที่มีมูลค่า 1,000 บาทขึ้นไป",
      s: "CONOCO - ส่วนลด 500 บาท",
    },
    {
      i: s48,
      t: "ส่วนลด 500 บาท เมื่อซื้อสินค้า iRobot มูลค่าตั้งแต่ 10,000 บาทขึ้นไป",
      s: "iRobot - ส่วนลด 500 บาท",
    },
  ];

  const s5 = [
    { i: s51, t: "Memory Match Game", s: "Memory Match Game" },
    {
      i: s52,
      t: "3BB แจกโชคใหญ่ปลายปี 10 พอยต์ ลุ้นรับของรางวัลสุดปัง",
      s: "3BB แจกโชคใหญ่ปลายปี 2021",
    },
    {
      i: s53,
      t: "12 พอยต์ แลกรับส่วนลดมูลค่า 122 บาท เมื่อซื้อสินค้าที่บิ๊กซีออนไลน์ครบ 850 บาทขึ้นไป",
      s: "บิ๊กซีออนไลน์",
    },
    {
      i: s54,
      t: "400 พอยต์แลกรับฟรี SF Combo Set Take Away Size XL (มูลค่า 210 บาท)",
      s: "400 พอยต์แลกรับฟรี SF Combo Set Take Away",
    },
    {
      i: s55,
      t: "20 พอยต์ แลกรับส่วนลด 200 บาท เมื่อซื้อสินค้าครบ 1,000 บาทขึ้นไป",
      s: "คิง พาวเวอร์",
    },
    {
      i: s56,
      t: "200 พอยต์ รับฟรี Specialty Pretzel และ Lemonade 16 ออนซ์ (มูลค่า 80 บาท)",
      s: "อานตี้ แอนส์",
    },
    {
      i: s57,
      t: "120 พอยต์ แลกรับส่วนลด 50 บาท เมื่อสั่งอาหารผ่าน foodpanda ครบ 50 บาทขึ้นไป",
      s: "foodpanda - ส่วนลด 50 บาท",
    },
    {
      i: s58,
      t: "250 พอยต์ แลกรับ Starbucks e-Coupon มูลค่า 100 บาท",
      s: "Starbucks e-Coupon",
    },
  ];

  const n1 = [
    {
      i: n11,
      h: "3BB จังหวัดสงขลา มอบน้ำดื่ม และเครื่องอุปโภคบริโภคให้กับผู้ป่วยที่พักรักษาต...",
      d: "24 December 2021  11:22",
      s: "3BB จังหวัดสงขลา โดยคุณศรัณย์ บุญช่วย ผู้จัดการเขตพร้อมด้วยพนักงานส่งมอบน้ำดื่ม และเครื่องอุปโภคบริโภคให้กับผู้ป่วยที่พักรักษาตัวอยู่ ...",
    },
    {
      i: n12,
      h: "3BB จังหวัดสุราษฎร์ธานี ปรับปรุงสายสื่อสาร กับผู้ใช้รถ ใช้ถนน ให้เป็นระเบีย...",
      d: "24 December 2021  11:22",
      s: "บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน) จังหวัดสุราษฎร์ธานี ...",
    },
    {
      i: n13,
      h: "3BB จังหวัดสุราษฎร์ธานี มอบอินเทอร์เน็ตความเร็วสูงและน้ำดื่ม 3BB ให้กับองค์...",
      d: "24 December 2021  11:22",
      s: "บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน) จังหวัดสุราษฎร์ธานี ...",
    },
    {
      i: n14,
      h: "3BB GIGATV เพิ่มช่องใหม่ Global Trekker รวมสุดยอดความบันเทิงหลากหลายแบบจัดเ...",
      d: "24 December 2021  11:22",
      s: "3BB GIGATV เดินหน้าเสิร์ฟความบันเทิงแบบต่อเนื่อง ล่าสุดเอาใจลูกค้าด้วยการเพิ่มช่อง Global Trekker ...",
    },
    {
      i: n15,
      h: "3BB จังหวัดนครราชสีมา ออกบูธกิจกรรม เทศกาลเครื่องปั้นดินเผานานาชาติโคราช IN...",
      d: "24 December 2021  11:22",
      s: "3BB นครราชสีมา 1 ร่วมออกบูธกิจกรรม เทศกาลเครื่องปั้นดินเผานานาชาติโคราช INTERKERAMOS ...",
    },
    {
      i: n16,
      h: "3BB จังหวัดสุราษฎร์ธานี พนักงานเข้าฉีดวัคซีน booster เข็ม 3 ณ โรงพยาบาลค่าย...",
      d: "24 December 2021  11:22",
      s: "บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน) หรือ ...",
    },
  ];

  const n2 = [
    {
      i: n21,
      h: "กลุ่มบริษัทจัสมิน ร่วมกับ กลุ่มบริษัทโมโน เน็กซ์ ช่วยเหลือผู้ประสบอุทกภัย อ...",
      d: "24 December 2021  11:22",
      s: "กลุ่มบริษัทจัสมิน ร่วมกับ กลุ่มบริษัทโมโน เน็กซ์ ส่งมอบถุงยังชีพให้กับผู้ประสบอุทกภัย ในเขตอำเภอเสาไห้ ...",
    },
    {
      i: n22,
      h: "กลุ่มบริษัทจัสมิน ร่วมกับ กลุ่มบริษัทโมโน เน็กซ์ ช่วยเหลือผู้ประสบอุทกภัย อ...",
      d: "24 December 2021  11:22",
      s: "กลุ่มบริษัทจัสมิน ร่วมกับ กลุ่มบริษัทโมโน เน็กซ์ ส่งมอบถุงยังชีพให้กับผู้ประสบอุทกภัยในเขตอำเภอไชโย จังหวัดอ่างทอง ...",
    },
    {
      i: n23,
      h: "กลุ่มบริษัทจัสมิน ร่วมกับ กลุ่มบริษัทโมโน เน็กซ์ ช่วยเหลือผู้ประสบอุทกภัย  ...",
      d: "24 December 2021  11:22",
      s: "กลุ่มบริษัทจัสมิน ร่วมกับ กลุ่มบริษัทโมโน เน็กซ์ ช่วยเหลือผู้ประสบอุทกภัย จังหวัดสระบุรี ...",
    },
    {
      i: n24,
      h: "กลุ่มบริษัทจัสมินร่วมใจ ช่วยเหลือฟื้นฟู ผู้ประสบอุทกภัย อำเภออุ้มผาง จังหวั...",
      d: "24 December 2021  11:22",
      s: "ด้วยสถานการณ์น้ำป่าจากภูเขาสูงไหลถล่มทะลักล้นลำห้วยในเขตอำเภออุ้มผาง จังหวัดตาก จนทำให้เกิดน้ำท่วมสูงกินพื้นที่เป็นบริเวณกว้าง โดยน้ำเริ่มท่วมตั้งแต่ช่วงเช้ามืด วันที่ 26 ...",
    },
    {
      i: n25,
      h: "กลุ่มบริษัทจัสมินฯ โดย 3BB ภาคกลาง มอบถุงยังชีพและน้ำดื่มให้กับประชาชนในเขต...",
      d: "24 December 2021  11:22",
      s: "ชุมชนบ้านบางปลากด หมู่ที่ 5 ตำบลบางปลากด และชุมชนบ้านโผงเผง หมู่ที่ ...",
    },
    {
      i: n26,
      h: "JAS 3BB ร่วมกับ MonoNext มอบถุงยังชีพและน้ำดื่มให้กับประชาชนในเขตพื้นที่ชุม...",
      d: "24 December 2021  11:22",
      s: "บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน) หรือ ...",
    },
  ];

  const [news, setNews] = useState(1);

  const newsOne = () => {
    setNews(1)
  };

  const newsTwo = () => {
    setNews(2)
  };

  return (
    <MainDiv>
      <Slide1 />
      <SpDealCon>
        <div className="spDeal text">
          <span>พิเศษ! </span> เมื่อติดตั้งอินเทอร์เน็ตบ้านวันนี้
        </div>
        <div className="spDeal imgs">
          <img src={p1} alt="router" />
        </div>
      </SpDealCon>
      <Packet />
      <Hinter />
      <Slide2 />
      <Sitti />
      <Privil imgs={s4} header={"3BB Privilege"} />
      <Privil imgs={s5} header={"3BB Reward"} />
      <News data={news === 1 ? n1 : n2} news={news} newsOne={newsOne} newsTwo={newsTwo}/>
    </MainDiv>
  );
};

export default Main;
const MainDiv = styled.div`
  background-color: #0f2539;
`;

const SpDealCon = styled.div`
  width: 70%;
  height: 324px;
  margin: 0 auto;
  .spDeal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    height: 146px;
    font-size: 30px;
    color: white;
    span {
      color: #f27025;
    }
  }
  .imgs {
    width: 100%;
    img {
      width: 90%;
    }
  }
`;
