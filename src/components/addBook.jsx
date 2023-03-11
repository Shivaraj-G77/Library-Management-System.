import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import '../styles/AddBooks.css'
import Footer from "./footer";

const AddBook = () => {

    let [title, setTitle] = useState("")
    let [pageCount, setpageCount] = useState("")
    let [authors, setauthors] = useState("")
    let [categories, setcategories] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")

    let navigate = useNavigate() // used to navigate between pages

    let handleSubmit = (e) => {

        e.preventDefault() // use to prevent reloding of the site(should pass any parameter in above call back function,eg here passing 'e').
        let data = { title, pageCount, authors, categories, thumbnailUrl }
        fetch("http://localhost:4010/books", {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data) //used to convert the entered data to String

        })
        alert("Book added successfully")

        navigate('/book-list')

    }

    
    return (
        <div className="addBook">
            <Navbar />

            <div className="addMovies">

                <div className="add d-flex justify content center">


                    <div className="forms">


                        <div className="imm">
                            <h1 id="headd2">Add your books to Database</h1>
                        </div>

                        <form action="" onSubmit={handleSubmit}>

                            <h1 id="headd">Fill your Form</h1>

                            <div className="ttle">
                                <label style={{ margin: "0px", padding: "25px" }} htmlFor="">Title:</label>
                                <input required className="add1" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                            </div>

                            {/* <br /> */}


                            <div className="genre">
                                <label style={{ margin: "0px", padding: "6px" }} htmlFor="">PageCount:</label>
                                <input required className="add1" type="text" value={pageCount} onChange={(f) => setpageCount(f.target.value)} placeholder="Enter pageCount" />
                            </div>

                            <br />
                            <div className="rating">
                                <label style={{ margin: "0px", padding: "16px" }} htmlFor="">Authors:</label>
                                <input  className="add1" type="text" value={authors} onChange={(g) => setauthors(g.target.value)} placeholder="Enter authors" />
                            </div>

                            <br />
                            <div className="lang">
                                <label style={{ margin: "0px", padding: "6px" }} htmlFor="">Categories:</label>
                                <input required className="add1" type="text" value={categories} onChange={(e) => setcategories(e.target.value)} placeholder="Enter categories" />
                            </div>
                            <br />

                            <textarea name="enter" cols={"20"} rows={"7"} placeholder="Enter text about your books" ></textarea>

                            <div className="lang">
                                <label style={{ margin: "0px", padding: "9px" }} htmlFor="">Image Url:</label>
                                <input className="add1" type="text" value={thumbnailUrl} onChange={(e) => setthumbnailUrl(e.target.value)} placeholder="Enter images" />
                            </div>



                            <br />
                            <div className="buttonn">
                                <button id="bus1" type="submit">Submit</button>
                            </div>



                        </form>



                    </div>


                </div>

            </div>

            <Footer />
        </div>
    );
}

export default AddBook;