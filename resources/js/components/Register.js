import React, { useState, useEffect } from "react";
/* ↓「onAuthStateChanged」をimport */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/Config";
/* ↓「Navigate」をimport */
import { Navigate, Link } from "react-router-dom";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleSubmit = async (e) => {
    //handleSubmit実行時にブラウザのリロードを防ぐ。
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error);
      if (error.message.indexOf("email-already-in-use") != -1) {
        alert("すでに登録されているメールアドレスです");
      } else if (error.message.indexOf("Password should be at least 6 characters") != -1) {
        alert("6文字未満のパスワードは登録することはできません")
      } else {
        alert("有効な値を入力してください")
       }
    }
  };

  /* ↓state変数「user」を定義 */
  const [user, setUser] = useState("");

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("login check!");
    });
  }, []);

  return (
    <>
      {/* ↓ログインしていればマイページを表示 */}
      {user ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <h1>新規登録</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <button>登録する</button>
            <p>
              ログインは<Link to={"/login"}>こちら</Link>
            </p>
          </form>
        </>
      )}
    </>
  );
};

export default Register;
