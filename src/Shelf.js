import React, { Component } from "react";
import Book from "./Book";
import PropTypes from 'prop-types';

class Shelf extends Component {
    render() {
        const { books, shelf, onUpdateBookShelf } = this.props;
        return (
            <div className='container pt-5'>
                <h3 className='text-start text-secondary fw-bold font-monospace'>{shelf.name}</h3>
                <hr />
                <div className='row bookShelf'>
                    {books.map((book) => (
                        <div key={book.id} className='col-lg-2 col-md-3 col-sm-4 col-12'>
                            <Book
                                shelf={shelf.id}
                                book={book}
                                onUpdateBookShelf={onUpdateBookShelf} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
}

export default Shelf;