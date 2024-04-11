import { FooterDiv, FooterTxt } from "./Footer.styled";

const currentDate = new Date();
const year = currentDate.getFullYear();
// const month = currentDate.getMonth() + 1;
// const day = currentDate.getDate();

export const Footer = () => {
  return (
    <FooterDiv>
      <FooterTxt>
        © {year} | All Rights Reserved | Developed by Rudenko Vlad
      </FooterTxt>
    </FooterDiv>
  );
};
