export const UPDATE_TITLE = "update_title";
export const UPDATE_RECORD_TYPE = "update_record_type";
export const UPDATE_CATEGORY = "update_category";
export const UPDATE_AMOUNT = "update_amount";
export const UPDATE_DESCRIPTION = "update_description";
export const CLEAR_RECORD = "clear_record";

export interface UpdateTitle {
  type: typeof UPDATE_TITLE;
  title: string;
}

export interface UpdateType {
  type: typeof UPDATE_RECORD_TYPE;
  recordType: string;
}

export interface UpdateCategory {
  type: typeof UPDATE_CATEGORY;
  category: string;
}

export interface UpdateAmount {
  type: typeof UPDATE_AMOUNT;
  amount: number;
}

export interface UpdateDescription {
  type: typeof UPDATE_DESCRIPTION;
  description: string;
}

export interface ClearRecord {
  type: typeof CLEAR_RECORD;
}

export type ModalAction =
  | UpdateAmount
  | UpdateCategory
  | UpdateDescription
  | UpdateTitle
  | UpdateType
  | ClearRecord;
