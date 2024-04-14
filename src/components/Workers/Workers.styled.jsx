import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  margin: 0 auto;
`;

export const DelBtn = styled.span`
  cursor: pointer;
  > svg {
    color: #f20909;
    &:hover {
      color: #a80b03;
    }
  }
`;
export const UpdBtn = styled(DelBtn)`
  > svg {
    color: #008028;
    &:hover {
      color: #05be18;
    }
  }
`;
export const Box = styled.div`
  border: 2px solid white;
  border-radius: 8px;
  padding: 10px;
`;
export const WorkersList = styled.ul`
  list-style: none;
  padding: 10px;
  min-width: 400px;
`;

export const Title = styled.h2`
  color: white;
  text-align: center;
`;

export const SubTitle = styled.h3`
  color: white;
  text-align: center;
  margin-top: 20px;
`;

export const AddBtn = styled.span`
  margin-left: 20px;
  cursor: pointer;
  > svg {
    color: white;
    font-size: 34px;
  }
`;
