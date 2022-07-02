import styled, { keyframes } from "styled-components";
import { Paper } from "@mui/material";

export const leftToRight = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
`;

export const Centering = styled(Paper)`
  &&&{
    padding: 8px;
    text-align center;
    align-items: center;
    justify-content: center;
  }
`;

export const HoverPaper = styled(Centering)`
  &&& {
    &:hover {
      cursor: zoom-in;
    }
  }
`;
