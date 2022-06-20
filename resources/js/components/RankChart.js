import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import React from "react";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

defaults.font.family = "pixel10-r";

const animation = {
  scales: {
    r: {
      ticks: {
        display: false,
      },
      pointLabels: {
        color: "black",
        font: {
          size: 15,
        },
      },
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          size: 20,
          family: "pixel10-r",
        },
      },
    },
  },
};

const nonAnimation = {
  scales: {
    r: {
      ticks: {
        display: false,
      },
      pointLabels: {
        color: "black",
        font: {
          size: 15,
        },
      },
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          size: 20,
          family: "pixel10-r",
        },
      },
    },
  },
  animations: false,
};

const averageData = {
  labels: ["Pt", "Fav", "Rev", "Rate", "Com"],
  datasets: [
    {
      data: [4, 4, 4, 4, 4],
      backgroundColor: "rgba(242,232,141,0.5)",
      borderColor: "rgba(242,232,141,0.8)",
      borderWidth: 1,
    },
  ],
};

export default function RankChart({
  rank,
}) {
  const [chartFlag, setChartFlag] = React.useState(false);
  //スクロール処理
  let graphAnim = function () {
    let wy = window.pageYOffset;//Y軸スクロール量
    let wb = wy + window.innerHeight * 4 / 5;// ブラウザの大きさを基に調整。     
    // チャートの位置を取得
    let chartPos = wy + el.current.getBoundingClientRect().bottom;

    // チャートの位置がウィンドウ中央付近になったら起動
    if (wb <= chartPos + window.innerHeight * 1 / 2 && chartPos <= wb && chartFlag == false) {
      setChartFlag(true);
    } else if (wb < chartPos || chartPos + window.innerHeight * 2 / 3 < wb) {
      setChartFlag(false);
    }
  }
  window.addEventListener('load', graphAnim); // 読み込み時の処理
  window.addEventListener('scroll', graphAnim); // スクロール時の処理
  
  const el = React.useRef(null);

  const rankData = {
    labels: ["Pt", "Fav", "Rev", "Rate", "Com"],
    datasets: [
      {
        //label: novel.title,
        data: rank,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        data: [4, 4, 4, 4, 4],
        backgroundColor: "rgba(242,232,141,0.5)",
        borderColor: "rgba(242,232,141,0.8)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div ref={el}>
      {chartFlag ? (
        <Radar data={rankData} options={animation} />
      ) : (
        <Radar data={averageData} options={nonAnimation} />
      )}
    </div>
  );
}
