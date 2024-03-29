import Result from "./Result";
import Loading from "./Loading";
import Order from "./Order";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/Config";
import {Box, Grid, InputLabel, IconButton, Select, MenuItem, FormGroup, FormControl, FormControlLabel, Checkbox} from '@mui/material';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import { WifiFind, ErrorRounded } from "@mui/icons-material";
import { WhitePaper, TitleP, GenreP, IsekaiP, SearchP, LoginButton, LogoutButton,  SearchButton, SubtitleP, } from "../styles/Home";
import { TutorialButton } from "../styles/Common";
//import html2canvas from "html2canvas";


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
      notIsekai: notIsekai,
      order: order,
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
  const [hidden, setHidden] = useState(true);
  const [order, setOrder] = useState("weekly");
  useEffect(() => {
    setHidden(true);
    setOrder("weekly");
  }, [user])

  const [loading, setLoading] = useState(false);

/*   const saveAsImage = (uri) => {
    const downloadLink = document.createElement("a");

    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;
      // ファイル名
      downloadLink.download = "component.png";
      // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
      document.body.appendChild(downloadLink);
      // ダウンロードリンクが設定された a タグをクリック
      downloadLink.click();
      // Firefox 対策で追加したリンクを削除しておく
      document.body.removeChild(downloadLink);
    } else {
      window.open(uri);
    }
  };

  const onClickExport = () => {
    // 画像に変換する component の id を指定
    const target = document.getElementById("test");
    html2canvas(target).then((canvas) => {
      const targetImgUri = canvas.toDataURL("img/png");
      saveAsImage(targetImgUri);
    });
  }; */
		
  return (
    <ThemeProvider theme={theme}>
      <TitleP>なろーせんとーりょく！</TitleP>
      <SubtitleP>Readers Ver.</SubtitleP>
      {user ? (
        <>
          <LogoutButton onClick={logout}>ログアウト</LogoutButton>
          {/* <TutorialButton component={Link} to={"/tutorial"}>
            しつもん
          </TutorialButton> */}
          <IconButton
            color="pink"
            size="large"
            onClick={() => setHidden(false)}
          >
            <ErrorRounded fontSize="large" />
          </IconButton>
        </>
      ) : (
        <>
          <LoginButton component={Link} to={"/login"}>
            パワーアップ
          </LoginButton>
          {/* <RegisterButton component={Link} to={"/register"}>
            とうろく
          </RegisterButton> */}
        </>
      )}
      <Box marginBottom={3} id="test">
        <Grid container spacing={1} columns={10}>
          <Grid item xs={10} sm={4}>
            <WhitePaper>
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
                  <MenuItem value={101}>
                    <GenreP>異世界(恋愛)</GenreP>
                  </MenuItem>
                  <MenuItem value={102}>
                    <GenreP>現実世界(恋愛)</GenreP>
                  </MenuItem>
                  <MenuItem value={201}>
                    <GenreP>ハイファンタジー</GenreP>
                  </MenuItem>
                  <MenuItem value={202}>
                    <GenreP>ローファンタジー</GenreP>
                  </MenuItem>
                  <MenuItem value={301}>
                    <GenreP>純文学</GenreP>
                  </MenuItem>
                  <MenuItem value={302}>
                    <GenreP>ヒューマンドラマ</GenreP>
                  </MenuItem>
                  <MenuItem value={303}>
                    <GenreP>歴史</GenreP>
                  </MenuItem>
                  <MenuItem value={304}>
                    <GenreP>推理</GenreP>
                  </MenuItem>
                  <MenuItem value={305}>
                    <GenreP>ホラー</GenreP>
                  </MenuItem>
                  <MenuItem value={306}>
                    <GenreP>アクション</GenreP>
                  </MenuItem>
                  <MenuItem value={307}>
                    <GenreP>コメディ－</GenreP>
                  </MenuItem>
                  <MenuItem value={401}>
                    <GenreP>VRゲーム</GenreP>
                  </MenuItem>
                  <MenuItem value={402}>
                    <GenreP>宇宙</GenreP>
                  </MenuItem>
                  <MenuItem value={403}>
                    <GenreP>空想科学</GenreP>
                  </MenuItem>
                  <MenuItem value={404}>
                    <GenreP>パニック</GenreP>
                  </MenuItem>
                  <MenuItem value={9901}>
                    <GenreP>童話</GenreP>
                  </MenuItem>
                  <MenuItem value={9902}>
                    <GenreP>詩</GenreP>
                  </MenuItem>
                  <MenuItem value={9903}>
                    <GenreP>エッセイ</GenreP>
                  </MenuItem>
                  <MenuItem value={9904}>
                    <GenreP>リプレイ</GenreP>
                  </MenuItem>
                  <MenuItem value={9999}>
                    <GenreP>その他</GenreP>
                  </MenuItem>
                  <MenuItem value={9801}>
                    <GenreP>ノンジャンル</GenreP>
                  </MenuItem>
                </Select>
              </FormControl>
            </WhitePaper>
          </Grid>
          <Grid item xs={10} sm={4}>
            <WhitePaper>
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
            </WhitePaper>
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
                    <WifiFind style={{ fontSize: 40 }} />
                  </div>
                }
                onClick={handleSearch}
                //component={ Link } to={"/search"}
              >
                <SearchP>計測</SearchP>
              </SearchButton>
            </div>
          </Grid>
          {!hidden && (
            <Grid item xs={10} sx={{ mt: 1 }}>
              <Order setOrder={setOrder} />
            </Grid>
          )}
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
