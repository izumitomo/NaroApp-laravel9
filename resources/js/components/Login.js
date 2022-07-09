import React, { useState, useEffect } from "react";
import { Box, Fab, Grid } from "@mui/material";
import { AcUnitRounded, BoltRounded } from "@mui/icons-material";
import {onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, twitterProvider } from "../firebase/Config";
import { Navigate, Link } from "react-router-dom";
import { StoryP, AuthP} from "../styles/Login";

const Login = () => {
	const handleGoogleLogin = async (e) => {
		try {
			await signInWithPopup(auth, googleProvider);
			alert("success : " + user.user.displayName + "さんでログインしました");
		} catch (error) {
			console.log(error.message);
		}
	};
	const handleTwitterLogin = async (e) => {
		try {
			await signInWithPopup(auth, twitterProvider);
		} catch (error) {
			console.log(error.message);
		}
		
	}


	/* ↓ログインを判定する設定 */
	const [user, setUser] = useState();

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(currentUser)
		});
	});

	return (
    <>
      {/* ↓ログインしている場合、マイページにリダイレクトする設定 */}
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <StoryP>禁じられた力を見つけた……</StoryP>
          <Box sx={{ mt: 4 }}>
            <Grid
              container
              spacing={1}
              columns={12}
              justifyContent="space-evenly"
              textAlign="center"
            >
              <Grid item xs={6}>
                <Fab variant="extended" onClick={handleGoogleLogin}>
                  <BoltRounded sx={{ mr: 1 }} fontSize="large" />
                  <AuthP>なないろのぐーぐる</AuthP>
                </Fab>
              </Grid>
              <Grid item xs={6}>
                <Fab variant="extended" onClick={handleTwitterLogin}>
                  <AcUnitRounded sx={{ mr: 1 }} fontSize="large" />
                  <AuthP>こんぺきのついったー</AuthP>
                </Fab>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default Login;
