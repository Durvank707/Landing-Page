import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
    <div className='navbar'>
        <nav className='nav-main'>
            <div className='nav-logo'>
                <Link>
                    <h2>Title</h2>
                </Link>
            </div>
            <div className='nav-comp'>
                <ul className='nav-list'>
                    <Link to='/' >
                        <li>Home</li>
                    </Link>

                    <Link to='/'>
                        <li>Services</li>
                    </Link>
                    <Link to='/'>
                        <li>Products</li>
                    </Link>
                    <Link to='/'>
                        <li>About Us</li>
                    </Link>                    
                </ul>
            </div>
            <div className='nav-button'>
                <button>Sign Up</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar