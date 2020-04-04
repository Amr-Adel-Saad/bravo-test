import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import axios from 'axios';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: '',
      alert: false,
      commentSuccess: false,
      comments: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const query = window.location.pathname.split('/');
    const articleId = query[2];
    axios.get(`https://jsonplaceholder.typicode.com/posts/${articleId}/comments`)
      .then(res => {
        this.setState({ comments: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }


  handleChange(e) {
    const stateObject = {};
    stateObject[e.target.id] = e.target.value;
    this.setState(stateObject);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ alert: false })
    const { name, email, comment } = this.state;
    if (!name || !email || !comment) {
      this.setState({ alert: true });
    } else {
      const query = window.location.pathname.split('/');
      const articleId = query[2];
      Axios.post(`https://jsonplaceholder.typicode.com/posts/${articleId}/comments`, {
        postId: articleId,
        name,
        email,
        body: comment
      })
        .then(res => {
          this.setState({
            commentSuccess: true
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <section className="container" style={{ width: "80%", margin: "50px auto" }} >
        <Form className="commentsForm" onSubmit={this.handleSubmit} style={{ width: "720px" }} >
          <h3>Leave a comment</h3>
          <FormGroup>
            <Label for="comment">Your comment</Label>
            <Input onChange={this.handleChange} type="textarea" id="comment" />
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input onChange={this.handleChange} type="text" id="name" placeholder="Type your name here" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={this.handleChange} type="email" id="email" placeholder="Type your email here" />
          </FormGroup>
          <Alert isOpen={this.state.alert} color="warning">
            Please enter all fields!
          </Alert>
          <Button>Post</Button>
          <Alert isOpen={this.state.commentSuccess} color="warning">
            Please enter all fields!
          </Alert>
        </Form>
        <section className="comments" style={{ margin: "50px 0 50px", width: "720px" }} >
        {this.state.comments.length > 0 ?
          this.state.comments.map(comment => (
            <article key={comment.id}>
              <h4>{comment.name}<br />
                <small>{comment.email}</small>
              </h4>
              <p>{comment.body}</p>
            </article>
          )) : null}
        </section>
      </section>
    );
  }
}

export default CommentSection;