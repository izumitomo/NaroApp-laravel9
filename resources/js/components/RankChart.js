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
import * as React from "react";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

defaults.font.family = "pixel10-r";

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

export default function RankChart({ rank }) {
  /* const el = React.useRef(null);
  console.log(el.current);
  React.useEffect(() => {
      console.log(el.current);
  }, []); */
  //console.log(rect.top + window.pageYOffset); // y座標(絶対座標)

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
  return <Radar data={rankData} options={rankOption} />;
}
