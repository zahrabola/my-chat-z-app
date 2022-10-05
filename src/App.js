
import { BrowserRouter, Routes, Route,
Navigate} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Register from './Pages/Register';
import React, { Children, useContext } from "react";
import {AuthContext} from "./Context/AuthContext";

function App() {

  const { currentUser } = useContext(AuthContext);
///console.log(currentUser)

const ProtectedRoute = ({ chhildren }) => {
  if (!currentUser) {
    return <Navigate to="/login"/>;
  }
  return Children
}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <div className="App">Zahra home</div>
    </BrowserRouter>
  );
}

export default App;
/*const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };*/