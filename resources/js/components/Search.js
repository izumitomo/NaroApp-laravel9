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
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const novelUrl = "https://ncode.syosetu.com/"
const numberOfRank = 10

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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

export default function Search({
  base_url,
  response,
}) {
  const averageData ={
    label: "平均戦闘力",
    data: [
      response[1].global_point / response[1].max_global_point * 100,
      response[1].favorite_count / response[1].max_favorite_count * 100,
      response[1].reviewer_count / response[1].max_reviewer_count * 100,
      response[1].average_rate / response[1].max_average_rate * 100,
      response[1].comment_count / response[1].max_comment_count * 100
    ],
    backgroundColor: 'rgba(50,17,240,0.4)',
    borderColor: 'rgba(50,17,240,1)',
    borderWidth: 1,
  }
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
  const rateUpScale = (response[1].max_favorite_count - response[1].favorite_count) / 6


  const novelDataList = response[0].map(novel => {
    let novelRankNum = [];
    let novelRankAlpha = [];

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
    novelRankNum.forEach(function(rank){
      if (rank == 10){novelRankAlpha.push("SSS")}
      else if (rank == 9){novelRankAlpha.push("SS")}
      else if (rank == 8){novelRankAlpha.push("S")}
      else if (rank == 7){novelRankAlpha.push("A")}
      else if (rank == 6){novelRankAlpha.push("B")}
      else if (rank == 5){novelRankAlpha.push("C")}
      else if (rank == 4){novelRankAlpha.push("D")}
      else if (rank == 3){novelRankAlpha.push("E")}
      else if (rank == 2){novelRankAlpha.push("F")}
      else {novelRankAlpha.push("G")}
    })

    const rankData = {
      labels: ['Pt', 'Fav', 'Rev', 'Rate', 'Com'],
      datasets: [
        {
          //label: novel.title,
          data: novelRankNum,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ]
    }

    const novelData = {
      labels: ['ポイント', 'ブクマ数', '評価者数', '平均評価点', '感想数'],
      datasets: [
        {
          label: novel.title.length < 50 ?  novel.title :
          novel.title.substring(0, 50) + "……"
          ,  
          data: [
            Math.floor(novel.global_point / response[1].max_global_point * 100),
            Math.floor(novel.fav_novel_cnt / response[1].max_favorite_count * 100),
            Math.floor(novel.all_hyoka_cnt / response[1].max_reviewer_count * 100),
            (novel.all_point/novel.all_hyoka_cnt) / response[1].max_average_rate * 100,
            Math.floor(novel.impression_cnt / response[1].max_comment_count * 100)
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },averageData
      ],
    };

    const novelChart = {
      type: "radar",
      data: novelData,
    };
    
    return (
      //gridで整形
      <div key={novel.ncode}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} columns={20}>
          <Grid item xs={20}>
            <a className="novelTitle" target="_blank" href={novelUrl + novel.ncode}>{novel.title}</a>
          </Grid>
          <Grid container spacing={1} columns={20}>
            <Grid item xs={5}>
              <Item onClick={() => console.log("aaaa")}><Radar data={rankData} options={rankOption}/></Item>
            </Grid>
            <Grid item xs={3}>
              <Item>ポイント数<br/>{novelRankAlpha[0]}</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>{novelRankAlpha[1]}</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>{novelRankAlpha[2]}</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>{novelRankAlpha[3]}</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>{novelRankAlpha[4]}</Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <div>
        <Radar data={novelData} options={pointOption}/>
      </div>
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


