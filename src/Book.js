import React, { Component } from "react";
import PropTypes from 'prop-types';
import defaultImage from './images/default.jpg'
import { Link } from "react-router-dom";
class Book extends Component {

    addToShelf = (book, shelf) => {
        this.props.onUpdateBookShelf(book, shelf);
    }

    render() {
        const { shelf, book } = this.props;
        const bookTitle = book.title;
        const bookAuthors = book.authors;
        const imageURL = (book.imageLinks) ? book.imageLinks.thumbnail : defaultImage;
        return (
            <div className="book">
                <div className="book-top">
                    <Link to={{
                        pathname: '/details',
                        state: {
                            book
                        }
                    }}  >
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundPosition: 'center', backgroundImage: `url('${imageURL}')` }}></div>
                    </Link>
                    <div className="book-shelf-changer bg-dark">
                        <select onChange={(event) => this.addToShelf(book, event.target.value)} value={shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{bookAuthors}</div>
            </div>
        )
    }

}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
}
export default Book;