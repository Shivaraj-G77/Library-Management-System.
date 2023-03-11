import { Link } from "react-router-dom";
import '../styles/Gnavbar2.css'

const Gnavbar2 = () => {
    return (
        <div className="navvbar1">

            {/* <div className="logo">
                <img src="/images/karlogo.png" alt="" />
            </div> */}

            <div className="linksz">
                <ul>
                    <li className="fk1"><Link to="/admin">Home</Link>  </li>
                    <li className="fk2"><Link to="/book-list">Book List</Link>  </li>
                    <li className="fk3"><Link to="/user-list">User List</Link>  </li>
                    <li className="fk4"><Link to="/add-books">Add Books</Link>  </li>
                    <li className="fk5"><Link to="/add-user">Add User</Link>  </li>
                    <li className="fk6"><Link to="/">LogOut</Link>  </li>
                    {/* <li><Link to="/logsin">Logsinn</Link>  </li> */}
                </ul>
            </div>


        </div>
    );
}

export default Gnavbar2;