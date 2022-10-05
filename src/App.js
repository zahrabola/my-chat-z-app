import React from "react";
import { BrowserRouter, Routes, Route /*Navigate*/ } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <div className="App">Zahra home</div>
    </BrowserRouter>
  );
}

export default App;
