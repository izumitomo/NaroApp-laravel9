import RankChart from "./RankChart";
import SortButton from "./SortButton";
/* import PointChart from "./PointChart"; */
import React, { useState, useEffect, memo } from "react";
import {Box, Grid} from '@mui/material/';
import { styleS, styleA, styleB, styleC, styleD, styleE, styleF, styleG, OrderP, styleSS, styleSSS } from "../styles/Result";
import {RankP, PointP, Item, DotItem, NovelTitle, KoshinDiv, KanketsuDiv, MikanDiv, TanpenDiv, ReviewDiv, NoReviewDiv, LengthDiv, StoryP,} from "../styles/Result"

const novelUrl = "https://ncode.syosetu.com/";

const Result = memo(({
	novels,
	setNovels,
	user,
}) => {
	
	//中心をランクC（5点）としてC,B,A,S,SS,SSSに分けるために6で割る。
	const pointUpScale = (novels[1].max_global_point - novels[1].global_point) / 6;
	//平均から0までをD,E,F,Gに分けるために4で割る。
	const pointDownScale = novels[1].global_point / 4;
	const favUpScale = (novels[1].max_favorite_count - novels[1].favorite_count) / 6;
	const favDownScale = novels[1].favorite_count / 4;
	const revUpScale = (novels[1].max_reviewer_count - novels[1].reviewer_count) / 6;
	const revDownScale = novels[1].reviewer_count / 4;
	const comUpScale = (novels[1].max_comment_count - novels[1].comment_count) / 6;
	const comDownScale = novels[1].comment_count / 4;
	//平均評価点は０にならないのでupscaleを採用する。
	const rateUpScale = (novels[1].max_average_rate - novels[1].average_rate) / 6;

	const novelDataList = novels[0].map((novel, index) => {
		let novelRankNum = [];
		let novelRankAlpha = [];

		//novel.all_hyoka_cntが0だった場合、平均評価を0にする。
		let novelAverageRate = Math.round(novel.all_point / novel.all_hyoka_cnt * 100) / 100;
		//評価者が0人の時.
		if (isNaN(novelAverageRate)) {
			novelAverageRate = 0;
		}
		novels[0][index].average_rate = novelAverageRate;

		for (let i = 1; i < 7; i++) {
			if (novel.global_point >= novels[1].max_global_point - pointUpScale * i) {
				novelRankNum.push(11 - i);
				break;
			}
			if (i == 6) {
				for (let j = 1; j < 5; j++) {
					if (novel.global_point >= novels[1].global_point - pointDownScale * j) {
						novelRankNum.push(5 - j);
						break;
					}
				}
			}
		}

		for (let i = 1; i < 7; i++) {
			if (novel.fav_novel_cnt >= novels[1].max_favorite_count - favUpScale * i) {
				novelRankNum.push(11 - i);
				break;
			}
			if (i == 6) {
				for (let j = 1; j < 5; j++) {
					if (novel.fav_novel_cnt >= novels[1].favorite_count - favDownScale * j) {
						novelRankNum.push(5 - j);
						break;
					}
				}
			}
		}
		for (let i = 1; i < 7; i++) {
			if (novel.all_hyoka_cnt >= novels[1].max_reviewer_count - revUpScale * i) {
				novelRankNum.push(11 - i);
				break;
			}
			if (i == 6) {
				for (let j = 1; j < 5; j++) {
					if (novel.all_hyoka_cnt >= novels[1].reviewer_count - revDownScale * j) {
						novelRankNum.push(5 - j);
						break;
					}
				}
			}
		}
		//平均評価点の計算だけ他とは微妙に違う。
		if (novels[1].average_rate == null) {
			novelRankNum.push(0);
		} else {
			for (let i = 1; i < 11; i++) {
				if (novelAverageRate >= novels[1].max_average_rate - rateUpScale * i) {
					novelRankNum.push(11 - i);
					break;
				}
				if (i == 10) {
					novelRankNum.push(1);
				}
			}
		}

		for (let i = 1; i < 7; i++) {
			if (novel.impression_cnt >= novels[1].max_comment_count - comUpScale * i) {
				novelRankNum.push(11 - i);
				break;
			}
			if (i == 6) {
				for (let j = 1; j < 5; j++) {
					if (novel.impression_cnt >= novels[1].comment_count - comDownScale * j) {
						novelRankNum.push(5 - j);
						break;
					}
				}
			}
		}
		//順位のstyleを格納
		let styleOrder; 
		if (index <= 9) { styleOrder = styleSSS; }
		else if (index <= 19) { styleOrder = styleSS; }
		else if (index <= 29) { styleOrder = styleS; }
		else if (index <= 39) { styleOrder = styleA; }
		else if (index <= 49) { styleOrder = styleB; }
		else if (index <= 59) { styleOrder = styleC; }
		else if (index <= 69) { styleOrder = styleD; }
		else if (index <= 79) { styleOrder = styleE; }
		else if (index <= 89) { styleOrder = styleF; }
		else { styleOrder = styleG; }



		//ランクをアルファベットにして格納
		let styleRank = [];
		novelRankNum.forEach(function (rank) {
			if (rank == 10) { novelRankAlpha.push("SSS"); styleRank.push(styleS); }
			else if (rank == 9) { novelRankAlpha.push("SS"); styleRank.push(styleS); }
			else if (rank == 8) { novelRankAlpha.push("S"); styleRank.push(styleS); }
			else if (rank == 7) { novelRankAlpha.push("A"); styleRank.push(styleA); }
			else if (rank == 6) { novelRankAlpha.push("B"); styleRank.push(styleB); }
			else if (rank == 5) { novelRankAlpha.push("C"); styleRank.push(styleC); }
			else if (rank == 4) { novelRankAlpha.push("D"); styleRank.push(styleD); }
			else if (rank == 3) { novelRankAlpha.push("E"); styleRank.push(styleE); }
			else if (rank == 2) { novelRankAlpha.push("F"); styleRank.push(styleF); }
			else if (rank == 1) { novelRankAlpha.push("G"); styleRank.push(styleG); }
			else { novelRankAlpha.push("N"); styleRank.push(styleN) }
		})
		
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
		}, [novels])		
		
		return (
			<div key={novel.ncode}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={1} columns={20} marginBottom={1} marginTop={1} >
						<Grid item xs={2}>
							<OrderP style={styleOrder}>{index + 1}</OrderP>
						</Grid>
						<Grid item xs={18} margin="auto">
							<NovelTitle href={novelUrl + novel.ncode} target="_blank">
								{novel.title}
							</NovelTitle>
						</Grid>
						<Grid container spacing={1} columns={20} alignItems="center">
							<Grid item xs={20} sm={5}sx={{
									minHeight: 60,
									minWidth: 60,
								}}
							>
								<Item>
									<RankChart rank={novelRankNum} novels={novels} />
								</Item>
							</Grid>
							<Grid item xs={4} sm={3} alignItems="stretch">
								<DotItem>
									ポイント
									<br />
									<RankP style={styleRank[0]}>{novelRankAlpha[0]}</RankP>
									<PointP>{novel.global_point}</PointP>
								</DotItem>
							</Grid>
							<Grid item xs={4} sm={3}>
								<DotItem>
									ブクマ
									<br />
									<RankP style={styleRank[1]}>{novelRankAlpha[1]}</RankP>
									<PointP>{novel.fav_novel_cnt}</PointP>
								</DotItem>
							</Grid>
							<Grid item xs={4} sm={3}>
								<DotItem>
									ひょうかしゃ
									<br />
									<RankP style={styleRank[2]}>{novelRankAlpha[2]}</RankP>
									<PointP>{novel.all_hyoka_cnt}</PointP>
								</DotItem>
							</Grid>
							<Grid item xs={4} sm={3}>
								<DotItem>
									へいきんてん
									<br />
									<RankP style={styleRank[3]}>{novelRankAlpha[3]}</RankP>
									<PointP>{novelAverageRate}</PointP>
								</DotItem>
							</Grid>
							<Grid item xs={4} sm={3}>
								<DotItem>
									かんそう
									<br />
									<RankP style={styleRank[4]}>{novelRankAlpha[4]}</RankP>
									<PointP>{novel.impression_cnt}</PointP>
								</DotItem>
							</Grid>
						</Grid>
					</Grid>
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
								<StoryP onClick={() => setStory(novel.story)}>
									{story}
								</StoryP>
							</Grid>
						</Grid>
					</div>
				</Box>
			</div>
		);
	});

	
	return (
    <div>
			<SortButton novels={novels} setNovels={setNovels} user={user} />
      {novelDataList}
    </div>
  );
})

export default Result;

