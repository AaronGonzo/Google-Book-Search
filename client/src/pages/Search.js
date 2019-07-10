import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "./style.css";
import Card from "../components/Card/Card";
import { Container } from "../components/Grid";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    q: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data,
          title: res.data.title,
          author: "",
          synopsis: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("I've been clicked");
    this.loadBooks();
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Search for Your Favorite Books!</h1>
        </Jumbotron>
        <form className="container border">
          <div className="form-group">
            <label>Search A Book</label>
            <input
              type="text"
              className="form-control"
              placeholder="Book Title"
              value={this.state.q}
              name="q"
              q={this.state.q}
              onChange={this.handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-primary mt-2"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        <br />
        <div className="container">
          <h2>Results</h2>
          <div className="container border">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Container>
    );
  }
}

export default Search;
