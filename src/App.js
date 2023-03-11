import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Admin from './components/admin';
import BookList from './components/booklist';
import AddBook from './components/addBook';
import AddUsers from './components/addUsers';
import UserList from './components/userList';
import ReadBook from './components/readBook';
// import Logsin from './components/logsin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route element={<Login/>} path="/" />

          <Route element={<Admin/>} path="/admin" />
          <Route element={<BookList/>} path="/book-list" />
          <Route element={<AddBook/>} path="add-books"/>
          <Route element={<AddUsers/>} path="/add-user"/>
          <Route element={<UserList/>} path="/user-list"/>
          <Route element={<ReadBook/>} path="/book-list/:id"/>
          {/* <Route element={<Logsin/>} path="/logsin"/> */}

          {/* : is used to specify route parameter */}
          
          <Route />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
