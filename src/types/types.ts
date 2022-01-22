export interface CommentType {
  commentId: string;
  author: string;
  content: string;
  createdAt: string;
  score: number;
}

export interface ArticleType {
  articleId: string;
  createdAt: string;
  imageId: string;
  lastUpdatedAt: string;
  perex: string;
  comments: CommentType[];
  content: string;
  title: string;
}

export interface CreateArticleType {
  title: string;
  perex: string;
  content: string;
  image?: string;
}

export interface ArticleListItemType {
  articleId: string;
  createdAt: string;
  imageId: string;
  lastUpdatedAt: string;
  perex: string;
  comments?: CommentType[];
  title: string;
}
