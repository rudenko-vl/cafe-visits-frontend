import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 260px;
  background-color: #ffffff;
  margin: 20px auto;
  @media screen and (min-width: 720px) {
    width: 450px;
    padding: 35px;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 250px;
  margin: 0 auto;
`;

export const DelBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  > svg {
    color: #f20909;
    font-size: 30px;
  }
  &:hover > span {
    opacity: 1;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
