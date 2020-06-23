import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: "Road to Learn React",
            author: 'Robert Wieruch'
        },
        {
            id: 2,
            title: "Road to Learn React",
            author: 'Robert Wieruch'
        }
    ]
    return (
        <BookList books={books} />
    );
};

export default HomePage;