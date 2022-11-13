import styled, { keyframes } from "styled-components";
import { BlueBalloonDiv, leftToRight, TutorialButton } from "./Common";


export const TitleP = styled.p`
	font-family: "pixel10-b";
	text-align: center;
	font-size: 30px;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

export const ThanksP = styled.p`
  font-size: 24px;
  font-family: "pixel10-r";
  white-space: nowrap;
	color: #ffb900;
  text-align: center;
  overflow: hidden;
  animation: ${leftToRight} 2s;
`;

export const MainP = styled.p`
	font-family: "milk-b";
	color: black;
	font-size: 20px;
	@media (max-width: 600px) {
		font-size: 15px;
	}
`;

export const IndexA = styled.a`
	font-size: 16px;
	font-family: "milk-b";
	padding: 8px;
`

export const QuestionP = styled(MainP)`
	font-family: "milk-b";
`

export const ModeP = styled.p`
	font-size: 24px;
	font-family: "pixel10-r";
	margin: auto;
`
export const NormalBalloonDiv = styled(BlueBalloonDiv)`
  background-color: #ffe0f8;
  &:before {
    border-right: 15px solid #ffe0f8;
  }
`;

export const HardBalloonDiv = styled(BlueBalloonDiv)`
  background-color: #dfc1ff;
  &:before {
    border-right: 15px solid #dfc1ff;
  }
`;

export const SpecialBalloonDiv = styled(BlueBalloonDiv)`
  background-color: #ebff69;
  &:before {
    border-right: 15px solid #ebff69;
  }
`;

export const BackButton = styled(TutorialButton)`
  &&& {
    background-color: #6c757d;
		font-size: 14px;
		font-family: "milk-b";
  }
`;
