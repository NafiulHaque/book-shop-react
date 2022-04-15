import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-sm bg-white navbar-white">
            <div className='row'>
                <div className='col-md-4 col-sm-4 col-lg-4'>
                    <NavLink to="/">
                        <strong><a className="navbar-brand ml-3 hvr-grow " href="./index.html">
                            <h1>Book Shop.</h1>
                        </a></strong>
                    </NavLink>
                </div>
                <div className='col-md-4 col-sm-4 col-lg-4'>
                    <form className="form-inline m-auto" action="/action_page.php">
                        <input className="form-control mr-sm-2 wi" type="text" placeholder="Search"></input>
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
                <div className='col-md-4 col-sm-4 col-lg-4'>
                    <div className="mr-3">
                        <NavLink to="/createaccount" >
                            <a href="./Creat an account .html">
                                <i className="fas fa-shopping-cart hicon mx-3 hvr-buzz" data-toggle="tooltip" title="cart"></i></a>
                        </NavLink>
                        <NavLink to="/createaccount" >
                            <a href="./Creat an account .html">
                                <i className="fas fa-user-alt hicon hvr-pulse " data-toggle="tooltip" title="Profile"></i></a>
                        </NavLink>
                    </div>
                </div>
            </div>

        </nav >

    )
}

export default Navbar

