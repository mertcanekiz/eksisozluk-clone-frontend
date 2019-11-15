import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import reloadable from "./reloadable";

class Thread extends Component {
  state = {
    title: "",
    posts: []
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8000/threads/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          id: res.data.id,
          title: res.data.title,
          posts: res.data.posts
        });
      });
    console.log("didmount");
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      axios
        .get(`http://localhost:8000/threads/${this.props.match.params.id}`)
        .then(res => {
          this.setState({
            id: res.data.id,
            title: res.data.title,
            posts: res.data.posts
          });
        });
    }
  }
  render() {
    return (
      <div>
        <h1>
          <Link to={`/thread/${this.state.id}`}>{this.state.title}</Link>
        </h1>
        <ol>
          {this.state.posts.map(post => {
            return (
              <li>
                {post.content}
                <Link to={`/posts/${post.id}`}>{post.created_at}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default withRouter(reloadable(Thread));
