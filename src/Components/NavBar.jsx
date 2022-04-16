
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import {Link } from "react-router-dom"

const Navbar = ()=>{
    
return<AppBar position="relative">
<Toolbar >
<Link to={"/add-city"}><Button variant="contained">add_city</Button></Link>
 <Link to={"/add-country"}> <Button variant="contained">add_country</Button></Link>
 <Link to={"/"}><Button variant="contained">Home</Button></Link>
</Toolbar>
</AppBar>
}


export default Navbar