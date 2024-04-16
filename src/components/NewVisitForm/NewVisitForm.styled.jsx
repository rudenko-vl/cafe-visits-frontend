import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-top: 30px;
`;

export const SearchInput = styled.input`
  position: relative;
  width: 350px;
  height: 30px;
  margin-top: 20px;
  border: 2px solid yellow;
  border-radius: 6px;
  font-size: 18px;
  @media screen and (min-width: 760px) {
    width: 450px;
    height: 50px;
    font-size: 26px;
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 30px;
  margin-top: 20px;
  border: 2px solid yellow;
  border-radius: 6px;
  font-size: 22px;
  font-weight: 700;
  color: white;
  padding: 5px;
  @media screen and (min-width: 760px) {
    width: 450px;
    height: 50px;
    font-size: 26px;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 830px) {
    width: 400px;
    height: 400px;
  }
`;

export const ButtonSubmit = styled.button`
  width: 350px;
  height: 60px;
  font-size: 18px;
  background-color: green;
  padding: 15px;
  color: white;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 760px) {
    width: 450px;
  }
`;

export const ClearBtn = styled.span`
  cursor: pointer;
  margin-top: 20px;
  font-size: 26px;
  margin-left: 15px;
  > svg {
    color: #ffffff;
    &:hover {
      color: #c6c6c6;
    }
  }
`;
