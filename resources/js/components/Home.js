import Result from "./Result";
import Loading from "./Loading";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/Config";
import {Box, Grid, InputLabel, IconButton, Select, MenuItem, FormGroup, FormControl, FormControlLabel, Checkbox} from '@mui/material';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import WifiFindIcon from '@mui/icons-material/WifiFind';
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import { Centering, TitleP, GenreP, IsekaiP, SearchP, LoginButton, LogoutButton, RegisterButton, SearchButton } from "../styles/Home";

const Home = () => {
  const theme = createTheme({
    palette: {
      pink: {
        main: '#f218c3',
      },
    },
  });

  const [user, setUser] = useState("");
//  const [loading, setLoading] = useState(true);

    /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
//      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [genre, setGenre] = useState('');
  const genreSelect = (event) => {
    setGenre(event.target.value);
  };


  const [checked, setChecked] = useState(false);
  const [notIsekai, setNotIsekai] = useState(1);

  const checkBoxChange = (event) => {
    if (checked == false){
      //この関数が走るのはチェックが入った時だが、checkedはチェックを入れる前の変化前の状態。
      setNotIsekai(0);
    }else{
      setNotIsekai(1);
    }
    setChecked(event.target.checked);//処理に時間がかかるのか、どこに入れても最後に実行される。
  };

  const [search, setSearch] = useState(false);
  const [novels, setNovels] = useState([]);
	const handleSearch = () => {
		if (genre == "") {
			window.alert("ジャンル指定を忘れずに……");
			return false;
    }
    setLoading(true);
    const data = {
      genre : genre,
      notIsekai : notIsekai,
    }
    axios.post("/search", data)
    .then(res => {
      setNovels(res.data);
      console.log(res.data)//dataはbodyとかheaderのやつ。
      setSearch(true);
      setLoading(false);
    }
    );
  };

  const [loading, setLoading] = useState(false);
  
  //setNovelsでnovelsにres.data[0]が入るタイミングが遅すぎることによって、searchに
  //responseとしてnovelsを格納した時にnovelsの中身が空のまま送られ、遅れてnovelsに値が入った後に再びsearchが呼ばれているように見える。
  //元々67行目あたりのsetCheckedの実行時からset系の処理が遅すぎるので色々工夫はしていたが……。

  const title = "なろーせんとーりょく！";

  return (
    <ThemeProvider theme={theme}>
      <TitleP>{title}</TitleP>
      {user ? (
        <>
          <LogoutButton onClick={logout}>ログアウト</LogoutButton>
        </>
      ) : (
        <>
          <LoginButton component={Link} to={"/login"}>
            ろぐいん
          </LoginButton>
          <RegisterButton component={Link} to={"/register"}>
            とうろく
            </RegisterButton>
            <IconButton color="pink" size="large" component={Link} to={"/login"}>
              <BuildRoundedIcon />
            </IconButton>
        </>
      )}
      <Box marginBottom={3}>
        <Grid container spacing={1} columns={10}>
          <Grid item xs={10} sm={4}>
            <Centering>
              <FormControl
                sx={{
                  margin: "auto",
                  minWidth: 190,
                }}
              >
                <InputLabel id="demo-controlled-open-select-label">
                  ジャンル
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={genre}
                  onChange={genreSelect}
                >
                  <MenuItem value={101}><GenreP>異世界(恋愛)</GenreP></MenuItem>
                  <MenuItem value={102}><GenreP>現実世界(恋愛)</GenreP></MenuItem>
                  <MenuItem value={201}><GenreP>ハイファンタジー</GenreP></MenuItem>
                  <MenuItem value={202}><GenreP>ローファンタジー</GenreP></MenuItem>
                  <MenuItem value={301}><GenreP>純文学</GenreP></MenuItem>
                  <MenuItem value={302}><GenreP>ヒューマンドラマ</GenreP></MenuItem>
                  <MenuItem value={303}><GenreP>歴史</GenreP></MenuItem>
                  <MenuItem value={304}><GenreP>推理</GenreP></MenuItem>
                  <MenuItem value={305}><GenreP>ホラー</GenreP></MenuItem>
                  <MenuItem value={306}><GenreP>アクション</GenreP></MenuItem>
                  <MenuItem value={307}><GenreP>コメディ－</GenreP></MenuItem>
                  <MenuItem value={401}><GenreP>VRゲーム</GenreP></MenuItem>
                  <MenuItem value={402}><GenreP>宇宙</GenreP></MenuItem>
                  <MenuItem value={403}><GenreP>空想科学</GenreP></MenuItem>
                  <MenuItem value={404}><GenreP>パニック</GenreP></MenuItem>
                  <MenuItem value={9901}><GenreP>童話</GenreP></MenuItem>
                  <MenuItem value={9902}><GenreP>詩</GenreP></MenuItem>
                  <MenuItem value={9903}><GenreP>エッセイ</GenreP></MenuItem>
                  <MenuItem value={9904}><GenreP>リプレイ</GenreP></MenuItem>
                  <MenuItem value={9999}><GenreP>その他</GenreP></MenuItem>
                  <MenuItem value={9801}><GenreP>ノンジャンル</GenreP></MenuItem>
                </Select>
              </FormControl>
            </Centering>
          </Grid>
          <Grid item xs={10} sm={4}>
            <Centering>
              <FormControl component="fieldset" sx={{ width: 1, height: 1 }}>
                <FormGroup aria-label="position" sx={{ margin: "auto" }}>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        color="pink" //secondaryなどを指定する時はこの方法で色を変える
                        checked={checked}
                        onChange={checkBoxChange}
                      />
                    }
                    label={<IsekaiP>異世界転生・召喚を含む</IsekaiP>}
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            </Centering>
          </Grid>
          <Grid item xs={10} sm={2}>
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchButton
                className="WifiFindIcon"
                variant="contained"
                size="large"
                startIcon={
                  <div>
                    <WifiFindIcon style={{ fontSize: 40 }} />
                  </div>
                }
                onClick={handleSearch}
                //component={ Link } to={"/search"}
              >
                <SearchP>計測</SearchP>
              </SearchButton>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div>{loading ? <Loading /> : null}</div>
      {search ? (
        <Result
          //左が渡す名前で右が渡す変数
          novels={novels}
          setNovels={setNovels}
          user={user}
        />
      ) : null}
    </ThemeProvider>
  );
}

export default Home;
