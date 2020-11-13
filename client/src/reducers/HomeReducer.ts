import {
  UPDATE_USER_EMAIL,
  UPDATE_USER_NAME,
  HomeAction,
} from "../actions/HomeAction";

export interface HomeReducerProps {
  email: string;
  name: string;
}

const initialState: HomeReducerProps = {
  email: "",
  name: "",
};

export const HomeReducer = (
  state: HomeReducerProps = initialState,
  action: HomeAction
): HomeReducerProps => {
  switch (action.type) {
    case UPDATE_USER_EMAIL: {
      return { ...state, email: action.email };
    }
    case UPDATE_USER_NAME: {
      return { ...state, name: action.name };
    }
    default:
      return state;
  }
};
