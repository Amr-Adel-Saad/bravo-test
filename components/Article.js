import React, { Component } from 'react';

import axios from 'axios';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    }
  }

  componentDidMount() {
    const query = window.location.pathname.split('/');
    const articleId = query[2];
    axios.get(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
      .then(res => {
        this.setState({ article: res.data });
      });
  }

  render() {
    return (
      <article className="article container p-0">
        <p>Main | <span>Knowledge Center</span></p>
        <h1>Articles</h1>
        <div className="rectangle"></div>
        { this.state.article ? <h2>{ this.state.article.title }</h2> :
        <h2>Loading</h2> }
        <div style={{ width: "720px", margin: "auto" }}>
          <img width="100%" height="450px" src="/Image-for-Why-Choose-Us-page.png" alt="article picture"></img>
          <p className="article-body">{ this.state.article.body }</p>
        </div>
        <div style={{ textAlign: "right", margin: "60px 0 60px auto" }}>
          <img src="/share.png"></img>
        </div>
        <div className="rectangle" style={{ margin: "auto" }}></div>
      </article>
    );
  }
}

export default Article;