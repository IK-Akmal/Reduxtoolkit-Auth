import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Authentication from './Page/authentication/Authentication';
import Home from './Page/Home/Home'
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.userAuth.isAuth);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route
          path="/home"
          component=
          {
            ({ location }) =>
              isAuth ?
                <Home />
                :
                <Redirect to=
                  {
                    {
                      pathname: "/",
                      state: { from: location }
                    }
                  }
                />
          }
        />
      </Switch>

    </div>
  );
}

export default App;
