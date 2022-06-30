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
    background-color: #e6e6e6;
    padding: 8px;
    text-align center;
    height: 100%;
    display flex;
    align-items: center;
    justify-content: center;
  }
`;
