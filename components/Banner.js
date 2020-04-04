import React, { Component } from 'react';
import axios from 'axios';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: 3,
      articles: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({ articles: res.data.slice(0, 15) });
      });
  }

  handleClick(e) {
    e.preventDefault();
    let icons = document.querySelectorAll('.banner__bullets--icon');
    icons.forEach(icon => { icon.style.color = 'transparent' });
    this.setState({
      articleId: parseInt(e.currentTarget.id)
    });
    e.target.style.color = 'white';
  }

  render() {
    let { articleId, articles } = this.state;
    let bodyShown;
    if (articles.length > 0) {
      bodyShown = articles[articleId - 1].body.split(' ');
      bodyShown = bodyShown.slice(0, 11);
      bodyShown = bodyShown.join(" ");
    }

    return (
      <section className="knowledge__banner">
        <article>
          { articles.length > 0 && bodyShown ? 
          <div className="container">
            <h2>{ articles[articleId - 1].title }</h2>
            <p>{ bodyShown }</p>
            <div>
              <a className="article__link--1" href={`/articles/${articleId}`}>More details</a>
              <a className="article__link--2" href={"https://jsonplaceholder.typicode.com/posts"}>All articles</a>
            </div>
          </div>
          : <h2>Loading</h2> }
        </article>

        <div className="banner__bullets">
          <a href="#" onClick={this.handleClick} id="1">
            <i className="fa fa-circle banner__bullets--icon"></i>
          </a>
          <a href="#" onClick={this.handleClick} id="2">
            <i className="fa fa-circle banner__bullets--icon"></i>
          </a>
          <a href="#" onClick={this.handleClick} id="3">
            <i className="fa fa-circle banner__bullets--icon" style={{ color: "white" }}></i>
          </a>
          <a href="#" onClick={this.handleClick} id="4">
            <i className="fa fa-circle banner__bullets--icon"></i>
          </a>
          <a href="#" onClick={this.handleClick} id="5">
            <i className="fa fa-circle banner__bullets--icon"></i>
          </a>
        </div>
      </section>
    );
  }
}

export default Banner;