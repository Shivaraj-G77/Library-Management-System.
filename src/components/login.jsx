import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'
const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate()

    let submit = (e) => {
        e.preventDefault()

        if (email == "admin@gmail.com" && password == 12345) {
            navigate('/admin')
        } else {
            alert('Invalid credentials')
        }

    }

    return (

        <div className="main">

            {/* <div className="login">


                <div className="img">
                    <img  width={"320px"} height={"493px"} src="/images/L11.jpg" alt="" />
                </div>


                <div className="login_form">

                    <h1>LOGIN</h1>
                    <br />
                    <br />

                    <form action="" onSubmit={submit}>


                        <div className="d1">

                            <label htmlFor="">Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" />

                        </div>

                        <br />
                        <br />

                        <div className="d2">

                            <label htmlFor="">Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />

                        </div>

                        <br />

                        <div className="buton">

                            <button>Login</button>

                        </div>

                    </form>

                </div>
            </div> */}



            <section>
                <div className="form-box">

                    <div className="form-value">
                        
                        <form action="" onSubmit={submit}>

                            <h2 id="hs2">Login</h2>

                            <div className="inputbox">

                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" />

                                <label htmlFor="">Email</label>

                            </div>

                            <div className="inputbox">

                                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />

                                <label htmlFor="">Password</label>

                            </div>

                            <button id="bs1">Log in</button>

                        </form>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default Login;