import React, { memo, useEffect, useState, useRef } from "react";
import {Box, Grid,} from '@mui/material/';
import { ARankNonAnimationP, ARankP, BRankNonAnimationP, BRankP, CRankNonAnimationP, CRankP, DRankP, ERankP, FRankP, GRankP, NRankP, SRankNonAnimationP, SRankP, SSRankP, SSSRankP } from "../styles/Common";
import { PointP, DotItem } from "../styles/Score"


const Score = memo(({
	novelRankNum,
	globalPoint,
	favoriteCount,
	reviewerCount,
	averageRate,
	commentCount,
	animationFlag,
}) => {
	const [animation, setAnimation] = useState(false);

	useEffect(() => {
		const graphAnim = function () {
			const windowY = window.innerHeight; // ブラウザの大きさを取得。
			// elの相対位置を取得
			const itemPos = (el.current.getBoundingClientRect().top + el.current.getBoundingClientRect().bottom) / 2;
			// チャートの位置がブラウザ中央付近になったら起動
			if (itemPos < windowY * 4/5 && 0 < itemPos && animation == false) {
				setAnimation(true);
				//console.log(animation, "true!!!!!")
			} else if ((itemPos < 0 || windowY * 4/5 < itemPos) && animation == true){
				setAnimation(false);
			}
		};
		window.addEventListener("scroll", graphAnim); // スクロール時の処理

		return () => {
			console.log("Score willunmount!!");
			window.removeEventListener("scroll", graphAnim);
		};
	});

	const el = useRef(null);
	useEffect(() => {
		setAnimation(false);
	}, [novelRankNum]);
	
	console.log("Score rerendering!");


	let novelRankAlpha = []
	//ランクをアルファベットにしてタグごと格納
	if (animationFlag == true && animation == true) {
		novelRankNum.forEach(function (rank) {
			if (rank == 10) { novelRankAlpha.push(<SSSRankP>SSS</SSSRankP >); }
			else if (rank == 9) { novelRankAlpha.push(<SSRankP>SS</SSRankP>); }
			else if (rank == 8) { novelRankAlpha.push(<SRankP>S</SRankP>); }
			else if (rank == 7) { novelRankAlpha.push(<ARankP>A</ARankP>); }
			else if (rank == 6) { novelRankAlpha.push(<BRankP>B</BRankP>); }
			else if (rank == 5) { novelRankAlpha.push(<CRankP>C</CRankP>); }
			else if (rank == 4) { novelRankAlpha.push(<DRankP>D</DRankP>); }
			else if (rank == 3) { novelRankAlpha.push(<ERankP>E</ERankP>); }
			else if (rank == 2) { novelRankAlpha.push(<FRankP>F</FRankP>); }
			else if (rank == 1) { novelRankAlpha.push(<GRankP>G</GRankP>); }
			else { novelRankAlpha.push(<NRankP>N</NRankP>); }
		})
	} else {
		novelRankNum.forEach(function (rank) {
			if (rank == 10) { novelRankAlpha.push(<SRankNonAnimationP>SSS</SRankNonAnimationP>); }
			else if (rank == 9) { novelRankAlpha.push(<SRankNonAnimationP>SS</SRankNonAnimationP>); }
			else if (rank == 8) { novelRankAlpha.push(<SRankNonAnimationP>S</SRankNonAnimationP>); }
			else if (rank == 7) { novelRankAlpha.push(<ARankNonAnimationP>A</ARankNonAnimationP>); }
			else if (rank == 6) { novelRankAlpha.push(<BRankNonAnimationP>B</BRankNonAnimationP >); }
			else if (rank == 5) { novelRankAlpha.push(<CRankNonAnimationP>C</CRankNonAnimationP >); }
			else if (rank == 4) { novelRankAlpha.push(<DRankP>D</DRankP>); }
			else if (rank == 3) { novelRankAlpha.push(<ERankP>E</ERankP>); }
			else if (rank == 2) { novelRankAlpha.push(<FRankP>F</FRankP>); }
			else if (rank == 1) { novelRankAlpha.push(<GRankP>G</GRankP>); }
			else { novelRankAlpha.push(<NRankP>N</NRankP>); }
		})
	}

	return (
    <Box sx={{ flexGrow: 1 }} ref={el}>
      <Grid container spacing={1} columns={5} alignItems="center">
        <Grid item xs={1} alignItems="stretch">
          <DotItem elevation={10}>
            ポイント
            <br />
            {novelRankAlpha[0]}
            <PointP>{globalPoint}</PointP>
          </DotItem>
        </Grid>
        <Grid item xs={1}>
          <DotItem elevation={10}>
            ブクマ
            <br />
            {novelRankAlpha[1]}
            <PointP>{favoriteCount}</PointP>
          </DotItem>
        </Grid>
        <Grid item xs={1}>
          <DotItem elevation={10}>
            ひょうかしゃ
            <br />
            {novelRankAlpha[2]}
            <PointP>{reviewerCount}</PointP>
          </DotItem>
        </Grid>
        <Grid item xs={1}>
          <DotItem elevation={10}>
            へいきんてん
            <br />
            {novelRankAlpha[3]}
            <PointP>{averageRate}</PointP>
          </DotItem>
        </Grid>
        <Grid item xs={1}>
          <DotItem elevation={10}>
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

