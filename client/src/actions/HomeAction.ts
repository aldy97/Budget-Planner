export const UPDATE_USER_INFO = "update user information";
import { HomeReducerProps } from "../reducers/HomeReducer";

export interface UpdateUserInfo {
  type: typeof UPDATE_USER_INFO;
  user: HomeReducerProps;
}

export type HomeAction = UpdateUserInfo;
