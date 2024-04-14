import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.div`
  position: relative;
  padding: 15px;
`;

export const SearchInput = styled.input`
  width: 350px;
  height: 30px;
  margin-top: 20px;
  border: 2px solid green;
  border-radius: 6px;
  font-size: 18px;
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
  position: absolute;
  top: 25px;
  right: -125px;
  width: 130px;
  height: 130px;
  background-color: green;
  padding: 15px;
  color: white;
  font-size: 22px;
  font-weight: 700;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const ClearBtn = styled.span`
  cursor: pointer;
  font-size: 26px;
  margin-left: 15px;
  > svg {
    color: #ffffff;
    &:hover {
      color: #c6c6c6;
    }
  }
`;
