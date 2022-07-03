import RankChart from "./RankChart";
import SortButton from "./SortButton";
import Score from "./Score";
import NovelState from "./NovelState";
import React, { useState, useEffect, memo, useRef, useMemo } from "react";
import { Box, Button, Grid, Modal } from '@mui/material/';
import { ARankP, BRankP, CRankP, DRankP, ERankP, FRankP, GRankP, NRankP, SRankP, SSRankP, SSSRankP } from "../styles/Common";
import { ChartItem, NovelTitle, modalStyle } from "../styles/Result";
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
		let novelAverageRate = Math.round(novel.all_point / novel.all_hyoka_cnt * 100) / 100;
		const novelRankNum = useMemo(() => {
      let novelRankNum = [];

     //novel.all_hyoka_cntが0だった場合、平均評価を0にする。
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
			return novelRankNum;
    },[novels]);

		//順位のstyleを格納
		const orderPara = useMemo(() => {
		let orderPara; 
		if (index <= 5) { orderPara = <SSSRankP>{index + 1}</SSSRankP>; }
			else if (index <= 9) { orderPara = <SRankP>{index + 1}</SRankP>; }
			else if (index <= 19) { orderPara = <ARankP>{index + 1}</ARankP>; }
			else if (index <= 29) { orderPara = <BRankP>{index + 1}</BRankP>; }
			else if (index <= 39) { orderPara = <CRankP>{index + 1}</CRankP>; }
			else if (index <= 49) { orderPara = <DRankP>{index + 1}</DRankP>; }
			else if (index <= 59) { orderPara = <ERankP>{index + 1}</ERankP>; }
			else if (index <= 69) { orderPara = <FRankP>{index + 1}</FRankP>; }
			else if (index <= 79) { orderPara = <GRankP>{index + 1}</GRankP>; }
			else { orderPara = <GRankP>{index + 1}</GRankP>; }
			return orderPara;
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
		
		const [modal, setModal] = useState(false);
		const handleModal = () => {
			console.log(modal);
			setModal(!modal);
		}
		
		return (
			<div key={novel.ncode}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid
						container
						spacing={1}
						columns={20}
						marginBottom={1}
						marginTop={1}
						onClick={handleModal}
					>
						<Modal open={modal} onClose={handleModal}>
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
										<NRankP>{index + 1}</NRankP>
									</Grid>
									<Grid item xs={16} sm={18} margin="auto">
										<NovelTitle href={novelUrl + novel.ncode} target="_blank">
											{novel.title}
										</NovelTitle>
									</Grid>
									<Grid container spacing={1} columns={20} alignItems="center">
										<Grid item xs={20} sm={5}>
											<ChartItem elevation={10}>
												<RankChart rank={novelRankNum} novels={novels} animationFlag={false} />
											</ChartItem>
										</Grid>
										<Grid item xs={20} sm={15} alignItems="stretch">
											<Score
												novelRankNum={novelRankNum}
												globalPoint={novel.global_point}
												favoriteCount={novel.fav_novel_cnt}
												reviewerCount={novel.all_hyoka_cnt}
												averageRate={novelAverageRate}
												commentCount={novel.impression_cnt}
												animationFlag={false}
											/>
										</Grid>
									</Grid>
								</Grid>
								<NovelState novel={novel} />
							</Box>
						</Modal>
						<Grid item xs={4} sm={2}>
							{orderPara}
						</Grid>
						<Grid item xs={16} sm={18} margin="auto">
							<NovelTitle href={novelUrl + novel.ncode} target="_blank">
								{novel.title}
							</NovelTitle>
						</Grid>
						<Grid container spacing={1} columns={20} alignItems="center">
							<Grid item xs={20} sm={5}>
								<ChartItem elevation={6}>
									<RankChart rank={novelRankNum} novels={novels} animationFlag={true}/>
								</ChartItem>
							</Grid>
							<Grid item xs={20} sm={15} alignItems="stretch">
								<Score
									novelRankNum={novelRankNum}
									globalPoint={novel.global_point}
									favoriteCount={novel.fav_novel_cnt}
									reviewerCount={novel.all_hyoka_cnt}
									averageRate={novelAverageRate}
									commentCount={novel.impression_cnt}
									animationFlag={true}
								/>
							</Grid>
						</Grid>
					</Grid>
					<NovelState novel={novel} />
				</Box>
{/* 				<button onClick={() => onClickExport()}>PNG出力</button> */}
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

