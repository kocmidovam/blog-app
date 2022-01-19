import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticles } from "../redux/actions";
import ArticleListItem from "../components/ArticleListItem";

const ArticleList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <div className='container pt-5'>
      <h1 className='mb-5'>Recent articles</h1>
      <ArticleListItem />
    </div>
  );
};

export default ArticleList;
