import RankChart from "./RankChart";
import PointChart from "./PointChart"
import React from 'react';
import styled from "styled-components";
import { styled as styledmui } from '@mui/material/styles';
import {
	Box,
	Paper,
	Grid
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

const Item = styledmui(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

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

const StateP = styled.p`
	background
  text-align: center;
  color: black;
  font-size: 25px;
  font-family: "milk-b";
`;

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

/* function conditional(id) {
  // ウィンドウ上端の位置を取得
  let docTop = $(window).scrollTop();
  // ウィンドウ下端の位置を取得
  let docBottom = docTop + $(window).height();
  // チャート上端の位置を取得
  let elemTop = $(id).offset().top;
  // チャート下端の位置を取得
  let elemBottom = elemTop + $(id).height();
  // 「チャートを表示する要素がウィンドウ内にある場合に真となる式」を返す
  return elemTop <= docBottom && docTop <= elemBottom;
} */


export default function Search({
	response,
}) {
	/* const averagePoint = [
		response[1].global_point / response[1].max_global_point * 100,
		response[1].favorite_count / response[1].max_favorite_count * 100,
		response[1].reviewer_count / response[1].max_reviewer_count * 100,
		response[1].average_rate / response[1].max_average_rate * 100,
		response[1].comment_count / response[1].max_comment_count * 100
		] */
	
	
	//中心をランクC（5点）としてC,B,A,S,SS,SSSに分けるために6で割る。
	const pointUpScale = (response[1].max_global_point - response[1].global_point) / 6;
	//平均から0までをD,E,F,Gに分けるために4で割る。
	const pointDownScale = response[1].global_point / 4;
	const favUpScale = (response[1].max_favorite_count - response[1].favorite_count) / 6;
	const favDownScale = response[1].favorite_count / 4;
	const revUpScale = (response[1].max_reviewer_count - response[1].reviewer_count) / 6;
	const revDownScale = response[1].reviewer_count / 4;
	const comUpScale = (response[1].max_comment_count - response[1].comment_count) / 6;
	const comDownScale = response[1].comment_count / 4;
	//平均評価点は０にならないのでupscaleを採用する。
	const rateUpScale = (response[1].max_average_rate - response[1].average_rate) / 6;


	const novelDataList = response[0].map(novel => {
		const [chartFlag, setChartFlag] = React.useState(false);
		let novelRankNum = [];
		let novelRankAlpha = [];

		/* const novelPoint = [
			Math.floor(novel.global_point / response[1].max_global_point * 100),
			Math.floor(novel.fav_novel_cnt / response[1].max_favorite_count * 100),
			Math.floor(novel.all_hyoka_cnt / response[1].max_reviewer_count * 100),
			(novel.all_point/novel.all_hyoka_cnt) / response[1].max_average_rate * 100,
			Math.floor(novel.impression_cnt / response[1].max_comment_count * 100)
		] */
		//novel.all_hyoka_cntが0だった場合、平均評価を0にする。
		let novelAverageRate = Math.round(novel.all_point/novel.all_hyoka_cnt * 100) / 100;
		if (isNaN(novelAverageRate)) {
			novelAverageRate = 0;
		}

		for (let i = 1; i < 7; i++) {
			if (novel.global_point >= response[1].max_global_point - pointUpScale*i) {
				novelRankNum.push(11-i);
				break;
			}
			if (i == 6) {
				for (let j = 1; j < 5; j++) {
					if (novel.global_point >= response[1].global_point - pointDownScale*j) {
						novelRankNum.push(5-j);
						break;
					}
				}
			}
		}

		for (let i = 1; i < 7; i++) {
			if (novel.fav_novel_cnt >= response[1].max_favorite_count - favUpScale*i) {
				novelRankNum.push(11-i);
				break;
			}
			if (i == 6) {
				for (let j = 1; j < 5; j++) {
					if (novel.fav_novel_cnt >= response[1].favorite_count - favDownScale*j) {
						novelRankNum.push(5-j);
						break;
					}
				}
			}
		}
		for (let i = 1; i < 7; i++) {
			if (novel.all_hyoka_cnt >= response[1].max_reviewer_count - revUpScale*i) {
				novelRankNum.push(11-i);
				break;
			}
			if (i == 6) {
				for (let j = 1; j < 5; j++) {
					if (novel.all_hyoka_cnt >= response[1].reviewer_count - revDownScale*j) {
						novelRankNum.push(5-j);
						break;
					}
				}
			}
		}
		//平均評価点の計算だけ他とは微妙に違う。
		if (response[1].average_rate == null ) {
			novelRankNum.push(0);
		}else{
			for (let i = 1; i < 11; i++) {
				if (novelAverageRate >= response[1].max_average_rate - rateUpScale*i) {
					novelRankNum.push(11-i);
					break;
				}
				if (i == 10){
					novelRankNum.push(1);
				}
			}
		}

		for (let i = 1; i < 7; i++) {
			if (novel.impression_cnt >= response[1].max_comment_count - comUpScale*i) {
				novelRankNum.push(11-i);
				break;
			}
			if (i == 6) {
				for (let j = 1; j < 5; j++) {
					if (novel.impression_cnt >= response[1].comment_count - comDownScale*j) {
						novelRankNum.push(5-j);
						break;
					}
				}
			}
		}

		//ランクをアルファベットにして格納
		let styleRank = [];
		novelRankNum.forEach(function(rank){
			if (rank == 10){novelRankAlpha.push("SSS"); styleRank.push(styleSSS)}
			else if (rank == 9){novelRankAlpha.push("SS"); styleRank.push(styleSS)}
			else if (rank == 8){novelRankAlpha.push("S"); styleRank.push(styleS)}
			else if (rank == 7){novelRankAlpha.push("A"); styleRank.push(styleA)}
			else if (rank == 6){novelRankAlpha.push("B"); styleRank.push(styleB)}
			else if (rank == 5){novelRankAlpha.push("C"); styleRank.push(styleC)}
			else if (rank == 4){novelRankAlpha.push("D"); styleRank.push(styleD)}
			else if (rank == 3){novelRankAlpha.push("E"); styleRank.push(styleE)}
			else if (rank == 2){novelRankAlpha.push("F"); styleRank.push(styleF)}
			else if (rank == 1){novelRankAlpha.push("G"); styleRank.push(styleG)}
			else {novelRankAlpha.push("N"); styleRank.push(styleN)}
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
          <p style={{ margin: 0 }}>たんぺん</p>
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

		//スクロール処理
		let graphAnim = function () {
			let wy = window.pageYOffset;//Y軸スクロール量
			let wb = wy + window.innerHeight*4/5;// ブラウザの大きさを基に調整。     
			// チャートの位置を取得
			let chartPos = wy + el.current.getBoundingClientRect().bottom;

			// チャートの位置がウィンドウの最下部位置を超えたら起動
			if (wb > chartPos && chartFlag == false) {
				setChartFlag(true);
/* 				console.log("chartFlag" + chartFlag); */
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
                      <RankChart rank={novelRankNum} />
                    ) : (
                      <RankChart rank={null} />
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
        {/* <Radar data={rankData} options={rankOption} /> */}
      </div>
    );
	});

	return (
		<div>
			{novelDataList}

		</div>
	);
}



/* export default function Search({
	base_url,
	response,
}) {
	const data = {
		labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
		datasets: [
			{
				label: '# of Votes',
				data: [response[1][max_global_point], 9, 3, 5, 2, 3],
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
			},
		],
	};

	//console.log(Array.isArray(response[0]));
	const novelData = response[0].map(novel => {
		//novelというresponse[0]をコピーした配列を用意してreturnをnovelの要素ごとに処理を走らせてreturnするイメージ？
		//計算処理を書く
		return (
			//gridで整形
			<p key={novel.title}>{novel.title}</p>
		);
	});
	let result = [];
	for (const i in response[1]) {
		result.push(<p key={i}>{i}:{response[1][i]}</p>);
	}
	//resultにpタグごと格納している

	return (
		<div>
			<p>{base_url}</p>
			<Radar data={data} />
			{novelData}
			<p>------</p>
			{result}

		</div>
	);
}

 */


