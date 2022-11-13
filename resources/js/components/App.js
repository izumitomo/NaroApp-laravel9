import React from "react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Tutorial from "./Tutorial";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

//import Search from "./Search";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

/* import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Mypage from "./Mypage"
import { createRoot } from "react-dom/client";
import Top from "./Top";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/"} element={<Mypage />} />
          <Route path={"/top/"} element={<Top />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

export default App; */
