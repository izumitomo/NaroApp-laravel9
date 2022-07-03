import React, { memo, useEffect, useState, useRef } from "react";
import {Box, Grid,} from '@mui/material/';
import { NRankP,  FadeNRankP, FadeGRankP, FadeERankP, FadeDRankP, FadeFRankP, ShineCRankP, ShineBRankP, ShineARankP, ShineSRankP, ShineSSRankP, ShineSSSRankP, HiddenRankP } from "../styles/Common";
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
			if (itemPos < windowY * 9/10 && 0 < itemPos && animation == false) {
				setAnimation(true);
				//console.log(animation, "true!!!!!")
			} else if ((itemPos < 0 || windowY * 9/10 < itemPos) && animation == true){
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
			if (rank == 10) { novelRankAlpha.push(<ShineSSSRankP>SSS</ShineSSSRankP >); }
			else if (rank == 9) { novelRankAlpha.push(<ShineSSRankP>SS</ShineSSRankP>); }
			else if (rank == 8) { novelRankAlpha.push(<ShineSRankP>S</ShineSRankP>); }
			else if (rank == 7) { novelRankAlpha.push(<ShineARankP>A</ShineARankP>); }
			else if (rank == 6) { novelRankAlpha.push(<ShineBRankP>B</ShineBRankP>); }
			else if (rank == 5) { novelRankAlpha.push(<ShineCRankP>C</ShineCRankP>); }
			else if (rank == 4) { novelRankAlpha.push(<FadeDRankP>D</FadeDRankP>); }
			else if (rank == 3) { novelRankAlpha.push(<FadeERankP>E</FadeERankP>); }
			else if (rank == 2) { novelRankAlpha.push(<FadeFRankP>F</FadeFRankP>); }
			else if (rank == 1) { novelRankAlpha.push(<FadeGRankP>G</FadeGRankP>); }
			else { novelRankAlpha.push(<FadeNRankP>N</FadeNRankP>); }
		})
	} else {
		novelRankNum.forEach(function (rank) {
			if (rank == 10) { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
			else if (rank == 9) { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
			else if (rank == 8) { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
			else if (rank == 7) { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
			else if (rank == 6) { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
			else if (rank == 5) { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
			else if (rank == 4) { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
			else if (rank == 3) { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
			else if (rank == 2) { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
			else if (rank == 1) { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
			else { novelRankAlpha.push(<HiddenRankP>?</HiddenRankP>); }
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

