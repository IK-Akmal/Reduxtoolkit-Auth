import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Logout } from '../../store/userAuthSlice';


function Home() {

    const history = useHistory();
    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(Logout())
        history.push('/');
    }

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={handleLogout} className="btn btn-primary" type="button">Logout</button>
        </div>
    )
}

export default Home
