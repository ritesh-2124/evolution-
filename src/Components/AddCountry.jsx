import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
export default function AddCountry() {
  const [state, setstate] = useState({});


   const getdata = (e)=>{
     let {name , value} = e.target;
     setstate({...state ,[name]:value});
     console.log(state)
   }

  const setData = () => {
    axios.post("http://localhost:8080/country", state).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        marginTop: "100px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Country Name" name="country" onChange={getdata} variant="outlined" />
      <br />
      <Button variant="contained" onClick={setData}>Add City</Button>
    </Box>
  );
}
