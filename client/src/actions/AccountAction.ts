export const UPDATE_BUDGET = "update_budget";

export interface UpdateBudget {
  type: typeof UPDATE_BUDGET;
  budget: number;
}

export type AccountAction = UpdateBudget;
