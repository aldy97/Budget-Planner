export const UPDATE_USER_EMAIL = "update user email";
export const UPDATE_USER_NAME = "update user name";

export interface UpdateEmail {
  type: typeof UPDATE_USER_EMAIL;
  email: string;
}

export interface UpdateName {
  type: typeof UPDATE_USER_NAME;
  name: string;
}

export type HomeAction = UpdateEmail | UpdateName;
