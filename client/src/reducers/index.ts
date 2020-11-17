import { applyMiddleware, combineReducers, createStore, Middleware } from "redux";
import { HomeReducer, HomeReducerProps } from "./HomeReducer";
import { ModalReducer, ModalReducerProps } from "./ModalReducer";
import { FilterReducer, FilterReducerProps } from "./FilterReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export interface RootState {
  HomeReducer: HomeReducerProps;
  ModalReducer: ModalReducerProps;
  FilterReducer: FilterReducerProps;
}

const rootReducer = combineReducers({
  HomeReducer,
  ModalReducer,
  FilterReducer,
});

export const configureStore = () => {
  const middlewares: Middleware[] = [];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
  return store;
};
