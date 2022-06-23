import React from "react";
import styled from "styled-components";
import {
  Box,
  Grid,
  Button
} from "@mui/material/";

const SortingButton = styled(Button)`
  &&& {
    color: black;
    background-color: rgb(227 255 98);
    font-family: "pixel10-r";
    font-size: 15px;
    text-transform: capitalize;
  }
`;

export default function SortButton() {
  return (
    <div>
      <Box>
        <Grid container spacing={1} columns={10} textAlign="center">
          <Grid item xs={2}>
            <SortingButton variant="contained">Pt</SortingButton>
          </Grid>
          <Grid item xs={2}>
            <SortingButton variant="contained">Fav</SortingButton>
          </Grid>
          <Grid item xs={2}>
            <SortingButton variant="contained">Rev</SortingButton>
          </Grid>
          <Grid item xs={2}>
            <SortingButton variant="contained">Rate</SortingButton>
          </Grid>
          <Grid item xs={2}>
            <SortingButton variant="contained">Com</SortingButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
