import styled, { keyframes } from "styled-components";
import { Button, Paper } from "@mui/material";

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

export const fastFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`; 

export const kiran = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  20% {
    transform: scale(1.2);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.4);
    opacity: 0.4;
  }
  80% {
    transform: scale(1.6);
    opacity: 0.2;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
`;

export const Centering = styled(Paper)`
  &&&{
    text-align center;
    align-items: center;
    justify-content: center;
  }
`;

export const HoverPaper = styled(Centering)`
  &&& {
    transition: cubic-bezier(0.32, 0, 0.67, 0);
    &:hover {
      transform: scale(1.2);
      opacity: 0.6;
    }
  }
`;

export const RankP = styled.p`
  text-align: center;
  font-size: 36px;
  margin: auto;
  font-family: "pixel10-b";
  @media (max-width: 1200px) and (min-width: 991px) {
    font-size: 60px;
  }
  @media (min-width: 1201px) {
    font-size: 70px;
  }
`;
export const shine = keyframes`
  0% {
		background-position: 100% 50%;
	}
	99.9%, to {
		background-position: 0% 50%;
	}
`;

export const shineSS = keyframes`
  0% {
		background-position: 100% 50%;
	}
  50% {
    text-shadow: 0 0 5px #ff99ff;
  }
	99.9%, to {
		background-position: 0% 50%;
	}
`;
export const shineSSS = keyframes`
  0% {
		background-position: 100% 50%;
	}
  50% {
    text-shadow: 0 0 6px #ff33cc;
  }
	99.9%, {
		background-position: 0% 50%;
	}
`;

export const SRankP = styled(RankP)`
  color: #ff99ff;
`;
export const ARankP = styled(RankP)`
  color: #ff33cc;
`;
export const BRankP = styled(RankP)`
  color: #ff0000;
`;
export const CRankP = styled(RankP)`
  color: #ffb900;
`;
export const DRankP = styled(RankP)`
  color: #efd074;
`;
export const ERankP = styled(RankP)`
  color: #70ad47;
`;
export const FRankP = styled(RankP)`
  color: #4472c4;
`;
export const GRankP = styled(RankP)`
  color: #a5a5a5;
`;
export const NRankP = styled(RankP)`
  color: black;
`;
export const HiddenRankP = styled(RankP)`
  opacity: 0;
`

export const ShineSSSRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff99ff 48%, #fff 50%, #ff99ff 52%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shineSSS} 3s infinite, ${fastFade} 2s forwards;
  opacity: 0;
`;

export const ShineSSRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff99ff 48%, #fff 50%, #ff99ff 52%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shineSS} 3s infinite, ${fastFade} 2s forwards;
  opacity: 0;
`;
export const ShineSRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff99ff 48%, #fff 50%, #ff99ff 52%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 3s infinite, ${fastFade} 2s forwards;
  opacity: 0;
`;
export const ShineARankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff33cc 48%, #fff 50%, #ff33cc 52%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 3s infinite, ${fastFade} 2s forwards;
  opacity: 0;
`;

export const ShineBRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff0000 48%, #fff 50%, #ff0000 52%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 3s infinite, ${fastFade} 2s forwards;
  opacity: 0;
`;

export const ShineCRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ffb900 48%, #fff 50%, #ffb900 52%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 3s infinite, ${fastFade} 2s forwards;
  opacity: 0;
`;

export const FadeDRankP = styled(DRankP)`
  animation: ${fastFade} 2s forwards;
  opacity: 0;
`;
export const FadeERankP = styled(ERankP)`
  animation: ${fastFade} 2s forwards;
  opacity: 0;
`;
export const FadeFRankP = styled(FRankP)`
  animation: ${fastFade} 2s forwards;
  opacity: 0;
`;
export const FadeGRankP = styled(GRankP)`
  animation: ${fastFade} 2s forwards;
  opacity: 0;
`;
export const FadeNRankP = styled(NRankP)`
  animation: ${fastFade} 2s forwards;
  opacity: 0;
`;

export const TutorialButton = styled(Button)`
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

export const BalloonDiv = styled.div`
  position: relative;
  display: inline-block;
  margin: 1.5em 15px 1.5em 0;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #fff;
  border: solid 3px #555;
  box-sizing: border-box;
  border-radius: 10px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: -24px;
    margin-top: -12px;
    border: 12px solid transparent;
    border-left: 12px solid #fff;
    z-index: 2;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: -30px;
    margin-top: -14px;
    border: 14px solid transparent;
    border-left: 14px solid #555;
    z-index: 1;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

export const BlueBalloonDiv = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #e0edff;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -30px;
    margin-top: -15px;
    border: 15px solid transparent;
    border-right: 15px solid #e0edff;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;
