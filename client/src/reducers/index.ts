import { applyMiddleware, combineReducers, createStore, Middleware } from "redux";
import { HomeReducer, HomeReducerProps } from "./HomeReducer";
import { ModalReducer, ModalReducerProps } from "./ModalReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export interface RootState {
  HomeReducer: HomeReducerProps;
  ModalReducer: ModalReducerProps;
}

const rootReducer = combineReducers({
  HomeReducer,
  ModalReducer,
});

export const configureStore = () => {
  const middlewares: Middleware[] = [];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
  return store;
};
