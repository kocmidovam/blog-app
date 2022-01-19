import { ActionTypes } from "./action-types";
const { CREATE_ARTICLE, SET_ARTICLES, REMOVE_ARTICLE, EDIT_ARTICLE } =
  ActionTypes;
type StateType = {
  articles: any;
  article: any;
  loading: boolean;
};

const initialState = {
  loading: true,
  articles: [],
  article: {},
};

type ActionType = { type: string; payload: any };

export const rootReducer: any = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case SET_ARTICLES: {
      return {
        ...state,
        articles: action.payload,
      };
    }
    case CREATE_ARTICLE: {
      return {
        ...state,
      };
    }
    case REMOVE_ARTICLE: {
      return {};
    }
    default:
      return state;
  }
};
