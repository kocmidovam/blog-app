import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticleDetail, getArticles } from "../redux/actions";
import articleImage from "../assets/images/articleImage.jpg";

const ArticleDetail = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();
  //@ts-ignore
  const { title, createdAt, content } = state.article;
  //@ts-ignore
  const related = state.articles;

  useEffect(() => {
    dispatch(getArticles());
    dispatch(getArticleDetail(id));
  }, [id]);

  //@ts-ignore
  console.log("article detail", state.article);

  return (
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-md-8'>
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
        </div>
        <div className='col-md-4 '>
          <div className="border-start ps-2 pb-5">
            <h4 className="mb-4">Related Articles</h4>
              {related.map((item: any) => (
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
