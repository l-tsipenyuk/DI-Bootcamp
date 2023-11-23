import { useState, useEffect } from "react";

const Books = (props) => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
    }, []);

    const searchBook = async () => {
        const apiKey = 'AIzaSyD3_CkGmK5_Dn6X-0Z5ItWpcKJoq4_LtKc';
        const apiURL = `https://www.googleapis.com/books/v1/volumes?q=%22${search}%22&key=${apiKey}`

        try {
            const res = await fetch(apiURL);
            const data = await res.json();
            setBooks(data.items || []);
            console.log(data.items[0].volumeInfo)

        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>

            <h1>Book Cards</h1>
            <div id="searchDiv">
                <input onChange={(e) => setSearch(e.target.value)} placeholder="Type a book..."/>
                <button id="searchButton" onClick={searchBook}>Search</button>
            </div>
            <div className="container">
                {books.map(item => {
                    return (
                        <div className="bookCard" key={item.id}>
                            <img src={item.volumeInfo.imageLinks.thumbnail} />
                            <h5>{item.volumeInfo.title}</h5>
                            {/* <h5>{item.volumeInfo.subtitle}</h5> */}
                            <h4>Published: {item.volumeInfo.publishedDate.slice(0,4)}</h4>
                            <h4>Authors: {item.volumeInfo.authors}</h4>
                        </div>
                    )
                })}
            </div>
        </>
    )
};

export default Books;


