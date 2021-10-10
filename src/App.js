import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Search from './Search';
import { getAll } from './BooksAPI';
import { update } from './BooksAPI';
import BookDetails from './BookDetails';


class App extends Component {

  state = {
    books: []
  }

  /**
   * get all my books
   */
  componentDidMount() {
    getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  /**
   * update the book shelf
   * @param {the book which will update it's shelf} book 
   * @param {the value of the shelf} shelf 
   */
  updateBookShelf = (book, shelf) => {
    update(book, shelf).then((data) => {
      book.shelf = shelf;
      this.setState((currentState) => ({
        books: [...currentState.books.filter((b) => (
          b.id !== book.id
        )), book]
      }))
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Home
            books={this.state.books}
            onUpdateBookShelf={this.updateBookShelf} />
        )} />

        <Route path='/search' render={() => (
          <Search
            mybooks={this.state.books}
            onUpdateBookShelf={this.updateBookShelf} />
        )} />

        <Route path='/details' render={() => (
          <BookDetails />
        )}/>
      </div>
    )
  }
}

export default App;
