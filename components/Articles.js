import React, { Component } from 'react';
import axios from 'axios';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({ articles: res.data.slice(0, 15) });
      });
  }

  render() {
    return (
      <section className="articles-section container p-0">
        <div className="articles-section__search">
          <input placeholder="Search" />
          <i className="fa fa-lg fa-search"></i>
        </div>
        <section className="articles-section__articles">
          { this.state.articles.map((article, index) => 
            <article key={index}>
              <a href={"https://jsonplaceholder.typicode.com/posts/" + article.id}>
                <img width="100%" src="Capture.png"></img>
                <p>{ article.title }</p>
              </a>
            </article>
           ) }
        </section>
        <div style={{ textAlign: "right", margin: "40px 0 50px auto" }}>
          <img src="share.png"></img>
        </div>
      </section>
    );
  }
}

export default Articles;