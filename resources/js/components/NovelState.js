import React, { useState, useEffect, memo } from "react";
import { Box, Grid } from '@mui/material/';
import { KoshinDiv, KanketsuDiv, MikanDiv, TanpenDiv, ReviewDiv, NoReviewDiv, LengthDiv, StoryP, } from "../styles/NovelState"


const novelUrl = "https://ncode.syosetu.com/";

const NovelState = memo(({
  novel
}) => {
	
		//更新状態を判別
		let novelState;
		if (novel.end == 0 && novel.novel_type == 1) {
			novelState = (
				<KanketsuDiv>
					<p style={{ margin: 0 }}>
						かんけつ！
					</p>
				</KanketsuDiv>
			);
		} else if (novel.end == 0 && novel.novel_type == 2) {
			novelState = (
				<TanpenDiv>
					<p style={{ margin: 0 }}>
						たんぺん
					</p>
				</TanpenDiv>
			);
		} else if (novel.isstop == 0) {
			novelState = (
				<KoshinDiv>
					<p style={{ margin: 0 }}>
						こうしん
						<span style={{ fontFamily: "メイリオ", fontWeight: "bold" }}>
							〇
						</span>
					</p>
				</KoshinDiv>
			);
		} else {
			novelState = (
				<MikanDiv>
					<p style={{ margin: 0 }}>
						こうしん
						<span style={{ fontFamily: "Sawarabi Mincho", fontWeight: "bold" }}>
							△
						</span>
					</p>
				</MikanDiv>
			);
		}
		
		let novelReview;
		//レビュー有か判別
		if (novel.review_cnt > 0) {
			novelReview = (
				<ReviewDiv>
					<p style={{ margin: 0 }}>
						レビュー
					</p>
				</ReviewDiv>
			);
		} else {
			novelReview = (
				<NoReviewDiv>
					<p style={{ margin: 0 }}>
						レビュー
					</p>
				</NoReviewDiv>
			);
	}
	const [story, setStory] = useState(
		novel.story.length < 210
			? novel.story
			: novel.story.substring(0, 210) + "……"
	);
	useEffect(() => {
		setStory(
			novel.story.length < 210
				? novel.story
				: novel.story.substring(0, 210) + "……"
		);
	},[novel]);
		
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={{ textAlign: "center", marginTop: 10, width: "100%" }}>
        <Grid container spacing={1} columns={20}>
          <Grid item xs={10} sm={7}>
            {novelState}
          </Grid>
          <Grid item xs={10} sm={7}>
            {novelReview}
          </Grid>
          <Grid item xs={20} sm={6}>
            <LengthDiv>もじ：{novel.length}</LengthDiv>
          </Grid>
          <Grid item xs={20}>
            <StoryP onClick={() => setStory(novel.story)}>{story}</StoryP>
          </Grid>
        </Grid>
      </div>
    </Box>
    );
	});

export default NovelState;

