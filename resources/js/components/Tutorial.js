import React, { useState, useEffect } from "react";
import { BackButton, HardBalloonDiv, IndexA, MainP, ModeP, NormalBalloonDiv, QuestionP, SpecialBalloonDiv, ThanksP, TitleP } from "../styles/Tutorial";
import { BalloonDiv, BlueBalloonDiv } from "../styles/Common";
import { Link } from "react-router-dom";

const question1 = "Q.なろーせんとーりょくって？";
const question2 = "Q.誰がなんで作ったの？"
const question3 = "Q.どうやって計算してるの？";
const question4 = "Q.どうしてジャンルごとにボーダーが違うの？";
const question5 = "Q.能力の表記方法に見覚えが……";
const question6 = "Q.タイトルのReaders Ver.って？";
const question7 = "感想・意見について"
const question8 = "izumiについて"
const text = "なろーせんとーりょくの作成に至ったのは、元々コメディ月間1位を取ったのがきっかけ。なろうに投稿したので、開発背景やデータの算出方法に興味がある方は是非。"
const Tutorial = () => {
	return (
    <>
      <TitleP>なろーせんとーりょくのあれこれ</TitleP>
      <ThanksP>ご利用誠に感謝……！</ThanksP>
      <div>
        <ModeP>EASY</ModeP>
        <IndexA href="#1">
          {question1}
          <br />
        </IndexA>
        <IndexA href="#2">
          {question2}
          <br />
        </IndexA>
      </div>
      <div>
        <ModeP>NORMAL</ModeP>
        <IndexA href="#3">
          {question3}
          <br />
        </IndexA>
        <IndexA href="#4">
          {question4}
          <br />
        </IndexA>
      </div>
      <div>
        <ModeP>HARD</ModeP>
        <IndexA href="#5">
          {question5}
          <br />
        </IndexA>
        <IndexA href="#6">
          {question6}
          <br />
        </IndexA>
      </div>
      <div>
        <ModeP>SPECIAL</ModeP>
        <IndexA href="#7">
          {question7}
          <br />
        </IndexA>
        <IndexA href="#8">
          {question8}
          <br />
        </IndexA>
        <IndexA href="#8" style={{ color: "#ef00ff" }}>
          <a href="https://ncode.syosetu.com/n9418hx/">特別エッセイ</a>
          <br />
        </IndexA>
      </div>
      <BlueBalloonDiv id="1">
        <QuestionP>{question1}</QuestionP>
      </BlueBalloonDiv>
      <BalloonDiv>
        <MainP>
          ”なろーせんとーりょく！”は、週間ユニークユーザTop50の”戦闘力”を各ジャンルごとに計測、表示するWebアプリケーション。
        </MainP>
      </BalloonDiv>
      <BlueBalloonDiv id="2">
        <QuestionP>{question2}</QuestionP>
      </BlueBalloonDiv>
      <BalloonDiv>
        <MainP>
          <span style={{ color: "#ff33cc" }}>
            ポイントだけじゃない！　様々な観点から作品を評価してみよう！
          </span>
          という思いから、なろう作者のizumiが未経験からノリで制作。
        </MainP>
      </BalloonDiv>
      <NormalBalloonDiv id="3">
        <QuestionP>{question3}</QuestionP>
      </NormalBalloonDiv>
      <BalloonDiv>
        <MainP>
          毎日、各ジャンルごとの週間ユニークユーザTop100の小説情報を基に戦闘力のボーダーを計算。戦闘力のボーダーが毎日変動するため、小説の戦闘力は毎日変動する。
        </MainP>
      </BalloonDiv>
      <NormalBalloonDiv id="4">
        <QuestionP>{question4}</QuestionP>
      </NormalBalloonDiv>
      <BalloonDiv>
        <MainP>
          ジャンルによって、ボーダーのばらつきが大きいから。
          <br />
          例えば、ハイファンタジー、ローファンタジーの平均評価点は他のジャンルより高く、全ジャンルに共通して、異世界転生・召喚要素がある場合、平均評価点は高くなる傾向が顕著。
        </MainP>
      </BalloonDiv>
      <HardBalloonDiv id="5">
        <QuestionP>{question5}</QuestionP>
      </HardBalloonDiv>
      <BalloonDiv>
        <MainP>奇遇ですね。izumiもそう思ってました。</MainP>
      </BalloonDiv>
      <HardBalloonDiv id="6">
        <QuestionP>{question6}</QuestionP>
      </HardBalloonDiv>
      <BalloonDiv>
        <MainP>
          <span style={{ color: "#ff0000" }}>
            『どうしてもなろうのランキング上位と自分の作品の評価を比較してしまって、モチベが下がる……』
          </span>
          という経験をしたなろう作者の方々は多いと思います。
          <br />
          当初は、作者向けに自分の作品のフラットな評価を行うためのサービスを作っていました。ですが、適切な評価のアルゴリズムの構築や実装に費やす十分な時間が捻出できないと途中で判断し、妥協策として少し実装が簡単な読者向けのバージョンをリリースしたという背景です。
          <br />
        </MainP>
      </BalloonDiv>
      <SpecialBalloonDiv id="7">
        <QuestionP>{question7}</QuestionP>
      </SpecialBalloonDiv>
      <BalloonDiv>
        <MainP>
          なろーせんとーりょく！に関する
          <a href="https://ncode.syosetu.com/n9418hx/">特別エッセイ</a>
          をなろうに書いたので、なろーせんとーりょく！を使ってみた感想・意見をizumiに伝えてくれる奇特な方は是非そちらへ！
          制作経緯やざっくりとした戦闘力の算出方法等、載っています。
          <br />
          今のところ、Writers Ver.を制作する予定はありませんが、反響次第で……
        </MainP>
      </BalloonDiv>
      <SpecialBalloonDiv id="8">
        <QuestionP>{question8}</QuestionP>
      </SpecialBalloonDiv>
      <BalloonDiv>
        <MainP>
          コメディで月間1位を取った際に、各ジャンルのポイント以外の指標の差異が目に留まり、こんなものを作ってしまったコメディ作者です。
        </MainP>
      </BalloonDiv>
      <BackButton component={Link} to={"/"}>
        ホームに戻る
      </BackButton>
    </>
  );
}
export default Tutorial;
