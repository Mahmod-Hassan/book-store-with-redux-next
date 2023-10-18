'use client'
import { useEffect, useState } from "react";
import Card from "./Card";

const AllCard = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () =>{
            const res = await fetch('http://localhost:4000/books');
            const data = await res.json();
            setBooks(data)
        }
        fetchBooks();
    },[])
    return(
        <div className="grid grid-cols-2 gap-5">
            {
                books.map(book => <Card key={book.id} book={book}/>)
            }
        </div>
    )
}
export default AllCard;
