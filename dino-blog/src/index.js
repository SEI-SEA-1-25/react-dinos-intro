import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import reportWebVitals from './reportWebVitals';

const Dinosaur ={
  postTitle: "Dinsosaurs are awesome",
  author: "Stealthy Stegosaurus",
  content: "Check out this body property!",
  comments: ["First!", "I h8 dinos", "sup"]
}

ReactDOM.render(
  <React.StrictMode>
    <Post postTitle={Dinosaur.postTitle} author={Dinosaur.author} content={Dinosaur.content} comments={Dinosaur.comments} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
