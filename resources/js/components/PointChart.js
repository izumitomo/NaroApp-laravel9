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

export default function PointChart({
  averagePoint,
  novelPoint,
  title
}) {
  const averageData ={
    label: "平均戦闘力",
    data: averagePoint,
    backgroundColor: 'rgba(50,17,240,0.4)',
    borderColor: 'rgba(50,17,240,1)',
    borderWidth: 1,
    }

  const novelData = {
    labels: ['ポイント', 'ブクマ数', '評価者数', '平均評価点', '感想数'],
    datasets: [
      {
        label: title.length < 50 ?
          title : title.substring(0, 50) + "……",
        data: novelPoint,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },averageData
    ],
  };

  return(
    <Radar data={novelData} options={pointOption}/>
  )
}
