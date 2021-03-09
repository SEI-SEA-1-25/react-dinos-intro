// import React from "react"
// import { Component } from "react"
import React, {Component} from "react";

class postTitle extends Component {
    render() {
        return(
            <h1>{this.props.postTitle}</h1>
        )  
    }
}

class Author extends Component {
    render() {
        return(
            <h4>{this.props.author}</h4>
        )  
    }
}

class Content extends Component {
    render() {
        return(
            <h4>{this.props.content}</h4>
        )  
    }
}

class Comment extends Component {
    render() {
        return(
            <h4>{this.props.comment}</h4>
        )  
    }
}

class Post extends Component {
    render() {
        const comments = this.props.comments.map((comment) =>
       <p>{comment}</p>
        )
        return(
            <div class="dinostyle">
                <postTitle postTitle={this.props.postTitle}/>
                <Author author={this.props.author}/>
                <Content content={this.props.content}/>
                <h2>Comments:</h2>
                <p>{comments}</p>
            </div>
        )  
    }
}

class LockedPost extends Component {
    render() {
        return(
            <div class="dinostyle">
                <postTitle postTitle={this.props.postTitle}/>
                <Author author={this.props.author}/>
                <Content content={this.props.content}/>
            </div>
        )  
    }
}

export default Post;