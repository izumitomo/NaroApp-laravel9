import React, {useEffect} from "react";
import { Box, Grid } from "@mui/material/";
import { DisabledButton, SortingButton, SortP } from "../styles/SortButton";

let ptSortNovels, favSortNovels, revSortNovels, rateSortNovels, comSortNovels;

const SortButton = ({
  novels,
  setNovels,
  user,
}) => {
		useEffect(() => {
      ptSortNovels = novels[0].concat();
      ptSortNovels.sort((a, b) => {
        return b.global_point - a.global_point;
      });
      favSortNovels = novels[0].concat();
      favSortNovels.sort((a, b) => {
        return b.fav_novel_cnt - a.fav_novel_cnt;
      });
      revSortNovels = novels[0].concat();
      revSortNovels.sort((a, b) => {
        return b.all_hyoka_cnt - a.all_hyoka_cnt;
      });
      comSortNovels = novels[0].concat();
      comSortNovels.sort((a, b) => {
        return b.impression_cnt - a.impression_cnt;
      });
      rateSortNovels = novels[0].concat();
      rateSortNovels.sort((a, b) => {
        return b.average_rate - a.average_rate;
      });
    }, [novels]);
  
  const handlePt = () => {
    //novelsを変更することで、Resultコンポーネントの再レンダリングを行う。
    setNovels([ptSortNovels, novels[1]]);
  };
  const handleFav = () => {
    setNovels([favSortNovels, novels[1]]);
  };
  const handleRev = () => {
    setNovels([revSortNovels, novels[1]]);
  };
  const handleRate = () => {
    setNovels([rateSortNovels, novels[1]]);
  };
  const handleCom = () => {
    setNovels([comSortNovels, novels[1]]);
  };
  const handleDisable = () => {
    alert("パワーが足りない……");
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} columns={20} textAlign="center">
        <Grid item xs={20} md={5}>
          <SortP>ならびかえ</SortP>
        </Grid>
        {user ? (
          <>
            <Grid item xs={4} md={3}>
              <SortingButton variant="contained" onClick={handlePt}>
                Pt
              </SortingButton>
            </Grid>
            <Grid item xs={4} md={3}>
              <SortingButton
                variant="contained"
                color="warning"
                onClick={handleFav}
              >
                Fav
              </SortingButton>
            </Grid>
            <Grid item xs={4} md={3}>
              <SortingButton
                variant="contained"
                color="success"
                onClick={handleRev}
              >
                Rev
              </SortingButton>
            </Grid>
            <Grid item xs={4} md={3}>
              <SortingButton
                variant="contained"
                color="error"
                onClick={handleRate}
              >
                Rate
              </SortingButton>
            </Grid>
            <Grid item xs={4} md={3}>
              <SortingButton
                variant="contained"
                color="secondary"
                onClick={handleCom}
              >
                Com
              </SortingButton>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={4} md={3}>
              <DisabledButton variant="contained" onClick={handleDisable}>
                Pt
              </DisabledButton>
            </Grid>
            <Grid item xs={4} md={3}>
              <DisabledButton variant="contained" onClick={handleDisable}>
                Fav
              </DisabledButton>
            </Grid>
            <Grid item xs={4} md={3}>
              <DisabledButton variant="contained" onClick={handleDisable}>
                Rev
              </DisabledButton>
            </Grid>
            <Grid item xs={4} md={3}>
              <SortingButton variant="contained" onClick={handleRate}>
                Rate
              </SortingButton>
            </Grid>
            <Grid item xs={4} md={3}>
              <DisabledButton variant="contained" onClick={handleDisable}>
                Com
              </DisabledButton>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}

export default SortButton;
