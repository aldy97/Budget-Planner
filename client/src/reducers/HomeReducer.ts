import { Record } from "../components/Overview/Content";
import { UPDATE_USER_INFO, HomeAction } from "../actions/HomeAction";

export interface HomeReducerProps {
  name: string;
  bio?: string;
  email: string;
  password: string;
  budget?: number;
  threshold?: number;
  records: Record[];
  createdOn?: string;
  updatedOn?: string;
}

const initialState: HomeReducerProps = {
  name: "",
  bio: "",
  email: "",
  password: "",
  budget: 0,
  threshold: 0,
  records: [],
  createdOn: "",
  updatedOn: "",
};

export const HomeReducer = (
  state: HomeReducerProps = initialState,
  action: HomeAction
): HomeReducerProps => {
  switch (action.type) {
    case UPDATE_USER_INFO: {
      return { ...action.user };
    }
    default:
      return state;
  }
};
