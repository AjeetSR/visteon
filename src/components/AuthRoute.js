import React, { useContext } from "react";
import { Redirect, BrowserRouter, Switch } from "react-router-dom";
import useLoginContext from '../context/LoginContext'
import Home from './Home'
import Login from "./Login";


const AuthRoute = ({ children, ...rest }) => {
    const {isAuthenticated} = useLoginContext()
    console.log("======++++++++")
    
    return (
        <>
        {isAuthenticated.isAuthenticated ? <Redirect to="/home" />: <Redirect push to="/login" />}
        <BrowserRouter>
            <Switch>
            <Login path="/login"/>
            <Home path="/home"/>
            </Switch>
        </BrowserRouter>
        </>
  )
};

export default AuthRoute;