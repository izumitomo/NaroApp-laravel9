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
import React, { useState, useEffect, useRef, memo} from "react";

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

let count = 0;

const RankChart = memo(({
	rank,
	novels,
	animationFlag,
}) => {
	const [chartFlag, setChartFlag] = useState(false);
	count += 1;
	console.log(count," Chart rerendering!")
	useEffect(() => {
		const graphAnim = function () {
			const windowY = window.innerHeight; // ブラウザの大きさを取得。
			// チャートの位置を取得
			const chartPos = (el.current.getBoundingClientRect().top + el.current.getBoundingClientRect().bottom) / 2;
			// チャートの位置がウィンドウ中央付近になったら起動
			if (chartPos < windowY * 7/10 && 0 < chartPos && chartFlag == false) {
        setChartFlag(true);
        console.log(chartFlag, "true!!!!!")
			}
			/* else if ((chartPos < 0 || windowY * 7 / 10 < chartPos) && chartFlag == true) {
				setChartFlag(false);
			} */
		};
		window.addEventListener("scroll", graphAnim); // スクロール時の処理
		
		return () => {
			console.log("Chart willunmount!!");
			removeEventListener("scroll", graphAnim);
		};
		
	})
	const el = useRef(null)
	useEffect(() => {
		setChartFlag(false);
	}, [novels])
	

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
			{animationFlag ? (
				chartFlag ? (
					<Radar data={rankData} options={animation} />
				) : (
					<Radar data={averageData} options={nonAnimation} />
				)
			) : (
				<Radar data={rankData} options={nonAnimation} />
			)}
		</div>
	);
})

export default RankChart;
