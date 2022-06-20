import RankChart from "./RankChart";
/* import PointChart from "./PointChart"; */
import React, { useEffect } from 'react';
import styled from "styled-components";
import {
	Box,
	Paper,
	Grid,
	Button,
 } from '@mui/material/';

const styleSSS = {
	color: "#FF99FF",
}
const styleSS = {
	color: "#FF99FF",
}
const styleS = {
	color: "#FF99FF",
}
const styleA = {
	color: "#FF33CC",
}
const styleB = {
	color: "#FF0000",
}
const styleC = {
	color: "#FFC000",
}
const styleD = {
	color: "#FFD966",
}
const styleE = {
	color: "#70AD47",
}
const styleF = {
	color: "#4472C4",
}
const styleG = {
	color: "#A5A5A5",
}
const styleN = {
	textAlign: "center",
	color: "black",
}

const RankP = styled.p`
	text-align: center;
	font-size: 44px;
	margin: auto;
	@media (min-width: 1200px){
		font-size: 60px;
	}
`;

const PointP = styled(RankP)`
  font-size: 40px;
  font-family: "pixel10-r";
  @media (max-width: 767px) {
    font-size: 15px;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 25px;
  }
`;

const novelUrl = "https://ncode.syosetu.com/"

const Item = styled(Paper)`
  &&&{
		padding: 8px;
		text-align center;
	}
`;

const DotItem = styled(Paper)`
  text-align: center;
  font-size: 20px;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 9px;
  }
  @media (max-width: 767px) and (min-width: 601px) {
    font-size: 10px;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 15px;
  }
`;

const NovelTitle = styled.a`
	text-align: center;
	color: black;
	font-size: 25px;
	font-family: "milk-b";
	
	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

/* const StateP = styled.p`
	background
  text-align: center;
  color: black;
  font-size: 25px;
  font-family: "milk-b";
`; */

const KoshinDiv = styled.div`
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

const KanketsuDiv = styled(KoshinDiv)`
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

const MikanDiv = styled(KoshinDiv)`
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

const TanpenDiv = styled.div`
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

const ReviewDiv = styled(KoshinDiv)`
`;

const NoReviewDiv = styled(KoshinDiv)`
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

const LengthDiv = styled.div`
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

const StoryP = styled.p`
	font-family: "milk-b";
`;

const PtButton = styled(Button)`
  &&&{
		color: black;
		background-color: rgb(227 255 98);
		font-family: "pixel10-r";
		font-size: 20px;
	}`;

let ptSortNovels, favSortNovels, revSortNovels, rateSortNovels, comSortNovels;
// sortNovelsの初期化を関数コンポーネント内のスコープに入れると、chartFlagの変化による再レンダリング時に初期化されてしまい、useEffect内のソートしたsortNovelsが上書きされてしまう。
export default function Search({
	novels,
	setNovels,
}) {

	const handlePt = () => {
		//novelsを変更することで、Searchコンポーネントの再レンダリングを行う。
		setNovels([ptSortNovels, novels[1]]);
		console.log("handlePt Working!");
		console.log(ptSortNovels);
	}
	const handleFav = () => {
		setNovels([favSortNovels, novels[1]]);
	}
	const handleRev = () => {
		setNovels([revSortNovels, novels[1]]);
	}
	const handleRate = () => {
		setNovels([rateSortNovels, novels[1]]);
	}
	const handleCom = () => {
		setNovels([comSortNovels, novels[1]]);
	}
	/* const averagePoint = [
		novels[1].global_point / novels[1].max_global_point * 100,
		novels[1].favorite_count / novels[1].max_favorite_count * 100,
		novels[1].reviewer_count / novels[1].max_reviewer_count * 100,
		novels[1].average_rate / novels[1].max_average_rate * 100,
		novels[1].comment_count / novels[1].max_comment_count * 100
		] */
	
	
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

	let sortList = [];


	const novelDataList = novels[0].map((novel, index) => {
		let novelRankNum = [];
		let novelRankAlpha = [];

		/* const novelPoint = [
			Math.floor(novel.global_point / novels[1].max_global_point * 100),
			Math.floor(novel.fav_novel_cnt / novels[1].max_favorite_count * 100),
			Math.floor(novel.all_hyoka_cnt / novels[1].max_reviewer_count * 100),
			(novel.all_point/novel.all_hyoka_cnt) / novels[1].max_average_rate * 100,
			Math.floor(novel.impression_cnt / novels[1].max_comment_count * 100)
		] */
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

		//ランクをアルファベットにして格納
		let styleRank = [];
		novelRankNum.forEach(function (rank) {
			if (rank == 10) { novelRankAlpha.push("SSS"); styleRank.push(styleSSS) }
			else if (rank == 9) { novelRankAlpha.push("SS"); styleRank.push(styleSS) }
			else if (rank == 8) { novelRankAlpha.push("S"); styleRank.push(styleS) }
			else if (rank == 7) { novelRankAlpha.push("A"); styleRank.push(styleA) }
			else if (rank == 6) { novelRankAlpha.push("B"); styleRank.push(styleB) }
			else if (rank == 5) { novelRankAlpha.push("C"); styleRank.push(styleC) }
			else if (rank == 4) { novelRankAlpha.push("D"); styleRank.push(styleD) }
			else if (rank == 3) { novelRankAlpha.push("E"); styleRank.push(styleE) }
			else if (rank == 2) { novelRankAlpha.push("F"); styleRank.push(styleF) }
			else if (rank == 1) { novelRankAlpha.push("G"); styleRank.push(styleG) }
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

		const [chartFlag, setChartFlag] = React.useState(false);
		//スクロール処理
		let graphAnim = function () {
			let wy = window.pageYOffset;//Y軸スクロール量
			let wb = wy + window.innerHeight*4/5;// ブラウザの大きさを基に調整。     
			// チャートの位置を取得
			let chartPos = wy + el.current.getBoundingClientRect().bottom;

			// チャートの位置がウィンドウの最下部位置を超えたら起動
			/* if (chartPos <= wb && chartFlag == false) {
				setChartFlag(true);
			} */
			if (wb <= chartPos + window.innerHeight*1/2 && chartPos <= wb && chartFlag == false) {
				setChartFlag(true);
			} else if (wb < chartPos || chartPos + window.innerHeight*2/3 < wb ) {
				setChartFlag(false);
			}
		}
		window.addEventListener('load', graphAnim); // 読み込み時の処理
		window.addEventListener('scroll', graphAnim); // スクロール時の処理
		

		const el = React.useRef(null);
		/* 		React.useEffect(() => {
					//console.log(el.current);
					console.log(JSON.stringify(el.current.getBoundingClientRect()));
				}, []); */

		const [story, setStory] = React.useState(
			novel.story.length < 210
				? novel.story
				: novel.story.substring(0, 210) + "……"
		);
		React.useEffect(() => {
			setStory(
        novel.story.length < 210
          ? novel.story
          : novel.story.substring(0, 210) + "……"
      );
		}, [novels])
		
		React.useEffect(() => {
			const list = {
				index: index,
				title: novel.title,
				story: novel.story,
				ncode: novel.ncode,
				Pt: novel.global_point,
				Fav: novel.fav_novel_cnt,
				Rev: novel.all_hyoka_cnt,
				Rate: novelAverageRate,
				Com: novel.impression_cnt,
				RankNum: novelRankNum,
				RankAlpha: novelRankAlpha,
				length: novel.length,
				state: novelState,
				review: novelReview,
			};
			sortList.push(list);
			if (index == 49) {
				sortList.sort((a, b) => {
					return b.Pt - a.Pt;
				});
				ptSortNovels = novels[0].concat();
				ptSortNovels.sort((a, b) => {
					return b.global_point - a.global_point;
				})
				favSortNovels = novels[0].concat();
				favSortNovels.sort((a, b) => {
					return b.fav_novel_cnt - a.fav_novel_cnt;
				})
				revSortNovels = novels[0].concat();
				revSortNovels.sort((a, b) => {
					return b.all_hyoka_cnt - a.all_hyoka_cnt;
				})
				comSortNovels = novels[0].concat();
				comSortNovels.sort((a, b) => {
					return b.impression_cnt - a.impression_cnt;
				})
				rateSortNovels = novels[0].concat();
				rateSortNovels.sort((a, b) => {
					return b.average_rate - a.average_rate;
				})
				//console.log(ptSortNovels);
				console.log("useEffect sort complete!")
			}
		}, [novels]);
		
		
		return (
			<div key={novel.ncode}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={1} columns={20}>
						<Grid item xs={20}>
							<div
								style={{ textAlign: "center", marginBottom: 10, marginTop: 10 }}
							>
								<NovelTitle href={novelUrl + novel.ncode} target="_blank">
									{novel.title}
								</NovelTitle>
							</div>
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
								<Item>
									<div ref={el}>
										{chartFlag ? (
											<RankChart rank={novelRankNum} animation={true}/>
										) : (
											<RankChart rank={null} animation={false}/>
										)}
									</div>
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
      <PtButton variant="contained" onClick={handlePt}>
        Ptそーと
      </PtButton>
      <PtButton variant="contained" onClick={handleFav}>
        Favそーと
      </PtButton>
      <PtButton variant="contained" onClick={handleRev}>
        Revそーと
      </PtButton>
      <PtButton variant="contained" onClick={handleRate}>
        Rateそーと
      </PtButton>
      <PtButton variant="contained" onClick={handleCom}>
        Comそーと
      </PtButton>
      {novelDataList}
    </div>
  );
}

