import { ArticleListItemType, ArticleType } from "../types/types";
import { ActionTypes } from "./action-types";
const {
  CREATE_ARTICLE,
  SET_ARTICLES,
  REMOVE_ARTICLE,
  EDIT_ARTICLE,
  SET_ARTICLE,
} = ActionTypes;

type StateType = {
  articles: ArticleListItemType[];
  article: ArticleType ;
};

const initialState = {
  articles: [],
  article: {} as ArticleType,
};

type ActionType = { type: string; payload: any};

export const rootReducer = (
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
    case SET_ARTICLE: {
      return {
        ...state,
        article: action.payload,
      };
    }
    case CREATE_ARTICLE: {
      return {
        ...state,
      };
    }
    case REMOVE_ARTICLE: {
      const deletedArticles = state.articles.filter(
        (item: ArticleListItemType) => item.articleId !== action.payload
      );
      return { ...state, articles: deletedArticles };
    }
    default:
      return state;
  }
};
