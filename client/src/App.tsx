import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./reducers/index";
import Diagram from "./pages/Diagram";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={() => <Login></Login>}></Route>
        <Route path="/home" exact component={() => <Home></Home>}></Route>
        <Route
          path="/overview/:email"
          exact
          component={() => <Diagram></Diagram>}
        ></Route>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
