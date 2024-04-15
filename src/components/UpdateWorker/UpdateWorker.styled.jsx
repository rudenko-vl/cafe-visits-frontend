import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  width: 600px;
  background-color: #ffffff;
  margin: 20px auto;
`;

export const Img = styled.img`
  width: 200px;
  height: 250px;
  margin: 0 auto;
`;

export const DelBtn = styled.span`
  cursor: pointer;
  > svg {
    color: #f20909;
    font-size: 30px;
  }
  &:hover > span {
    opacity: 1;
  }
`;

export const Clue = styled.span`
  background: yellow;
  color: blue;
  width: 100px;
  height: 30px;
  opacity: 0;
  transition: 700ms;
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
`;
