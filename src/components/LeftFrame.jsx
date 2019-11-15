import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import axios from "axios";

class LeftFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/threads/")
      .then(res => {
        this.setState({ threads: res.data });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="list-group">
        {this.state.threads.map(thread => {
          return (
            <NavLink
              className={`list-group-item ${
                this.props.match.params.id == thread.id ? "active" : ""
              }`}
              key={`leftframe-thread-${thread.id}`}
              to={`/thread/${thread.id}`}
            >
              {thread.title} ({thread.posts.length})
            </NavLink>
          );
        })}
      </div>
    );
  }
}

export default withRouter(LeftFrame);
