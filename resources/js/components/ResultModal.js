import RankChart from "./RankChart";
import Score from "./Score";
import NovelState from "./NovelState";
import React, { useState, useEffect, memo } from "react";
import { Box, Grid, Modal } from "@mui/material/";
import { modalStyle } from "../styles/ResultModal";
import {
  ARankP,
  BRankP,
  CRankP,
  DRankP,
  ERankP,
  FRankP,
  GRankP,
  NRankP,
  SRankP,
  SSRankP,
  SSSRankP,
  ChartItem,
  NovelTitle,
} from "../styles/Common";

const novelUrl = "https://ncode.syosetu.com/";

const ResultModal = ({
  handleModal,
  orderPara,
  novelAverageRate,
  novel,
  novelRankNum,
}) => {

  return (
    <Box sx={modalStyle} id={novel.ncode}>
      <Grid
        container
        spacing={1}
        columns={20}
        marginBottom={1}
        marginTop={1}
        onClick={handleModal}
      >
        <Grid item xs={4} sm={2}>
          {orderPara}
        </Grid>
        <Grid item xs={16} sm={18} margin="auto">
          <NovelTitle href={novelUrl + novel.ncode} target="_blank">
            {novel.title}
          </NovelTitle>
        </Grid>
        <Grid container spacing={1} columns={20} alignItems="center">
          <Grid
            item
            xs={20}
            sm={5}
            sx={{
              minHeight: 60,
              minWidth: 60,
            }}
          >
            <ChartItem elevation={6}>
              <RankChart rank={novelRankNum} novels={null} />
            </ChartItem>
          </Grid>
          <Grid item xs={20} sm={15} alignItems="stretch">
            <Score
              novelRankNum={novelRankNum}
              globalPoint={novel.global_point}
              favoriteCount={novel.fav_novel_cnt}
              reviewerCount={novel.review_cnt}
              averageRate={novelAverageRate}
              commentCount={novel.impression_cnt}
            />
          </Grid>
        </Grid>
      </Grid>
      <NovelState novel={novel} />
    </Box>
  );
} 
export default ResultModal;
