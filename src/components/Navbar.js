import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { SiYourtraveldottv } from "react-icons/si";


const Navbar = () => {

    const [click, setClick] = useState('false');

    function clickHandler(){
        setClick(!click); 
    }

    return (
    
        <nav>
            <div className='nav-logo'>
                <Link to="/">
                    <h2>
                        <SiYourtraveldottv />
                    </h2>
                </Link>
            </div>
            <div className={click ? 'nav-comp' : 'nav-comp active'}>
                <ul>
                    <Link to='/' >
                        <li>Home</li>
                    </Link>

                    <Link to='/services'>
                        <li>Services</li>
                    </Link>
                    <Link to='/products'>
                        <li>Products</li>
                    </Link>
                    <Link to='/aboutUs'>
                        <li>About Us</li>
                    </Link>  

                    <div >
                        <button>Sign Up</button>
                    </div>                  
                </ul>
            </div>

            <div className='ham'>
               <i onClick={clickHandler} className={click ? 'fas fa-bars' : 'fas fa-times'}></i>
            </div>

        </nav>

  )
}

export default Navbar