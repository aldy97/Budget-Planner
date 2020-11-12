import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={() => <Login></Login>}></Route>
        <Route path="/home" exact component={() => <Home></Home>}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
