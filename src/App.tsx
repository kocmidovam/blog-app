import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminArticleList from "./pages/AdminArticleList";
import ArticleCreate from "./pages/ArticleCreate";
import ArticleDetail from "./pages/ArticleDetail";
import ArticleList from "./pages/ArticleList";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ArticleList />} />
        <Route path='/create' element={<ArticleCreate />} />
        <Route path='/detail/:id' element={<ArticleDetail />} />
        <Route path='/admin/article-list' element={<AdminArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
