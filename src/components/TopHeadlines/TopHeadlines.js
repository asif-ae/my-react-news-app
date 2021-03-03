import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './TopHeadlines.css';

const TopHeadlines = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b72cdbabc519497ebab62e659e7365e3';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles));
  }, []);
  return (
    <div>
      <h1 className="text-center">Top Headlines: {articles.length}</h1>
      {
        articles.map(article => <News main={article} key={article.url}></News>)
      }
    </div>
  );
};

export default TopHeadlines;