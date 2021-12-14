import React from "react"
import { TextField, Typography, Button, Box,Link } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const Details = () => {
    const [value, setValue] = React.useState(new Date());
    return(
        <form className="container text-center">
      <Typography variant="h5" className="my-5">
        Login
      </Typography>
      <TextField
        label="First Name"
        fullWidth
        className="form-input mb-4"
      />
      <TextField
        label="Last name"
        fullWidth
        className="form-input mb-4"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Birth Date"
        fullWidth
        value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        renderInput={(params) => <TextField {...params} />}
      />
      </LocalizationProvider>
      <Button
        variant="contained"
        color="primary"
        fullWidth
      >
        Login
      </Button>
    </form>
    )
}

export default Details;