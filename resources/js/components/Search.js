import * as React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function Search({
  base_url,
  response,
}) {
  const novelData = response[0].map(novel => {
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

    const data = [
      {
        subject: "Math",
        A: 120,
        B: 110,
        fullMark: 150
      },
      {
        subject: "Chinese",
        A: 98,
        B: 130,
        fullMark: 150
      },
      {
        subject: "English",
        A: 86,
        B: 130,
        fullMark: 150
      },
      {
        subject: "Geography",
        A: 99,
        B: 100,
        fullMark: 150
      },
      {
        subject: "Physics",
        A: 85,
        B: 90,
        fullMark: 150
      },
      {
        subject: "History",
        A: 65,
        B: 85,
        fullMark: 150
      }
    ];
    
    const radar = (
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    )
  
}





/* export default function Search({
  base_url,
  response,
}) {
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
      {novelData}
      <p>------</p>
      {result}

    </div>
  );
} */



