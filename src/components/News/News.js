import React from 'react';

const News = (props) => {
  const {author, title, description, content} = props.main;
  console.log(props)
  return (
    <div className="p-3 m-3 bg-light">
      <h1 className="bg-primary p-3 rounded text-white">{title}</h1>
      <div className="p-3">
        <p>{author}</p>
        <small>{description}</small>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default News;