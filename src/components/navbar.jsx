import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="logo">
                <img src="/images/karlogo.png" alt="" />
            </div>

            <div className="links">
                <ul>
                    <li><Link to="/admin">Home</Link>  </li>
                    <li><Link to="/book-list">Book List</Link>  </li>
                    <li><Link to="/user-list">User List</Link>  </li>
                    <li><Link to="/add-books">Add Books</Link>  </li>
                    <li><Link to="/add-user">Add User</Link>  </li>
                    <li><Link to="/">LogOut</Link>  </li>
                    {/* <li><Link to="/logsin">Logsinn</Link>  </li> */}
                </ul>
            </div>


        </div>
    );
}

export default Navbar;