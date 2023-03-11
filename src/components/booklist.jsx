import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../styles/Booklist.css"
import Footer from "./footer";

const BookList = () => {

    let [books, setBooks] = useState([])

    useEffect(() => {

        let fetchData = async () => {

            let response = await fetch("http://localhost:4010/books")
            let data = await response.json()
            setBooks(data)


        }
        fetchData()
    })

    // let remove = (id, title) => {
    //     let result = books.filter(x => x.id !== id)
    //     setBooks(result)
    //     alert(`${title} will be removed from BookList`)
    // } 

    let deleteBook = (id, title) => {
        fetch(`http://localhost:4010/books/${id}`, {
            method: 'DELETE'
        })
        alert(`${title} will be deleted permanently`)
    }

    return (
        <div className="BookList">
            <Navbar />

            <div className="books-list">
                <h1 id="hd1">BOOKS LIST</h1>

                {books.map((data) => (

                    <div className="moviesData">

                        <div className="f1">

                            <div className="bi">
                                <img height={"400px"} width={"250px"} src={data.thumbnailUrl} alt="" />
                            </div>

                            <div className="lines">
                                <h1>Title:{data.title}</h1>
                                <h2>PageCount:{data.pageCount}</h2>
                                <h4>Written by:{data.authors}</h4>
                                <h4>Category:{data.categories}</h4>
                            </div>
                        </div>
                        <div className="buttonn">
                            {/* <button>Read More</button> */}
                            <Link to={`/book-list/${data.id}`} id="bsk">Read More</Link>
                            <button id="bus3" onClick={() => deleteBook(data.id, data.title)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default BookList;