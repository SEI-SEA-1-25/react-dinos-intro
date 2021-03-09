import {Component} from 'react';

class Header extends Component {
  render() {
    return (<h1>{this.props.header}</h1>)
  }
}

class Author extends Component {
  render() {
    return (<h3>{this.props.author}</h3>)
  }
}

class Content extends Component {
  render() {
    return (<p>{this.props.content}</p>)
  }
}

class Comment extends Component {
  render() {
    return (<p>{this.props.comment}</p>)
  }
}

class Post extends Component {
  render () {
    const comments = [];
    this.props.comments.forEach((comment) => comments.push(<Comment comment={comment} />))

    return (
      <div>
        <Header header={this.props.header} />
        <Author author={this.props.author} />
        <Content content={this.props.content} />
        <p>{comments}</p>
      </div>
    )
  }
}

class LockedPost extends Component {
  render () {
    return (
      <div>
        <Header header={this.props.header} />
        <Author author={this.props.author} />
        <Content content={this.props.content} />
      </div>
    )
  }
}
<Post comments={['one comment', 'two']} style=""></Post>

export default Post;
