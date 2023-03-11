import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../styles/UserList.css"
import Footer from "./footer";

const UserList = () => {

    let [users, setusers] = useState([])

    useEffect(() => {

        let fetchData = async () => {

            let response = await fetch("http://localhost:4010/users")
            let data = await response.json()
            setusers(data)


        }
        fetchData()
    })
    let deleteUser = (id, firstName) => {
        fetch(`http://localhost:4010/users/${id}`, {
            method: 'DELETE'
        })
        alert(`${firstName} will be deleted permanently`)
    }

    return (
        <div className="userlist">
            <Navbar />


            <div className="users-list">
                <h1 id="hd1">USER LIST</h1>

                {users.map((data) => (

                    <div className="mData">

                        <div className="f11">

                            <div className="round">
                                <h1 id="rnd">{data.firstName.charAt(0)}</h1>
                            </div>

                            <div className="lis">
                                <h2>Name:{data.firstName} {data.lastName}</h2>
                                <h4>Email:{data.email}</h4>
                                <h4>Contact:{data.contact}</h4>
                            </div>
                            
                            <br />
                            <br />
                            <div className="butnL">

                                {/* <Link to={`/book-list/${data.id}`} id="bsk">Read More</Link> */}

                                <button id="bus4" onClick={() => deleteUser(data.id, data.firstName)}>Delete</button>
                            </div>


                        </div>


                    </div>





                ))}
            </div>



<Footer/>
        </div>
    );
}

export default UserList;