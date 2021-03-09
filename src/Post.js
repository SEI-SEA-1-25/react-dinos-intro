import { Component } from "react";

class Header extends Component {
  render() {
    return <h1>{this.props.header}</h1>;
  }
}

class Author extends Component {
  render() {
    return <h3>{this.props.author}</h3>;
  }
}

class Content extends Component {
  render() {
    return <p>{this.props.content}</p>;
  }
}

class Comment extends Component {
  render() {
    return <p>{this.props.comment}</p>;
  }
}

class Post extends Component {
  render() {
    const comments = [];
    this.props.comments.forEach((comment) => comments.push(<Comment comment={comment} />));

    // Instead of the forEach, you could use a for loop
    // to iterate through this.props.comments:
    // for (const comment of this.props.comments) {
    //   comments.push(<Comment comment={comment} />);
    // }

    // Or, instead of any of the above, you could map it:
    // const comments = this.props.comments.map((comment) => <Comment comment={comment} />)

    return (
      <div>
        <Header header={this.props.header} />
        <Author author={this.props.author} />
        <Content content={this.props.content} />
        <p>{comments}</p>
      </div>
    );
  }
}

// A locked post has everything a post has, without the comments section.
class LockedPost extends Component {
  render() {
    return (
      <div>
        <Header header={this.props.header} />
        <Author author={this.props.author} />
        <Content content={this.props.content} />
      </div>
    );
  }
}

export default Post;
