import RankChart from "./RankChart";
import SortButton from "./SortButton";
/* import PointChart from "./PointChart"; */
import React, { useState, useEffect, memo } from "react";
import {Box, Grid} from '@mui/material/';
import { ARankP, BRankP, CRankP, DRankP, ERankP, FRankP, GRankP, NRankP, SRankP, SSRankP, SSSRankP } from "../styles/Result";
import { PointP, DotItem, ChartItem, NovelTitle, KoshinDiv, KanketsuDiv, MikanDiv, TanpenDiv, ReviewDiv, NoReviewDiv, LengthDiv, StoryP} from "../styles/Result"
import html2canvas from "html2canvas";

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
		let orderPara; 
		if (index <= 9) { orderPara = <SSSRankP>{index + 1}</SSSRankP>; }
		else if (index <= 19) { orderPara = <SSRankP>{index + 1}</SSRankP>; }
		else if (index <= 29) { orderPara = <SRankP>{index + 1}</SRankP>; }
		else if (index <= 39) { orderPara = <ARankP>{index + 1}</ARankP>; }
		else if (index <= 49) { orderPara = <BRankP>{index + 1}</BRankP>; }
		else if (index <= 59) { orderPara = <CRankP>{index + 1}</CRankP>; }
		else if (index <= 69) { orderPara = <DRankP>{index + 1}</DRankP>; }
		else if (index <= 79) { orderPara = <ERankP>{index + 1}</ERankP>; }
		else if (index <= 89) { orderPara = <FRankP>{index + 1}</FRankP>; }
		else { orderPara = <GRankP>{index + 1}</GRankP>; } 



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

		const saveAsImage = (uri) => {
      const downloadLink = document.createElement("a");

      if (typeof downloadLink.download === "string") {
        downloadLink.href = uri;
        // ファイル名
        downloadLink.download = "component.png";
        // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
        document.body.appendChild(downloadLink);
        // ダウンロードリンクが設定された a タグをクリック
        downloadLink.click();
        // Firefox 対策で追加したリンクを削除しておく
        document.body.removeChild(downloadLink);
      } else {
        window.open(uri);
      }
    };

    const onClickExport = () => {
      // 画像に変換する component の id を指定
			const target = document.getElementById(novel.ncode);
      html2canvas(target).then((canvas) => {
        const targetImgUri = canvas.toDataURL("img/png");
        saveAsImage(targetImgUri);
      });
		};
		
		const [open, setOpen] = useState(false);
		const handleMordal = () => {
			console.log("aaa");
			setOpen(!open);
		}
		
		return (
			<div key={novel.ncode}>
				<Box sx={{ flexGrow: 1 }} id={novel.ncode}>
					<Grid container spacing={1} columns={20} marginBottom={1} marginTop={1} onClick={handleMordal}>
						<Grid item xs={4} sm={2}>
							{orderPara}
						</Grid>
						<Grid item xs={16} sm={18} margin="auto">
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
								<ChartItem elevation={6}>
									<RankChart rank={novelRankNum} novels={novels} />
								</ChartItem>
							</Grid>
							<Grid item xs={4} sm={3} alignItems="stretch">
								<DotItem elevation={6}>
									ポイント
									<br />
									{novelRankAlpha[0]}
									<PointP>{novel.global_point}</PointP>
								</DotItem>
							</Grid>
							<Grid item xs={4} sm={3}>
								<DotItem elevation={6}>
									ブクマ
									<br />
									{novelRankAlpha[1]}
									<PointP>{novel.fav_novel_cnt}</PointP>
								</DotItem>
							</Grid>
							<Grid item xs={4} sm={3}>
								<DotItem elevation={6}>
									ひょうかしゃ
									<br />
									{novelRankAlpha[2]}
									<PointP>{novel.all_hyoka_cnt}</PointP>
								</DotItem>
							</Grid>
							<Grid item xs={4} sm={3}>
								<DotItem elevation={6}>
									へいきんてん
									<br />
									{novelRankAlpha[3]}
									<PointP>{novelAverageRate}</PointP>
								</DotItem>
							</Grid>
							<Grid item xs={4} sm={3}>
								<DotItem  elevation={6}>
									かんそう
									<br />
									{novelRankAlpha[4]}
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

					<button onClick={() => onClickExport()}>PNG出力</button>
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

