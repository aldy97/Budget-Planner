import {
  UPDATE_USER_EMAIL,
  UPDATE_USER_NAME,
  UPDATE_USER_ID,
  HomeAction,
} from "../actions/HomeAction";

export interface HomeReducerProps {
  email: string;
  name: string;
  uid: string;
}

const initialState: HomeReducerProps = {
  email: "",
  name: "",
  uid: "",
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
    case UPDATE_USER_ID: {
      return { ...state, uid: action.uid };
    }
    default:
      return state;
  }
};
