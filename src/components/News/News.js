import React from 'react';

const News = (props) => {
  const {author, title, description, content} = props.main;
  console.log(props)
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <small>{description}</small>
      <p>{content}</p>
    </div>
  );
};

export default News;