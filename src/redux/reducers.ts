import { ArticleListItemType, ArticleType, CommentType } from "../types/types";
import { ActionTypes } from "./action-types";
const {
  CREATE_ARTICLE,
  SET_ARTICLES,
  REMOVE_ARTICLE,
  EDIT_ARTICLE,
  SET_ARTICLE,
  CREATE_COMMENT
} = ActionTypes;

type StateType = {
  articles: ArticleListItemType[];
  article: ArticleType ;
  comments: CommentType[]
};

const initialState = {
  articles: [],
  article: {} as ArticleType,
  comments: []
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
        comments: action.payload.comments
      };
    }
    case CREATE_ARTICLE: {
      return {
        ...state,
      };
    }
    case CREATE_COMMENT: {
      return {
        ...state,
       comments: [...state.comments, action.payload]
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
