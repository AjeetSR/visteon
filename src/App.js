import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Navigate,
  useHistory,
  useLocation,
  useNavigate,
  Routes,
  Redirect
} from "react-router-dom";
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import AuthRoute from './components/AuthRoute'
import useLoginContext,{LoginProvider} from './context/LoginContext';


function App() {
  const {isAuthenticated} = useLoginContext()
  const history = useHistory()


  return (
    <LoginProvider>

      <Router>
          <Header/>
            {/* <AuthRoute path="/login" component={Login} >
              <Login />
            </AuthRoute> */}


            <AuthRoute path="/"  >
            </AuthRoute>
           

            

      </Router>
      </LoginProvider>

    // <div>
    //   <Header/>
    //   <Login/>
    //   <Home/>
    // </div>
  );
}

export default App;
