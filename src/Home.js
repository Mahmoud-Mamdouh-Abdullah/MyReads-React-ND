import React, { Component } from "react";
import Main from "./Main";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

/**
 * the array of 3 shelves with id and name
 */
const shelves = [
    { id: 'currentlyReading', name: 'Currently Reading' },
    { id: 'wantToRead', name: 'Want to Read' },
    { id: 'read', name: 'Read' }
];

class Home extends Component {
    render() {
        const { books, onUpdateBookShelf } = this.props;
        return (
            <div>
                <Main from='home' />
                {shelves.map((shelf) => {
                    const shelfBooks = books.filter(book => (
                        book.shelf === shelf.id
                    ))
                    return (
                        < Shelf
                            key={shelf.id}
                            books={shelfBooks}
                            shelf={shelf}
                            onUpdateBookShelf={onUpdateBookShelf} />
                    )
                })}
                <div className="open-search">
                    <Link className="open-search-link bg-dark" to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
}

export default Home;