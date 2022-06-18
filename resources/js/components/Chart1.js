import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";


import { getRelativePosition } from "chart.js/helpers";

Chart.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const rankData = {
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

const rankOption = {
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
        },
      },
    },
  },
};

defaults.font.family = "pixel10-r";

const ctx = document.getElementById("chart1");
ctx.canvas.height = 200;
const chart = new Chart(ctx, {
    type: 'radar',
    data: rankData,
    option: rankOption,
  });


/* let graphAnim = function() {
  let wy = window.pageYOffset,
    //wb = wy + screen.height - 300, // スクリーンの最下部位置を取得
    wb = wy + window.innerHeight, // ブラウザの最下部位置を取得
      
    // チャートの位置を取得
    chartElPos1 = wy + chartEl1.getBoundingClientRect().top;

  // チャートの位置がウィンドウの最下部位置を超えたら起動
  if ( wb > chartElPos1 && chartFlag1 == false ) {
    chartFunc1();
    chartFlag1 = true;
  }
};

window.addEventListener('load', graphAnim); // 読み込み時の処理
window.addEventListener('scroll', graphAnim); // スクロール時の処理 */
