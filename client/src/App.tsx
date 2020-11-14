import React from "react";
import Login from "./pages/Login";
import OverView from "./pages/OverView";
import Diagram from "./pages/Diagram";
import History from "./pages/History";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./reducers/index";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={() => <Login></Login>}></Route>
        <Route
          path="/overview"
          exact
          component={() => <OverView></OverView>}
        ></Route>
        <Route path="/diagram" exact component={() => <Diagram></Diagram>}></Route>
        <Route path="/history" exact component={() => <History></History>}></Route>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
