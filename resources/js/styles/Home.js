import styled from "styled-components";
import {Button} from "@mui/material";
import { Centering, TutorialButton } from "./Common";
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
  margin: 0px;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const SubtitleP = styled.p`
  font-size: 30px;
  font-family: "pixel12-b";
  text-align: end;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

export const GenreP = styled.p`
  color: black;
  font-family: "pixel10-r";
  font-size: 20px;
  margin: auto;
`;
export const IsekaiP = styled(GenreP)`
  font-size: 20px;
  @media (max-width: 768px) and (min-width: 600px) {
    font-size: 22px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
export const SearchP = styled(GenreP)`
  fontsize: 22px;
`;

export const LoginButton = styled(TutorialButton)`
  &&& {
    background-color: rgb(255 71 71);
  }
`;

export const LogoutButton = styled(TutorialButton)`
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
