import styled from "@emotion/styled";

export const BtnBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-top: 30px;
`;

export const BtnBoxItem = styled.li`
  margin-right: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  width: 100%;
  background-color: #ffffff;
`;
export const AddBtn = styled.span`
  position: absolute;
  color: black;
  top: 20px;
  right: -25px;
  cursor: pointer;
  &:hover > p {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  width: 50vw;
`;

export const Clue = styled.p`
  display: inline-block;
  opacity: 0;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  top: 20px;
  right: -90px;
  font-size: 14px;
  background-color: #fff200;
  padding: 2px;
  width: 150px;
  color: black;
`;

export const DelBtn = styled.button`
  padding: 5px;
  background-color: #ffffff;
  margin: 10px 0px 10px auto;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  color: red;
  border-radius: 4px;
  &:hover {
    background-color: red;
    color: white;
  }
`;
export const Title = styled.h2`
  text-align: center;
  margin: 15px 0;
  color: #1717ce;
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
