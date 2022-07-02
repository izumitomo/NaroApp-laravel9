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

export const ChartItem = styled(HoverPaper)`
  &&&{
    font-family: "pixel10-b";
		padding: 8px;
		text-align center;
	}
`;


export const NovelTitle = styled.a`
  text-align: center;
  color: black;
  font-size: 24px;
  font-family: "milk-b";
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

/* export const OrderP = styled.p`
  font-family: "pixel10-b";
  font-size: 40px;
  padding: 0px;
  text-align: center;
  margin: auto;
`; */

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
