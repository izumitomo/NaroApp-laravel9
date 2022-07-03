import React, {memo, useState, useEffect, useRef} from "react";
import { FadeDRankP, FadeERankP, FadeFRankP, FadeGRankP, FadeNRankP, NRankP, ShineARankP, ShineBRankP, ShineCRankP, ShineSRankP, ShineSSRankP, ShineSSSRankP } from "../styles/Common";


const Ranking = ({
	index
}) => {
	//順位のstyleを格納
	const [animation, setAnimation] = useState(false);
	const [ranking, setRanking] = useState(<NRankP>?</NRankP>);
	useEffect(() => {
		if (animation == true) {
			if (index <= 5) { setRanking(<ShineSSSRankP>{index + 1}</ShineSSSRankP>); }
			else if (index <= 9) { setRanking(<ShineSRankP>{index + 1}</ShineSRankP>); }
			else if (index <= 19) { setRanking(<ShineARankP>{index + 1}</ShineARankP>); }
			else if (index <= 29) { setRanking(<ShineBRankP>{index + 1}</ShineBRankP>); }
			else if (index <= 39) { setRanking(<ShineCRankP>{index + 1}</ShineCRankP>); }
			else if (index <= 49) { setRanking(<FadeDRankP>{index + 1}</FadeDRankP>); }
			else if (index <= 59) { setRanking(<FadeERankP>{index + 1}</FadeERankP>); }
			else if (index <= 69) { setRanking(<FadeFRankP>{index + 1}</FadeFRankP>); }
			else if (index <= 79) { setRanking(<FadeGRankP>{index + 1}</FadeGRankP>); }
			else { setRanking(<FadeNRankP>{index + 1}</FadeNRankP>); }
		} else {
			setRanking(<NRankP>?</NRankP>)
		}
	}, [animation]);
	useEffect(() => {
		const graphAnim = function () {
			const windowY = window.innerHeight; // ブラウザの大きさを取得。
			// elの相対位置を取得
			const itemPos = (el.current.getBoundingClientRect().top + el.current.getBoundingClientRect().bottom) / 2;
			// チャートの位置がブラウザ中央付近になったら起動
			if (itemPos < windowY * 9/10 && 0 < itemPos && animation == false) {
				setAnimation(true);
				//console.log(animation, "true!!!!!")
			} else if ((itemPos < 0 || windowY * 9/10 < itemPos) && animation == true){
				setAnimation(false);
			}
		};
		window.addEventListener("scroll", graphAnim); // スクロール時の処理

		return () => {
			window.removeEventListener("scroll", graphAnim);
		};
	});
	const el = useRef(null)
		
	return (
		<div ref={el}>{ranking}</div>
	);
}
export default Ranking;
