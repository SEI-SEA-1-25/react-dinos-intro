// import React from "react"
// import { Component } from "react"
import React, {Component} from "react";

class Post extends Component {
    render() {
        const comments = this.props.comments.map((comment) =>
       <p>{comment}</p>
        )
        return(
            <div class="dinostyle">
                <h1>{this.props.postTitle}</h1>
                <h4>by {this.props.author}</h4>
                <h4>{this.props.content}</h4>
                <h2>Comments:</h2>
                <p>{comments}</p>
            </div>
        )  
    }
}

export default Post;