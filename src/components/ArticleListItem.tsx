import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import articleImage from "../assets/images/articleImage.jpg";

const ArticleListItem = () => {
  const state = useSelector((state) => state);
  console.log("articles state", state);
  //@ts-ignore
  console.log("articles state items", state.articles);

  return (
    <div>
      {/* @ts-ignore */}
      {state.articles &&
        //@ts-ignore
        state.articles.map((article: any) => {
          const { title, articleId, perex, comments, createdAt } = article;
          return (
            <div key={articleId} className='mb-4 article-wrapper'>
              <div className='mb-4 me-4'>
                <img src={articleImage} alt={title} className='article-img' />
              </div>
              <div>
                <h4 className='mb-4'>{title}</h4>
                <p className='mb-4 text-muted'>
                  {new Date(createdAt).toLocaleDateString("en-GB")}
                </p>
                <p className='mb-4'>{perex}</p>
                <div className='d-flex'>
                  <Link to={`/detail/${articleId}`} className='me-3 blue-link'>
                    Read whole article
                  </Link>
                  <p className='text-muted'>
                    {comments ? comments.length : 0} comments
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ArticleListItem;
