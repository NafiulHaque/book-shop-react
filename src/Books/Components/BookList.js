import React from 'react';
import BookItem from './BookItem';

const BookList = props => {
    // console.log(props.items.BOOKS);
    if (props.items.length === 0) {
        return (
            <div className='center'>
                <h2>
                    Books Not Found
                </h2>
            </div>
        )
    }
    return (
        <div className="regular slider">

            {props.items.catebooks.map(book => {
                return <BookItem
                    key={book.id}
                    id={book.id}
                    name={book.name}
                    writter={book.writter}
                    image={book.image}
                    price={book.price}
                    category={book.category}
                />
            })}


        </div>
    )
}

export default BookList;
