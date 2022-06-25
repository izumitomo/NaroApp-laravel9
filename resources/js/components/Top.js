/* 「useState」と「useEffect」をimport↓ */
import React, { useState, useEffect } from "react";
/* 「onAuthStateChanged」と「auth」をimport↓ */
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/Config";
import { useNavigate, Navigate } from "react-router-dom";

const Top = () => {
  /* ↓state変数「user」を定義 */
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
   onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);
     setLoading(false);
   });
  }, []);

  /* ↓「navigate」を定義 */
  const navigate = useNavigate();

  /* ↓関数「logout」を定義 */
  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  };

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/login/`} />
          ) : (
            <>
              <h1>マイページ</h1>
              <p>{user?.email}</p>
              <button onClick={logout}>ログアウト</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Top;
