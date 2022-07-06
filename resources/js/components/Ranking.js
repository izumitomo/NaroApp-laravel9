import React, { useState, useEffect, useRef} from "react";
import { FadeDRankP, FadeERankP, FadeFRankP, FadeGRankP, FadeNRankP, HiddenRankP, NRankP, ShineARankP, ShineBRankP, ShineCRankP, ShineSRankP, ShineSSRankP, ShineSSSRankP } from "../styles/Common";


const Ranking = ({
	index,
	novels
}) => {
	//順位のstyleを格納
	const [animation, setAnimation] = useState(false);

	let rank = <HiddenRankP>?</HiddenRankP>;
	if (animation == true) {
		if (index <= 5) { rank = <ShineSSSRankP>{index + 1}</ShineSSSRankP>; }
		else if (index <= 9) { rank = <ShineSRankP>{index + 1}</ShineSRankP>; }
		else if (index <= 19) { rank = <ShineARankP>{index + 1}</ShineARankP>; }
		else if (index <= 29) { rank = <ShineBRankP>{index + 1}</ShineBRankP>; }
		else if (index <= 39) { rank = <ShineCRankP>{index + 1}</ShineCRankP>; }
		else if (index <= 49) { rank = <FadeDRankP>{index + 1}</FadeDRankP>; }
		else if (index <= 59) { rank = <FadeERankP>{index + 1}</FadeERankP>; }
		else if (index <= 69) { rank = <FadeFRankP>{index + 1}</FadeFRankP>; }
		else if (index <= 79) { rank = <FadeGRankP>{index + 1}</FadeGRankP>; }
		else { rank = <FadeNRankP>{index + 1}</FadeNRankP>; }
	} else {
		rank = <HiddenRankP>?</HiddenRankP>
	}
	/* const [ranking, rank =  = useState(<HiddenRankP>?</HiddenRankP>;
	
	if (animation == true) {
		if (index <= 5) { rank = <ShineSSSRankP>{index + 1}</ShineSSSRankP>; }
		else if (index <= 9) { rank = <ShineSRankP>{index + 1}</ShineSRankP>; }
		else if (index <= 19) { rank = <ShineARankP>{index + 1}</ShineARankP>; }
		else if (index <= 29) { rank = <ShineBRankP>{index + 1}</ShineBRankP>; }
		else if (index <= 39) { rank = <ShineCRankP>{index + 1}</ShineCRankP>; }
		else if (index <= 49) { rank = <FadeDRankP>{index + 1}</FadeDRankP>; }
		else if (index <= 59) { rank = <FadeERankP>{index + 1}</FadeERankP>; }
		else if (index <= 69) { rank = <FadeFRankP>{index + 1}</FadeFRankP>; }
		else if (index <= 79) { rank = <FadeGRankP>{index + 1}</FadeGRankP>; }
		else { rank = <FadeNRankP>{index + 1}</FadeNRankP>; }
	} else {
		rank = <HiddenRankP>?</HiddenRankP>
	} */

	useEffect(() => {
		const graphAnim = function () {
			const windowY = window.innerHeight; // ブラウザの大きさを取得。
			// elの相対位置を取得
			const itemPos = (el.current.getBoundingClientRect().top + el.current.getBoundingClientRect().bottom) / 2;
			// チャートの位置がブラウザ中央付近になったら起動
			if (itemPos < windowY * 9/10 && windowY * -1/10< itemPos && animation == false) {
				setAnimation(true);
				//console.log(animation, "true!!!!!")
			}
			/* else if ((itemPos < windowY * -1 / 10 || windowY * 9 / 10 < itemPos) && animation == true) {
				setAnimation(false);
			} */
		};
		window.addEventListener("scroll", graphAnim); // スクロール時の処理

		return () => {
			window.removeEventListener("scroll", graphAnim);
		};
	}, );

	useEffect(() => {
    setAnimation(false);
  }, [novels]);

	const el = useRef(null)
		
	return (
		<div ref={el}>{rank}</div>
	);
}
export default Ranking;
