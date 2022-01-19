import React from "react";
import { useSelector } from "react-redux";

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
          const { title, articleId } = article;
          return (
            <div key={articleId}>
              <h3>{title}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default ArticleListItem;
