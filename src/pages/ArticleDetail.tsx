import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticleDetail, getArticles } from "../redux/actions";
import articleImage from "../assets/images/articleImage.jpg";
import Comments from "../components/Comments";
import { useAppSelector } from "../hooks/useAppDispatch";
import { ArticleListItemType } from "../types/types";

const ArticleDetail = () => {
  const dispatch = useDispatch();
  const state = useAppSelector((state) => state);
  const { id } = useParams();
  
  const { title, createdAt, content, comments } = state.article;
  const related = state.articles;

  useEffect(() => {
    dispatch(getArticles());
    dispatch(getArticleDetail(id));
  }, [id]);

  console.log("article detail", state.article);

  return (
    <div className='container pt-5'>
      <div className='row '>
        <div className='col-md-8 border-bottom'>
          <h1>{title}</h1>
          <p className='text-muted'>
            {new Date(createdAt).toLocaleDateString("cs-CZ")}
          </p>
          <div className='mb-4'>
            <img src={articleImage} alt={title} className='w-100' />
          </div>
          <div>
            <p>{content}</p>
          </div>
          <Comments comments={comments}/>

        </div>
        <div className='col-md-4 '>
          <div className="border-start ps-2 pb-5">
            <h4 className="mb-4">Related Articles</h4>
              {related.slice(0, 3).map((item: ArticleListItemType) => (
                <div key={item.articleId}>
                  <h6>{item.title}</h6>
                  <p className="fs-7 related-text">{item.perex}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ArticleDetail;
