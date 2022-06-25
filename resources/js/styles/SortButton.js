import styled from "styled-components";
import { Button } from "@mui/material/";



export const SortingButton = styled(Button)`
  &&& {
    color: white;
    font-family: "pixel10-r";
    font-size: 25px;
    text-transform: capitalize;
    @media (max-width: 600px) {
      font-size: 15px;
    }
    @media (max-width: 767px) and (min-width: 601px) {
      font-size: 20px;
    }
    @media (max-width: 991px) and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const SortP = styled.p`
  &&& {
    font-family: "pixel10-b";
    font-size: 35px;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 20px;
    }
    @media (max-width: 767px) and (min-width: 601px) {
      font-size: 20px;
    }
    @media (max-width: 991px) and (min-width: 768px) {
      font-size: 25px;
    }
  }
`;
