export interface INewsState {
    news: IArticle[]
}

export interface IArticle {
  body: string;
  categories: string;
  downvotes: string;
  guid: string;
  id: string;
  imageurl: string;
  lang: string;
  published_on: number;
  source: string;
  source_info: {
    img: string;
    lang: string;
    name: string;
  };
  tags: string;
  title: string;
  upvotes: string;
  url: string;
}
