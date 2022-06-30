import styled from "styled-components";
import { FormLabel } from "@mui/material";
import { GenreP } from "../styles/Home";
import { fade, Centering } from "../styles/Common";

export const OrderFormLabel = styled(FormLabel)`
  &&& {
    font-family: "milk-b";
    font-size: 20px;
    color: blue;
  }
`;

export const OrderPaper = styled(Centering)`
  &&& {
    background-color: #f8fb2c;
    animation: ${fade} 2s;
  }
`;

export const LabelP = styled(GenreP)``;
