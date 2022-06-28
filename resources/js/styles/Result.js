import styled, { keyframes } from "styled-components";
import {Paper,} from "@mui/material/";

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
export const BRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ff0000 48%, #fff 50%, #ff0000 52%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 3s infinite;
`;
export const CRankP = styled(RankP)`
  background-image: linear-gradient(70deg, #ffcc00 48%, #fff 50%, #ffcc00 52%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 3s infinite;
`;
export const DRankP = styled(RankP)`
  color: #ffd966;
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

export const Item = styled(Paper)`
  &&&{
    font-family: "pixel10-b";
		padding: 8px;
		text-align center;
	}
`;

export const DotItem = styled(Paper)`
  font-family: "pixel10-b";
  text-align: center;
  font-size: 20px;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 9px;
  }
  @media (max-width: 767px) and (min-width: 601px) {
    font-size: 10px;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const NovelTitle = styled.a`
  text-align: center;
  color: black;
  font-size: 24px;
  font-family: "milk-b";
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const KoshinDiv = styled.div`
  font-family: "pixel10-b";
  display: block;
  text-align: center;
  font-size: 20px;
  background: linear-gradient(
    #99ffffde,
    #fff 50%,
    #0dcaf03d 50%,
    #66fff4 70%,
    #99f6ff
  );
  border-color: #9330;
  box-shadow: inset 0 0 0 2px rgb(0 82 204 / 42%);
  text-indent: 0.5em;
  letter-spacing: 0.25em;
  border-width: thin;
  border-style: solid;
  border-radius: 8px;
  text-shadow: 1px 1px 0 rgba(100%, 100%, 100%, 0.75);
`;

export const KanketsuDiv = styled(KoshinDiv)`
  background: linear-gradient(
    #ffdb9ba6,
    #ffef6f85 50%,
    #e7d440bf 50%,
    #ddd84280 70%,
    #edff589e
  );
  border-color: #9330;
  box-shadow: inset 0 0 0 2px rgb(190 145 31 / 71%);
`;

export const MikanDiv = styled(KoshinDiv)`
  background: linear-gradient(
    #ee53234a,
    #ee3a3a1a 50%,
    #f00d0d3d 50%,
    #ff666657 70%,
    #ff99999e
  );
  border-color: #9330;
  box-shadow: inset 0 0 0 2px rgb(204 0 0 / 35%);
`;

export const TanpenDiv = styled.div`
  font-family: "pixel10-b";
  display: block;
  text-align: center;
  font-size: 20px;
  background: linear-gradient(
      to bottom,
      rgb(255 255 255 / 50%),
      rgb(255 255 255 / 75%),
      rgb(255 255 255 / 50%)
    ),
    linear-gradient(to right, #00ecff, #f00d0db8);
  border-color: #9330;
  box-shadow: inset 0 0 0 2px rgb(0 82 204 / 42%);
  text-indent: 0.5em;
  letter-spacing: 0.25em;
  border-width: thin;
  border-radius: 8px;
  text-shadow: 1px 1px 0 rgba(100%, 100%, 100%, 0.75);
`;

export const ReviewDiv = styled(KoshinDiv)``;

export const NoReviewDiv = styled(KoshinDiv)`
  background: linear-gradient(
    #99ffff5e,
    #fff 50%,
    #0dcaf005 50%,
    #66fff442 70%,
    #f1f1f1
  );
  box-shadow: inset 0 0 0 2px rgb(0 82 204 / 19%);
  color: #cccccc;
`;

export const LengthDiv = styled.div`
  font-family: "pixel10-r";
  font-size: 20px;
  margin: auto;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StoryP = styled.p`
  font-family: "milk-b";
`;

export const OrderP = styled.p`
  font-family: "pixel10-b";
  font-size: 40px;
  padding: 0px;
  text-align: center;
  margin: auto;
`;
