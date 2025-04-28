import React from 'react'
import Navbar from '../Navbar/Navbar';
import QuotesData from './QuotesData';
import './Quotes.css';

const Quotes = () => {
    return (
        <div>
            <div className="quotes-container">
                {/* Navbar */}
                <h2 className="quotes-heading">Inspirational - Food - Quotes</h2>
                <ul className="quotes-list">
                    {QuotesData.map((quote) => (
                        <li key={quote.id} className='quote-item'>
                            <blockquote className='quote-text'>'{quote.text}'</blockquote>
                            <p className="quote-author">-{quote.author}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default Quotes;