
import './App.css';
import  BasicTextFields from './Components/AddCity';
import  AddCountry  from './Components/AddCountry';
import { Route, Routes } from 'react-router';
import Navbar from "./Components/NavBar.jsx";
import DenseTable from "./Components/Homepage.jsx"
function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <Routes>
    <Route path='/' element={<DenseTable/>}/>
    <Route path='/add-country'  element={<AddCountry/>} />
    <Route path='/add-city' element={<BasicTextFields/>} />
    </Routes>
    </div>
  );
}

export default App;
