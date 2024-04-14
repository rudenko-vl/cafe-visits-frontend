import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 450px;
  height: 50px;
  margin-top: 20px;
  border: 2px solid yellow;
  border-radius: 6px;
  font-size: 26px;
  font-weight: 700;
  color: white;
  padding: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const ButtonSubmit = styled.button`
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
