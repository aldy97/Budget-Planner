import {
  UPDATE_TITLE,
  UPDATE_RECORD_TYPE,
  UPDATE_CATEGORY,
  UPDATE_AMOUNT,
  UPDATE_DESCRIPTION,
  CLEAR_RECORD,
  ModalAction,
} from "../actions/ModalAction";

export interface ModalReducerProps {
  title: string;
  recordType: string;
  category: string;
  amount: number;
  description: string;
}

const initialState: ModalReducerProps = {
  title: "",
  recordType: "expense",
  category: "",
  amount: 0,
  description: "",
};

export const ModalReducer = (
  state: ModalReducerProps = initialState,
  action: ModalAction
): ModalReducerProps => {
  switch (action.type) {
    case UPDATE_TITLE: {
      return { ...state, title: action.title };
    }
    case UPDATE_RECORD_TYPE: {
      return { ...state, recordType: action.recordType };
    }
    case UPDATE_CATEGORY: {
      return { ...state, category: action.category };
    }
    case UPDATE_AMOUNT: {
      return { ...state, amount: action.amount };
    }
    case UPDATE_DESCRIPTION: {
      return { ...state, description: action.description };
    }
    case CLEAR_RECORD: {
      return initialState;
    }
    default:
      return state;
  }
};
