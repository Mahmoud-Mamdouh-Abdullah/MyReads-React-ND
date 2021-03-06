import React from "react";
import { useLocation } from "react-router";
import Main from "./Main";
import facebook from './icons/icons8-facebook-240.png'
import twitter from './icons/icons8-twitter-240.png'
import linkedin from './icons/icons8-linkedin-240.png'
import defaultImage from './images/default.jpg'

const BookDetails = (props) => {

    /**
     * get the book passed in the Link
     */
    const location = useLocation()
    const { book } = location.state;
    const imageURL = (book.imageLinks) ? book.imageLinks.thumbnail : defaultImage;
    return (
        <div>
            <Main from='details' />
            <div className='container' style={{ paddingTop: '100px' }}>
                <div className='row'>
                    <div className='col-lg-2 d-flex flex-column justify-content-start' style={{ paddingLeft: '50px' }}>
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundPosition: 'center', backgroundImage: `url('${imageURL}')` }}></div>
                        <span className='text-start mt-2'>PUBLISHED : {book.publishedDate}</span>
                        <span className='text-start mt-1'>PAGES : {book.pageCount}</span>
                    </div>
                    <div className='col-lg-10'>
                        <h2 className='text-start font-monospace fw-bold'>{book.title}</h2>
                        <div className='row'>
                            <span className='text-start col-lg-3 border-end'>by {book.authors}</span>
                            <div className='col-lg-7 d-flex flex-row justify-content-start gap-5'>
                                <a href='https://www.linkedin.com/in/mahmoud-mamdouh-88b72a195/' rel="noreferrer" target='_blank' >
                                    <img width='30px' height='30px' src={linkedin} alt='facebook' />
                                </a>
                                <a href='https://twitter.com/7ouda1011' rel="noreferrer" target='_blank'>
                                    <img width='30px' height='30px' src={twitter} alt='facebook' />
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=100006532898046' rel="noreferrer" target='_blank'>
                                    <img width='30px' height='30px' src={facebook} alt='facebook' />
                                </a>

                            </div>
                        </div>
                        <hr />
                        <p className='text-start'>{book.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BookDetails;