import React, { useState, useEffect } from "react";
import { MainP, TitleP } from "../styles/Tutorial";
import {Box, Grid, InputLabel, IconButton, Select, MenuItem, FormGroup, FormControl, FormControlLabel, Checkbox} from '@mui/material';
import { WhitePaper, GenreP, IsekaiP, SearchP, LoginButton, LogoutButton,  SearchButton, SubtitleP, TutorialButton } from "../styles/Home";
import { BalloonDiv } from "../styles/Common";

const text1 = "なろーせんとーりょくは、週間ユニークユーザTop100の”戦闘力”を各ジャンル毎に計測、表示するWebアプリケーションです。"
const text2 = "なろーせんとーりょくの作成に至ったのは、元々コメディ月間1位を取ったのがきっかけ。なろうに投稿したので、開発背景やデータの算出方法に興味がある方は是非。"
const Tutorial = () => {
  return (
    <>
      <TitleP>なろーせんとーりょくのつかいかた</TitleP>
      <BalloonDiv>
        <MainP>{text1}</MainP>
      </BalloonDiv>
    </>
  );
}
export default Tutorial;
