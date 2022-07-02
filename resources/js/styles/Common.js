import styled, { keyframes } from "styled-components";
import { Paper } from "@mui/material";

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

export const Centering = styled(Paper)`
  &&&{
    padding: 8px;
    text-align center;
    align-items: center;
    justify-content: center;
  }
`;

export const HoverPaper = styled(Centering)`
  &&& {
    &:hover {
      cursor: zoom-in;
    }
  }
`;

export const RankP = styled.p`
  text-align: center;
  font-size: 40px;
  margin: auto;
  font-family: "pixel10-b";
  @media (max-width: 1200px) and (min-width: 991px) {
    font-size: 60px;
  }
  @media (min-width: 1201px) {
    font-size: 70px;
  }
`;
const shine = keyframes`
  0% {
		background-position: 100% 50%;
	}
	99.9%, to {
		background-position: 0% 50%;
	}
`;

const shineSS = keyframes`
  0% {
		background-position: 100% 50%;
	}
  50% {
    text-shadow: 0 0 10px #fff;
  }
	99.9%, to {
		background-position: 0% 50%;
	}
`;
const shineSSS = keyframes`
  0% {
		background-position: 100% 50%;
	}
  50% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00de;
  }
	99.9%, to {
		background-position: 0% 50%;
	}
`;

export const SSSRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff99ff 48%, #fff 50%, #ff99ff 52%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shineSSS} 3s infinite;
`;

export const SRankNonAnimationP = styled(RankP)`
  color: #ff99ff;
`;

export const SSRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff99ff 48%, #fff 50%, #ff99ff 52%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shineSS} 3s infinite;
`;
export const SRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff99ff 48%, #fff 50%, #ff99ff 52%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 3s infinite;
`;
export const ARankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff33cc 48%, #fff 50%, #ff33cc 52%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 3s infinite;
`;
export const ARankNonAnimationP = styled(RankP)`
  color: #ff33cc;
`;

export const BRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff0000 48%, #fff 50%, #ff0000 52%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 3s infinite;
`;
export const BRankNonAnimationP = styled(RankP)`
  color: #ff0000;
`;

export const CRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ffb900 48%, #fff 50%, #ffb900 52%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 3s infinite;
`;
export const CRankNonAnimationP = styled(RankP)`
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

