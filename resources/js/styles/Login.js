import styled from "styled-components";
import { leftToRight } from "./Common";

export const StoryP = styled.p`
  font-size: 30px;
  font-family: "pixel10-b";
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  animation: ${leftToRight} 2s;
`;

export const AuthP = styled.p`
 &&&{
  font-size: 16px;
  font-family: "pixel10-b";
  margin: 0px;
 }
`;

