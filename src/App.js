import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Trailer from "./pages/Trailer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="detail/:id" element={<Detail/>} />
          <Route path="trailer/:id" element={<Trailer/>} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
