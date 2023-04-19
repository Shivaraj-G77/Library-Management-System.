import Navbar from "./navbar";
import "../styles/ReadBook.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./footer";



// USED TO GET PARAMETERS FROM URL/ROUTE

const ReadBook = () => {
    let [book, setBook] = useState([])

    let params = useParams()  //used to fetch id from url or route
    // console.log(params);   
    //params will store an object from server or url, so while using we should use objname.key to get the value from obj.
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4010/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    })
    return (
        <div className="readbook">
            <Navbar />



            <div className="man">

                <div className="fig1">

                    <div className="ig">
                        <img height={"400px"} width={"250px"} src={book.thumbnailUrl} alt="" />
                    </div>

                    <div className="lnes">
                        <h1>Title:{book.title}</h1>
                        <h3>Authors:{book.authors}</h3>
                        <br />
                        <h4>SD:{book.shortDescription}</h4>
                        <br />
                        <h4>LD:{book.longDescription}</h4>
                    </div>
                </div>



            </div>



            <Footer />
        </div>
    );
}

export default ReadBook;