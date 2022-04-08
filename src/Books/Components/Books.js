import axios from 'axios';
import React from 'react';
import BookList from './BookList';

class Books extends React.Component {

    state = {
        BOOKS: []
    };
    componentDidMount() {
        axios.get(`https://striking-port-331208-default-rtdb.asia-southeast1.firebasedatabase.app/Books.json`)
            .then(res => {
                const BOOKS = res.data;
                this.setState({ BOOKS });
                // console.log(JSON.stringify(BOOKS));
            })
    };


    render() {
        // console.log(catebooks);
        // console.log(BOOKS);
        // const books = JSON.stringify(this.state.BOOKS);
        const catebooks = this.state.BOOKS.filter(item => this.props.item === item.category);
        // console.log(books + " rend");
        return (
            <div>

                <BookList items={{ catebooks }} />
            </div>
        )
    }
}

export default Books;
