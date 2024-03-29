import styled, { keyframes } from "styled-components";

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
  &:hover {
    cursor: zoom-in;
  }
`;
