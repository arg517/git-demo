import React from 'react';
import { Link } from 'react-router-dom';

let Navbar = () => {
    return (
        <>
           <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div className='container'>
                    <Link to={'/'} className='navbar-brand'>
                        <i className='fa fa-mobile text-warning' /> Contact
                        <span className='text-warning'> Logs</span> </Link>
                </div>
           </nav>
        </>
    )
}

export default Navbar;