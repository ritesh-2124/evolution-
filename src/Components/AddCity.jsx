import * as React from 'react';
    import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState , useEffect } from 'react';
import axios from "axios"

    export default function BasicTextFields() {
    const [state, setstate] = useState({
        "City_name":"",
        'Population':"",
        'Country':""
    });
  

   
     const setData = ()=>{
         axios.post("http://localhost:8080/cities" , state).then((res)=>{
             console.log(res.data)
         })
     }
 


   const getdata = (e)=>{
     let {name , value} = e.target;
     setstate({...state , [name]:value})
     console.log(state)
   } 
 
      return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            marginTop:"100px"
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" name="City_name" label="City Name" onChange={getdata} variant="outlined" /><br />
          <TextField id="outlined-basic" name='Population' label="Population" onChange={getdata}  variant="outlined" /> <br /> 
           <TextField id="outlined-basic" name='Country' label="Country" onChange={getdata}  variant="outlined" /><br />
           <Button variant='contained'  onClick={setData}>Add City</Button>
        </Box>
      );
    }
