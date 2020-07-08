export default class Bookstoreservice {
    data = [
        {
            id: 1,
            title: "Road to Learn React",
            author: 'Robert Wieruch',
            price: 32,
            coverImage: 'https://www.kodges.ru/uploads/posts/2018-08/1534871606_the-road-to-learn-react.jpg'
        },
        {
            id: 2,
            title: "Road to Learn React",
            author: 'Robert Wieruch',
            price: 32,
            coverImage: 'https://www.kodges.ru/uploads/posts/2018-08/1534871606_the-road-to-learn-react.jpg'
        }
    ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Smth bad happene...'))
                } else {
                    resolve(this.data)
                }
            }, 700);
        });
    }
};