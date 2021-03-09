import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import reportWebVitals from './reportWebVitals';

const post = {
  header: 'Dinos are awesome!!',
  author: 'by me, baby!',
  content: 'I like big dinos and I cannot lie.I like big dinos and I cannot lie.I like big dinos and I cannot lie.I like big dinos and I cannot lie.I like big dinos and I cannot lie.I like big dinos and I cannot lie.I like big dinos and I cannot lie.',
  comments: [
    'first!',
    'I love dinos too!',
    'YOU STINK'
  ]
}


ReactDOM.render(
  <React.StrictMode>
    <Post
      header={post.header}
      author={post.author}
      content={post.content}
      comments={post.comments}
     />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
