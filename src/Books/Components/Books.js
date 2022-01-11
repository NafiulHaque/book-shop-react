import React from 'react'
import BookList from './BookList'

const Books = props => {

    const BOOKS = [
        {
            id: 'b1',
            name: 'Introduction to Electric Circuits',
            writter: 'Richard C. Dorf',
            image: 'https://firebasestorage.googleapis.com/v0/b/striking-port-331208.appspot.com/o/1.jpg?alt=media&token=7d56b44d-b59a-451c-ade9-6d1a574b179d',
            category: 'ইঞ্জিনিয়ারিং',
            price: 490,
            publication: ''

        },
        {
            id: 'b2',
            name: 'Power Electronics',
            writter: 'Richard C. Dorf',
            image: 'https://firebasestorage.googleapis.com/v0/b/striking-port-331208.appspot.com/o/2.jpg?alt=media&token=351ddb05-5306-488c-af51-15a8aeb9f3df',
            category: 'ইঞ্জিনিয়ারিং',
            price: 590,
            publication: ''

        },
        {
            id: 'b1',
            name: 'Technological Inovation',
            writter: 'Richard C. Dorf',
            image: 'https://firebasestorage.googleapis.com/v0/b/striking-port-331208.appspot.com/o/3.jpg?alt=media&token=7387b6e7-25ee-4754-958e-242dd7d1fa82',
            category: 'ইঞ্জিনিয়ারিং',
            price: 490,
            publication: ''

        },
        {
            id: 'b1',
            name: 'Princple of Power System',
            writter: 'VK Meheta, Rohit Meheta',
            image: 'https://firebasestorage.googleapis.com/v0/b/striking-port-331208.appspot.com/o/4.jpg?alt=media&token=2726353d-a46b-48e5-a8f8-43eafbc885e8',
            category: 'ইঞ্জিনিয়ারিং',
            price: 450,
            publication: ''

        },
        {
            id: 'b1',
            name: 'Data & Computer Communication',
            writter: 'Richard C. Dorf',
            image: 'https://firebasestorage.googleapis.com/v0/b/striking-port-331208.appspot.com/o/5.jpg?alt=media&token=cb7675d0-3a7d-4b34-9466-c6786313aabc',
            category: 'ইঞ্জিনিয়ারিং',
            price: 790,
            publication: ''

        },
        {
            id: 'b1',
            name: 'Cryptography and Network Security',
            writter: 'William Stallings',
            image: 'https://firebasestorage.googleapis.com/v0/b/striking-port-331208.appspot.com/o/6.jpg?alt=media&token=a6a7bc96-9f5b-47e2-8260-e556a58fdae3',
            category: 'ইঞ্জিনিয়ারিং',
            price: 390,
            publication: ''

        },
        {
            id: 'b1',
            name: 'Problem Solving and Program Design in C',
            writter: 'Richard C. Dorf',
            image: 'https://firebasestorage.googleapis.com/v0/b/striking-port-331208.appspot.com/o/7.jpg?alt=media&token=87680feb-7575-44fe-ae14-a283177f5c8d',
            category: 'ইঞ্জিনিয়ারিং',
            price: 400,
            publication: ''

        },
        {
            id: 'b1',
            name: 'File System Forensic Analysis 3rd ed',
            writter: 'Brian Carier',
            image: 'https://firebasestorage.googleapis.com/v0/b/striking-port-331208.appspot.com/o/8.jpg?alt=media&token=86419a3a-9ce1-47c8-b0e8-18fcee09d376',
            category: 'ইঞ্জিনিয়ারিং',
            price: 400,
            publication: ''

        },
        {
            id: 'b9',
            name: 'File System Forensic Analysis 3rd ed',
            writter: 'Brian Carier',
            image: 'https://firebasestorage.googleapis.com/v0/b/striking-port-331208.appspot.com/o/8.jpg?alt=media&token=86419a3a-9ce1-47c8-b0e8-18fcee09d376',
            category: 'বাংলা',
            price: 400,
            publication: ''

        },
    ]
    const catebooks = BOOKS.filter(item => props.item === item.category)
    // console.log(props.item);
    // console.log(catebooks);
    // console.log(BOOKS);

    return <BookList items={{ catebooks }} />


}

export default Books
