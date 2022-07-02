import React, { useState, useEffect, memo } from "react";
import {Box, Grid,} from '@mui/material/';
import { ARankP, BRankP, CRankP, DRankP, ERankP, FRankP, GRankP, NRankP, SRankP, SSRankP, SSSRankP } from "../styles/Common";
import { PointP, DotItem } from "../styles/Score"


const Score = memo(({
  novelRankNum,
  globalPoint,
  favoriteCount,
  reviewerCount,
  averageRate,
  commentCount,
}) => {
	let novelRankAlpha = []
		//ランクをアルファベットにしてタグごと格納
		novelRankNum.forEach(function (rank) {
			if (rank == 10) { novelRankAlpha.push(<SSSRankP>SSS</SSSRankP >); }
			else if (rank == 9) { novelRankAlpha.push(<SSRankP>SS</SSRankP>); }
			else if (rank == 8) { novelRankAlpha.push(<SRankP>S</SRankP>);}
			else if (rank == 7) { novelRankAlpha.push(<ARankP>A</ARankP>);}
			else if (rank == 6) { novelRankAlpha.push(<BRankP>B</BRankP>);}
			else if (rank == 5) { novelRankAlpha.push(<CRankP>C</CRankP>);}
			else if (rank == 4) { novelRankAlpha.push(<DRankP>D</DRankP>);}
			else if (rank == 3) { novelRankAlpha.push(<ERankP>E</ERankP>);}
			else if (rank == 2) { novelRankAlpha.push(<FRankP>F</FRankP>);}
			else if (rank == 1) { novelRankAlpha.push(<GRankP>G</GRankP>);}
			else { novelRankAlpha.push(<NRankP>N</NRankP>);}
		})
		

		return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} columns={5} alignItems="center">
              <Grid item xs={1} alignItems="stretch">
                <DotItem elevation={6}>
                  ポイント
                  <br />
                  {novelRankAlpha[0]}
                  <PointP>{globalPoint}</PointP>
                </DotItem>
              </Grid>
              <Grid item xs={1}>
                <DotItem elevation={6}>
                  ブクマ
                  <br />
                  {novelRankAlpha[1]}
                  <PointP>{favoriteCount}</PointP>
                </DotItem>
              </Grid>
              <Grid item xs={1}>
                <DotItem elevation={6}>
                  ひょうかしゃ
                  <br />
                  {novelRankAlpha[2]}
                  <PointP>{reviewerCount}</PointP>
                </DotItem>
              </Grid>
              <Grid item xs={1}>
                <DotItem elevation={6}>
                  へいきんてん
                  <br />
                  {novelRankAlpha[3]}
                  <PointP>{averageRate}</PointP>
                </DotItem>
              </Grid>
              <Grid item xs={1}>
                <DotItem elevation={6}>
                  かんそう
                  <br />
                  {novelRankAlpha[4]}
                  <PointP>{commentCount}</PointP>
                </DotItem>
              </Grid>
            </Grid>
        </Box>
    );
	});


export default Score;

