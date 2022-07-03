import styled, { keyframes } from "styled-components";
import { HoverPaper, RankP } from "./Common";

export const PointP = styled(RankP)`
  font-size: 40px;
  font-family: "pixel10-r";
  @media (max-width: 767px) {
    font-size: 15px;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const DotItem = styled(HoverPaper)`
  font-family: "pixel10-b";
  font-size: 20px;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 9px;
  }
  @media (max-width: 768px) and (min-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 15px;
  }
`;
