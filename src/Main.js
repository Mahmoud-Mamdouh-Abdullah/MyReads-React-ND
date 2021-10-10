import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './icons/icons8-ibooks-48.png'

class Main extends Component {

    state = {
        query: '',
    }

    /**
     * update the state.query with the changed input query
     * @param {the input query} query 
     */
    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
        this.props.onSearch(query);
    }
    render() {
        return (
            <div className='mb-5'>
                <header className='bg-dark navbar border-bottom'>
                    <div className='container row pt-2 pb-2'>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <Link
                                to='/'
                                className='header-link'>
                                <img src={logo} alt='icon'></img>
                                <span className='text-decoration-none'>&nbsp;My Reads</span>
                            </Link>
                        </div>
                        {(this.props.from === 'search') && (
                            <div className='col-lg-8 col-md-8 col-sm-6 '>
                                <input
                                    className='form-control from-text d-block'
                                    type='text'
                                    placeholder='Search by title or author'
                                    value={this.state.query}
                                    onChange={(event) => this.updateQuery(event.target.value)} />
                            </div>
                        )}

                    </div>
                </header>
                {(this.props.from === 'home') && (
                    <div className='banner'>
                        <div className='p-2 shadow opacity-75 d-flex flex-column justify-content-center'>
                            <h1 className='text-white fw-bold'>THE ULTIMATE GUIDE TO FREE EBOOK</h1>
                            <p className='text-white fs-4'>Not sure what to read next? Explore our catalog of public domain books with our editors.</p>
                            <p className='text-white fs-4'>Some real gems are hidden in our library.</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Main;