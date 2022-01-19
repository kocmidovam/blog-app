import { mainAxios } from "../apis/apiData";
import { ActionTypes } from "./action-types";

export const getArticles = () => {
  return async (dispatch:any) => {
    try {
      const {data} = await mainAxios.get('/articles')
      console.log('all articles data', data)
      dispatch({type: ActionTypes.SET_ARTICLES, payload: data.items})
    } catch (error) {
      console.error(error)
    }
  }
}
