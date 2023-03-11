import Navbar from "./navbar";
import "../styles/AddUsers.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { useRef } from "react";
// useRef used to access dom elements directly

const AddUsers = () => {

    // let [fn, setFn] = useState("")
    // let [ln, setLn] = useState("")
    // let [email, setEmail] = useState("")
    // let [contact, setContact] = useState("")

    let navigate = useNavigate()

    // let handleSubmit = (e) => {

    //     e.preventDefault()
    //     let data = { fn, ln, email, contact }
    //     fetch("http://localhost:4010/books", {
    //         method: 'POST',
    //         headers: { 'content-Type': 'application/json' },
    //         body: JSON.stringify(data)

    //     })
    //     alert("User added successfully")

    //     navigate('/user-list')

    // }

    let firstName = useRef(null)
    let lastName = useRef(null)
    let email = useRef(null)
    let contact = useRef(null)

    let addUser = (e) => {

        e.preventDefault()



        let data =
         {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            contact: contact.current.value
        }
        fetch(" http://localhost:4010/users", {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data)

        })
        alert("User added successfully")

        navigate('/user-list')

    }


    return (
        <div className="addUser">
            <Navbar />

            <div className="addMovies">

                <div className="add d-flex justify content center">


                    <div className="formms">

                        {/* <form action="" onSubmit={handleSubmit} > */}

                        <form action="" onSubmit={addUser} >

                            <h1 id="h0" style={{ marginBottom: "30px" }} >Fill your Form</h1>

                            <div className="ttle">
                                <label style={{ margin: "0px", padding: "10px" }} htmlFor="">Name:</label>
                                {/* <input required className="add12" type="text" value={fn} onChange={(e) => setFn(e.target.value)} placeholder="Enter First Name" /> */}
                                <input ref={firstName} required className="add12" type="text" placeholder="Enter First Name" />

                                <label style={{ margin: "0px", padding: "9px" }} htmlFor=""></label>
                                {/* <input style={{ margin: "0px", padding: "0px" }} className="add12" type="text" value={ln} onChange={(f) => setLn(f.target.value)} placeholder="Enter Last name" /> */}
                                <input ref={lastName} style={{ margin: "0px", padding: "0px" }} className="add12" type="text" placeholder="Enter Last name" />

                            </div>
                            <br />

                            {/* <div className="genre">
                                <label style={{ margin: "0px", padding: "9px" }} htmlFor="">Last Name:</label>
                            </div> */}

                            <div className="rating">
                                <label style={{ margin: "0px", padding: "7px" }} htmlFor="">Email:</label>
                                {/* <input required className="add12" type="text" value={email} onChange={(g) => setEmail(g.target.value)} placeholder="Enter Email" /> */}
                                <input ref={email} required className="add12" type="text" placeholder="Enter Email" />

                            </div>

                            <br />
                            <br />
                            <div className="lang">
                                <label style={{ margin: "0px" }} htmlFor="">Contact:</label>
                                {/* <input required className="add12" type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact Details" /> */}
                                <input ref={contact} required className="add12" type="text" placeholder="Enter Contact Details" />

                            </div>
                            <br />




                            <br />
                            <div className="butn">
                                <button id="bus2" type="submit">Submit</button>
                            </div>



                        </form>



                    </div>


                </div>

            </div>


            <Footer />
        </div>

    );
}

export default AddUsers;