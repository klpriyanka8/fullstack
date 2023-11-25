
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import axios from 'axios'
import Homepage from './components/Homepage'
import Addcustomer from './components/Addcustomer'
import Displaycustomer from './components/Displaycustomer'
import Updatecustomer from './components/Updatecustomer'
import Searchcustomer from './components/Searchcustomer'
import Deletecustomer from './components/Deletecustomer'

function App() {
  axios.defaults.baseURL='http://localhost:5000'
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' exact element={<Homepage/>}/>
            <Route path='/addcustomer' exact element={<Addcustomer/>}/>
            <Route path='/displaycustomer' exact element={<Displaycustomer/>}/>
            <Route path='/updatecustomer' exact element={<Updatecustomer/>}/>
            <Route path='/searchcustomer' exact element={<Searchcustomer/>}/>
            <Route path='/deletecustomer' exact element={<Deletecustomer/>}/>
          </Routes>
        </Router>
        
    </div>
        
   
  );
}

export default App;
