import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Homepage=()=>{
    return(
        <div>
            <h2>Company Data</h2>
            <nav>
                <ul>
                    <li><Link to='/addcustomer'>Addcustomer</Link></li>
                    <li><Link to='/displaycustomer'>Displaycustomer</Link></li>
                    <li><Link to='/updatecustomer'>Updatecustomer</Link></li>
                    <li><Link to='/searchcustomer'>Searchcustomer</Link></li>
                    <li><Link to='/deletecustomer'>Deletecustomer</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Homepage;