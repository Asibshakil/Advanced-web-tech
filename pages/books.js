import Head from 'next/head';
import Image from 'next/image';
import MyLayout from "./component/layout"

const Books = () => {
    const books = [
        {
            id: 1,
            title: 'Himu',
            author: 'Humayun Ahmed',
            imageUrl: '/images/himu.jpg',
            price: 120,
        },
        {
            id: 2,
            title: 'Padma Nodir Majhi',
            author: 'Manik Bondopaddhay',
            imageUrl: '/images/padma.jpg',
            price: 220,
        },
        {
            id: 3,
            title: 'Pother Pachali',
            author: 'Bivutivushon Bondopaddhay',
            imageUrl: '/images/Pother.jpg',
            price: 320,
        },
    ];

    return (
        <div>
            <MyLayout title="Books" />
            <h1>Books</h1>
            {books.map((book) => (
                <div key={book.id}>
                    <Image
                        src={book.imageUrl}
                        alt={book.title}
                        width={300}
                        height={300}
                    />
                    <h2>{book.title}</h2>
                    <p>Author: {book.author}</p>
                    <p>Price: {book.price} BDT</p>
                </div>
            ))}
        </div>
    );
};

export default Books;
