import * as React from 'react';
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

export default function Search({
  base_url,
  response,
}) {
  //console.log(Array.isArray(response[0]));
  const novelData = response[0].map(novel => {
    //novelというresponse[0]をコピーした配列を用意してreturnをnovelの要素ごとに処理を走らせてreturnするイメージ？
    const data = {
      labels: ['ポイント', 'ブクマ', '評価者', '平均評価', '感想'],
      datasets: [
        {
          label: '# of Votes',
          data: [
            novel.global_point / response[1]["max_global_point"],
            novel.fav_novel_cnt / response[1]["max_favorite_count"],
            novel.all_hyoka_cnt / response[1]["max_reviewer_count"],
            (novel.all_point/novel.all_hyoka_cnt) / response[1]["max_average_rate"],
            novel.impression_cnt / response[1]["max_comment_count"]
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
    return (
      //gridで整形
      <div>
        <p key={novel.title}>{novel.title}</p>
        <Radar data={data} />
      </div>
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
      {novelData}
      <p>------</p>
      {result}

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


