import { FooterDiv, FooterTxt } from "./Footer.styled";

const currentDate = new Date();
const year = currentDate.getFullYear();

export const Footer = () => {
  return (
    <FooterDiv>
      <FooterTxt>
        © {year} | All Rights Reserved | Developed by Rudenko Vlad
      </FooterTxt>
    </FooterDiv>
  );
};
