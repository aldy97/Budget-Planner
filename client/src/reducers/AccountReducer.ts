import { UPDATE_BUDGET, AccountAction } from "../actions/AccountAction";

export interface AccountReducerProps {
  budget: number;
}

const initialState: AccountReducerProps = {
  budget: 0,
};

export const AccountReducer = (
  state: AccountReducerProps = initialState,
  action: AccountAction
): AccountReducerProps => {
  switch (action.type) {
    case UPDATE_BUDGET: {
      return { ...state, budget: action.budget };
    }
    default:
      return state;
  }
};
