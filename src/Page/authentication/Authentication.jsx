import { useState } from 'react';
import logo from '../../img/logo.png';
import "./Authentication.css";
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../store/userAuthSlice';
import { useHistory } from 'react-router';


export default function Authentication() {

    const [login, setlogin] = useState("");
    const [pass, setpass] = useState("");

    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.userAuth.isAuth);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(Login({
            login,
            pass,
        }))
        if (isAuth) {
            history.push("/home");
        }
    }

    return (
        <div className="backGround">
            <div className="auth-card">
                <div className="side-1">

                </div>
                <div className="side-2">
                    <img className="auth-logo" src={logo} alt="" />
                    <form onSubmit={event => handleSubmit(event)} className="auth-form" action="">

                        <div className="form-floating">
                            <input value={login} onChange={(e) => setlogin(e.target.value)} className="form-control" required id="Login" type="text" placeholder="Login" />
                            <label htmlFor="Login">Login</label>
                        </div>

                        <div className="form-floating">
                            <input value={pass} onChange={(e) => setpass(e.target.value)} className="form-control" required id="Password" type="password" placeholder="Password" />
                            <label htmlFor="Password">Password</label>
                        </div>
                        <button className="btn btn-primary" type="submit">LOGIN</button>
                    </form>
                </div>
            </div>

        </div>
    )
}