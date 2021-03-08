import React from "react"
import { Component } from "react"

class Post extends Component {
    render() {
        return(
            <div class="dinostyle">
                <h1>{this.props.postTitle}</h1>
                <h4>by {this.props.author}</h4>
                <h4>{this.props.content}</h4>
                <h2>Comments:</h2>
                <h4>{this.props.comments}</h4>
            </div>
        )  
    }
}

export default Post;