import React, { useState } from "react";
import { TextField, Typography, Button, Box,Link } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import useLoginContext from '../context/LoginContext'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = () => {
const { login } = useLoginContext()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {
    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }else{
        login()
    }
  };

  return (
    <Box className='mx-auto'
    sx={{
      width: 400,
    }}
  >
    <form className="container text-center">
      <Typography variant="h5" className="my-5">
        Login
      </Typography>
      <TextField
        label="Email"
        error={!email&&error}
        fullWidth
        className="form-input mb-4"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        error={!password&&error}
        fullWidth
        className="form-input mb-4"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className="d-flex mb-3">
        <Link href="#" underline="hover">
            Recover password
        </Link>
        <Link style={{flex:"auto"}} className="text-end" href="#" underline="hover">
            Sign-up
        </Link>
      </div>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={submitForm}
      >
        Login
      </Button>

      {error && (
        <Alert severity="error" onClick={() => setError("")}>
          { error}
        </Alert>
      )}
    </form>
    </Box>
  );
}

export default Login;
// import React from "react"
// import {TextField,Box} from '@mui/material'

// const Login = () => {

//     return(
//         <Box>
//             <div>
//             <TextField
//           error={false}
//           id="email"
//           label="Email"
//           defaultValue="Hello World"
//           helperText={`${true?"":"Incorrect entry."}`}
//         />
//         </div>
//         <div>
//         <TextField
//           error
//           id="password"
//           label="Password"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//         />
//         </div>
//         </Box>
//     )
// }

// export default Login;