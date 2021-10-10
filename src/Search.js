import React, { Component } from "react";
import Main from "./Main";
import { search } from "./BooksAPI";
import Book from "./Book";
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        books: []
    }

    /**
     * search by title or author and get the result from the API and update the state.books
     * @param {the search key} query 
     */
    searchBook = (query) => {
        if (query.length > 0) {
            search(query).then((books) => {
                this.setState(() => ({
                    books
                }))
            })
        } else {
            this.setState(() => ({
                books: []
            }))
        }
    }

    isBookIsMine = (book) => {
        const res = this.props.mybooks.filter(b => (
            b.id === book.id
        ))
        if (res.length === 0)
            return 'none';
        return res[0].shelf;

    }
    render() {
        const { books } = this.state;
        return (
            <div>
                <Main onSearch={this.searchBook} from='search' />

                <div className='container'>
                    <div className='row bookShelf'>
                        {(books.error ? '' : (
                            books.map(book => (
                                <div key={book.id} className='col-lg-2 col-md-3 col-sm-4 col-12'>
                                    {<Book
                                        shelf={this.isBookIsMine(book)}
                                        book={book}
                                        onUpdateBookShelf={this.props.onUpdateBookShelf} />}
                                </div>
                            ))
                        ))}
                    </div>
                    {(books.length === 0 || books.error) && (
                        <p className='text-secondary centerText fs-5 font-monospace'>Enter search key or search by another key</p>
                    )}
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    mybooks: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
}
export default Search;
