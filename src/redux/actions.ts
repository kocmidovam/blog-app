import { Dispatch } from "redux";
import { mainAxios } from "../apis/apiData";
import { CreateArticleType } from "../types/types";
import { ActionTypes } from "./action-types";


export const getArticles = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await mainAxios.get("/articles");
      console.log("all articles data", data);
      dispatch({ type: ActionTypes.SET_ARTICLES, payload: data.items });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getArticleDetail = (id: string | undefined) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await mainAxios.get(`/articles/${id}`);
      console.log("article detail data", data);
      dispatch({ type: ActionTypes.SET_ARTICLE, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createArticle = (values: CreateArticleType) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await mainAxios.post(`/articles`, values);
      console.log("new article data", data);
      dispatch({ type: ActionTypes.CREATE_ARTICLE, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};
