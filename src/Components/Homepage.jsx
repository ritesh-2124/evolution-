import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useState , useEffect } from 'react';
import axios from "axios"

export default function DenseTable() {

    const [rows, setrows] = useState([])
   useEffect(() => {
     country()
   }, []);



       const country = ()=>{
        axios.get("http://localhost:8080/cities").then((result)=>{
            // console.log(result.data)
            setrows([...result.data])
        })
    }




  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , marginTop:"50px" ,border:"1px solid grey" }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Papulation</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delate</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.Population}</TableCell>
              <TableCell align="center">{row.Country}</TableCell>
              <TableCell align="center">{row.City_name}</TableCell>
              <TableCell align="center"><Button>Edit</Button></TableCell>
              <TableCell align="center"><Button>Delate</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}