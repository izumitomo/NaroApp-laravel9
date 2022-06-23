import styled from "styled-components";
import {Paper} from "@mui/material";
export const Centering = styled(Paper)`
  &&&{background-color: #e6e6e6;
	padding: 8px;
	text-align center;
	height: 100%;
	display flex;
	align-items: center;
	justify-content: center;}
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
