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

const rankOption ={
  scales: {
    r: {
      ticks: {
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


export default function RankChart({
  rank,
}) {

  const rankData = {
    labels: ['Pt', 'Fav', 'Rev', 'Rate', 'Com'],
    datasets: [
      {
        //label: novel.title,
        data: rank,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {data: [5,5,5,5,5],
        backgroundColor: 'rgba(242,232,141,0.5)',
        borderColor: 'rgba(242,232,141,0.8)',
        borderWidth: 1,
      }
    ]
  }

  return(
    <Radar data={rankData} options={rankOption}/>
  )
}
