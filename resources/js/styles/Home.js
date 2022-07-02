import styled from "styled-components";
import {Paper, IconButton, Button} from "@mui/material";
import { Centering } from "./Common";
export const WhitePaper = styled(Centering)`
  &&& {
    background-color: #ffffff;
    height: 100%;
    display flex;
  }
`;

export const TitleP = styled.p`
  text-align: center;
  font-family: "pixel10-b";
  font-size: 46px;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
export const GenreP = styled.p`
  color: black;
  font-family: "pixel10-r";
  font-size: 24px;
  margin: auto;
`;
export const IsekaiP = styled(GenreP)`
  fontsize: 22px;
`;
export const SearchP = styled(GenreP)`
  fontsize: 22px;
`;

export const RegisterButton = styled(Button)`
  &&& {
    color: white;
    background-color: #0d6efd;
    font-family: "pixel10-b";
    font-size: 20px;
    text-transform: capitalize;
    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`;

export const LoginButton = styled(RegisterButton)`
  &&& {
    background-color: rgb(255 71 71);
  }
`;

export const LogoutButton = styled(RegisterButton)`
  &&& {
    background-color: rgb(255 102 232);
  }
`;

/* export const SpecialButton = styled(IconButton)`
  &&& {
    color: white;
    background-color: #0d6efd;
    font-family: "pixel10-b";
    font-size: 20px;
    text-transform: capitalize;
    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`; */

export const SearchButton = styled(Button)`
  &&&{
    color: black;
    background-color: #4feff7;
    display: block;
    font-size: 20px;
    variant: cotained;
    size: large;
  }
`;
