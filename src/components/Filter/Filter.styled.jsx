import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80%;
  margin: 15px 0px;
`;

export const ClearBtn = styled(Button)`
  height: 46px;
  font-weight: 600;
  > svg {
    color: #b6afaf;
    font-size: 24px;
  }
`;
