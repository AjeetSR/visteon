import React from "react"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import useLoginContext from '../context/LoginContext'

const Header = () => {

    const {isAuthenticated, login, logout} = useLoginContext()
    console.log("=====",isAuthenticated);

    return(
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          {!isAuthenticated.isAuthenticated&&<Button className="text-capitalize" color="inherit" onClick={login}>Login</Button>}
          {isAuthenticated.isAuthenticated&&<Button className="text-capitalize" color="inherit" onClick={logout}>Logout</Button>}
        </Toolbar>
      </AppBar>
    )
}

export default Header;