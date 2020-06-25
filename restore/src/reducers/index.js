const initialState = {
    books: [
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
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };

        default:
            return state;
    }
};

export default reducer;