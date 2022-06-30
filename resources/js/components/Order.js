import React, { setState } from "react";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { LabelP, OrderFormLabel, OrderPaper } from "../styles/Order";

const Order = ({
  setOrder,  
}) => {
  const handleOrder = (event) => {
    setOrder(event.target.value);
  }
  
  return (
    <OrderPaper>
      <FormControl>
        <OrderFormLabel>お宝を発見！ 中を開けるとそこには……</OrderFormLabel>
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
