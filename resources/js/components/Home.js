import Search from "./Search";
import axios from 'axios';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Box,
  Paper,
  Grid,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { ThemeProvider,
  createTheme
} from '@mui/material/styles';
import { styled } from '@mui/system';
import WifiFindIcon from '@mui/icons-material/WifiFind';

const Centering = styled(Paper)(({ theme }) => ({
  backgroundColor: '#e6e6e6',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: "100%"
}));

export default function Home() {
  const theme = createTheme({
    palette: {
      pink: {
        main: '#f218c3',
      },
    },
  });

  const TitleStyle = styled('div')({
    textAlign: "center",
    fontFamily: "pixel10-b",
    color: "black",
    fontSize: 50,
    whiteSpace: "nowrap",
  });

  const GenreP = styled('p')({
    fontFamily: "pixel10-r",
    fontSize: 25,
    margin: 'auto',
    color: "black",
  });
  const IsekaiP = styled("p")({
    fontFamily: "pixel10-r",
    fontSize: 22,
    margin: 'auto',
    color: "black",
  })
  const SearchP = styled("p")({
    fontFamily: "pixel10-r",
    fontSize: 22,
    margin: 'auto',
    color: "black",
  })
  

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [genre, setGenre] = React.useState('');
  const genreSelect = (event) => {
    setGenre(event.target.value);
  };


  const [checked, setChecked] = React.useState(false);
  const [notIsekai, setNotIsekai] = React.useState(1);

  const checkBoxChange = (event) => {
    if (checked == false){
      //この関数が走るのはチェックが入った時だが、checkedはチェックを入れる前の変化前の状態。
      setNotIsekai(0);
    }else{
      setNotIsekai(1);
    }
    setChecked(event.target.checked);//処理に時間がかかるのか、どこに入れても最後に実行される。
  };

  const [search, setSearch] = React.useState(false);
  const [novels, setNovels] = React.useState([]);
  const handleSearch = () => {
    setLoading(true);
    const data = {
      genre : genre,
      notIsekai : notIsekai,
    }
    axios.post("/search", data)
    .then(res => {
      setNovels(res.data);
      //console.log(Array.isArray(res.data[0]))
      console.log(res.data)//dataはbodyとかheaderのやつ。
      setSearch(true);
      setLoading(false)
    }
    );
  };

  const [loading, setLoading] = React.useState(false);
  
  //setNovelsでnovelsにres.data[0]が入るタイミングが遅すぎることによって、searchに
  //responseとしてnovelsを格納した時にnovelsの中身が空のまま送られ、遅れてnovelsに値が入った後に再びsearchが呼ばれているように見える。
  //元々67行目あたりのsetCheckedの実行時からset系の処理が遅すぎるので色々工夫はしていたが……。

  const title = "なろーせんとーりょく！";

  return (
    <ThemeProvider theme={theme}>
      <TitleStyle>{title}</TitleStyle>
       <Box sx={{}}>
        <Grid container spacing={1} columns={20}>
          <Grid item xs={8}>
          <Centering>
            <FormControl sx={{
            m: 1,
            minWidth: 190,
          }}>
            <InputLabel id="demo-controlled-open-select-label">ジャンル</InputLabel>
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
          <Grid item xs={8}>
          <Centering>
            <FormControl component="fieldset" sx={{width: 1, height: 1}}>
              <FormGroup aria-label="position" sx={{ margin: 'auto' }}>
                <FormControlLabel
                  value="end"
                  control={<Checkbox 
                    color="pink"//secondaryなどを指定する時はこの方法で色を変える
                    checked={checked}
                    onChange={checkBoxChange}/>}
                  label={<IsekaiP>異世界転生・召喚を含む</IsekaiP>}
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
            </Centering>
          </Grid>
          <Grid item xs={4}>
          <div style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
              <Button className="WifiFindIcon" style={{
                  color:"black",//styleを使えばCSSの記法が通用する？
                  backgroundColor: "#4feff7",
                  display:"block",
                  fontSize:20
                }}
                variant="contained"
                size="large"
                startIcon={<div><WifiFindIcon style={{fontSize:40}}/></div>}
                onClick={handleSearch}
                //component={ Link } to={"/search"}
              >
                <SearchP>計測</SearchP>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div>
        {loading ? <TitleStyle>Loading...</TitleStyle> : null }
      </div>

      {search ? (
      <Search
        //左が渡す名前で右が渡す変数
        response = {novels}
      />
    ) : null
    }
    </ThemeProvider>
  );
}


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Home/>);



/* 
import axios from "axios";
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FindInPageIcon from '@material-ui/icons/FindInPage';


import { Link } from "react-router-dom";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(0),
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 240,
  },
  formPadding: {
    paddingTop: 15,
  },
  startIcon: {
    marginLeft: 0,
    marginRight: 0,
  },
  title: {
    textAlign: "center",
    color: "black" ,
    fontSize: 40,
  },
  block: {
    display: "flex",
    backgroundColor: "white",
    verticalAlign: "middle",
    justifyContent: "space-around",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home(){
  const classes = useStyles();
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
    if (checked == false){//checkedはチェックを入れる前の変化前の状態
      setNotIsekai(0);
    }else{
      setNotIsekai(1);
    }
    setChecked(event.target.checked);//必ず最後に実行される。
  };
  
  let response
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(true);
    const data = {
      genre : genre,
      notIsekai : notIsekai,
    }
    axios.post("/search", data)
    .then(res => {
      response = res.data;
      console.log(response)
    }
    );
    //axios.get(base_url, {
      //headers: {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"}}).then(res => console.log(res.data))  
  };
  
  let base_url = "https://api.syosetu.com/novelapi/api/?lim=5&out=json&order=weekly" + "&genre=" + genre + "&nottensei=" + notIsekai + "&nottenni=" + notIsekai;

  const title = "なろーせんとーりょく！";
  return (
    <div>
      <h1 className={classes.title}>{ title }</h1>
      <div className={classes.block}>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">ジャンル</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={genre}
              onChange={genreSelect}
            >
              <MenuItem value={101}>異世界(恋愛)</MenuItem>
              <MenuItem value={102}>現実世界（恋愛）</MenuItem>
              <MenuItem value={201}>ハイファンタジー</MenuItem>
              <MenuItem value={202}>ローファンタジー</MenuItem>
              <MenuItem value={301}>純文学</MenuItem>
              <MenuItem value={302}>ヒューマンドラマ</MenuItem>
              <MenuItem value={303}>歴史</MenuItem>
              <MenuItem value={304}>推理</MenuItem>
              <MenuItem value={305}>ホラー</MenuItem>
              <MenuItem value={306}>アクション</MenuItem>
              <MenuItem value={307}>コメディ－</MenuItem>
              <MenuItem value={401}>VRゲーム</MenuItem>
              <MenuItem value={402}>宇宙</MenuItem>
              <MenuItem value={403}>空想科学</MenuItem>
              <MenuItem value={404}>パニック</MenuItem>
              <MenuItem value={9901}>童話</MenuItem>
              <MenuItem value={9902}>詩</MenuItem>
              <MenuItem value={9903}>エッセイ</MenuItem>
              <MenuItem value={9904}>リプレイ</MenuItem>
              <MenuItem value={9999}>その他</MenuItem>
              <MenuItem value={9801}>ノンジャンル</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl component="fieldset" className={classes.formPadding}>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  color="secondary" 
                  checked={checked}
                  onChange={checkBoxChange}/>}
                label="異世界転生・召喚を含む"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="FindInPageIcon">
          <Button
            style={{
              backgroundColor: "#4feff7",
            }}
            variant="contained"
            size="large"
            className={classes.button}
            startIcon={<FindInPageIcon/>}
            onClick={handleSearch}
            //component={ Link } to={"/search"}
          >
            <b>計測</b>
          </Button>
        </div>
    </div>
    <p>{base_url}</p>
    {search ? (
      <Search
        base_url = {base_url}//左が渡す名前で右が渡す変数
        search = {search}
        response = {response}
      />
      
    ) : null
    }
    
    
  </div>
  );
}

 */
