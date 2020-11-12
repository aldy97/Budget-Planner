import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={() => <Login></Login>}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
