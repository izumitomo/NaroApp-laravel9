import RankChart from "./RankChart";
import PointChart from "./PointChart"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  Grid
 } from '@mui/material/';
 import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { pink } from "@mui/material/colors";


ChartJS.register(
RadialLinearScale,
PointElement,
LineElement,
Filler,
Tooltip,
Legend
);

const rankOption ={
  scales: {
      r: {
          angleLines: {
              display: false
          },
          suggestedMin: 0,
          suggestedMax: 10,
      }
  },
  plugins: {
    legend: {
        display: false
    }
  }
};

const pointOption ={
  scales: {
      r: {
          angleLines: {
              display: false
          },
          suggestedMin: 0,
          suggestedMax: 100,
      }
  }
};

const styleSSS = {
  textAlign: "center",
  color: "#FF99FF",
  fontSize: 30,
  margin: "auto"
}
const styleSS = {
  textAlign: "center",
  color: "#FF99FF",
  fontSize: 30,
  margin: "auto"
}
const styleS = {
  textAlign: "center",
  color: "#FF99FF",
  fontSize: 30,
  margin: "auto"
}
const styleA = {
  textAlign: "center",
  color: "#FF33CC",
  fontSize: 30,
  margin: "auto"
}
const styleB = {
  textAlign: "center",
  color: "#FF0000",
  fontSize: 30,
  margin: "auto"
}
const styleC = {
  textAlign: "center",
  color: "#FFC000",
  fontSize: 30,
  margin: "auto",
}
const styleD = {
  textAlign: "center",
  color: "#FFD966",
  fontSize: 30,
  margin: "auto"
}
const styleE = {
  textAlign: "center",
  color: "#70AD47",
  fontSize: 30,
  margin: "auto"
}
const styleF = {
  textAlign: "center",
  color: "#4472C4",
  fontSize: 30,
  margin: "auto"
}
const styleG = {
  textAlign: "center",
  color: "#A5A5A5",
  fontSize: 30,
  margin: "auto"
}
const styleN = {
  textAlign: "center",
  color: "black",
  fontSize: 30,
  margin: "auto"
}
const stylePoint = {
  fontSize: 20,
  fontFamily: "pixel10-r",
  margin: "auto",
}

const novelUrl = "https://ncode.syosetu.com/"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DotItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: 15,
  fontFamily: "pixel10-b",
  whiteSpace: "nowrap",
}));


const NovelTitle = styled('a')({
  textAlign: "center",
  color: "black",
  fontSize: 25,
  fontFamily: "milk-b",
  target: "_blank",
});

export default function Search({
  base_url,
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


    
    return (
      //gridで整形
      <div key={novel.ncode}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} columns={20}>
          <Grid item xs={20}>
            <NovelTitle href={novelUrl + novel.ncode}>{novel.title}</NovelTitle>
            <Grid container spacing={1} columns={20}>
              <Grid item xs={5} sx={{
                minHeight: 60,
                minWidth: 60,
              }}>
                <Item onClick={() => console.log("aaaa")}><RankChart rank={novelRankNum}/></Item>
              </Grid>
              <Grid item xs={3}>
                <DotItem>ポイント<br/><p style={styleRank[0]}>{novelRankAlpha[0]}</p><p style={stylePoint}>{novel.global_point}</p></DotItem>
              </Grid>
              <Grid item xs={3}>
                <DotItem>ブクマ<br/><p style={styleRank[1]}>{novelRankAlpha[1]}</p><p style={stylePoint}>{novel.fav_novel_cnt}</p></DotItem>
              </Grid>
              <Grid item xs={3}>
                <DotItem>ひょうかしゃ<br/><p style={styleRank[2]}>{novelRankAlpha[2]}</p><p style={stylePoint}>{novel.all_hyoka_cnt}</p></DotItem>
              </Grid>
              <Grid item xs={3}>
                <DotItem>へいきんてん<br/><p style={styleRank[3]}>{novelRankAlpha[3]}</p><p style={stylePoint}>{novelAverageRate}</p></DotItem>
              </Grid>
              <Grid item xs={3}>
                <DotItem>かんそう<br/><p style={styleRank[4]}>{novelRankAlpha[4]}</p><p style={stylePoint}>{novel.impression_cnt}</p></DotItem>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      
    </div>
    );
  });

  return (
    <div>
      <p>{base_url}</p>
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


