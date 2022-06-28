import React, { setState } from "react";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import styled from "styled-components";
import { Centering, GenreP } from "../styles/Home";

const OrderFormLabel = styled(FormLabel)`
  &&&{
    font-family: "pixel10-b";
    font-size: 20px;
  }
`;

const OrderPaper = styled(Centering)`
  &&& {
    background-color: #f8fb2c;
  }
`;

const LabelP = styled(GenreP)`
`;

const Order = ({
  setOrder,  
}) => {
  const handleOrder = (event) => {
    setOrder(event.target.value);
  }
  
  return (
    <OrderPaper>
      <FormControl marginTop={2}>
        <OrderFormLabel>秘密のオプション</OrderFormLabel>
        <RadioGroup defaultValue="weekly" onChange={handleOrder}>
          <FormControlLabel
            value="weekly"
            control={<Radio />}
            label={<LabelP>週別ユニークユーザで計測</LabelP>}
          />
          <FormControlLabel
            value="weeklypoint"
            control={<Radio />}
            label={<LabelP>週間ポイントで計測</LabelP>}
          />
        </RadioGroup>
      </FormControl>
    </OrderPaper>
  );
}
export default Order;
