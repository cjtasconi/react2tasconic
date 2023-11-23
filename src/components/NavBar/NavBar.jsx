import React from 'react'
import {CartWidget} from '../CartWidget/CartWidget'
import { NavLogo } from '../NavLogo/NavLogo';
import {Link}  from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'> <NavLogo></NavLogo> </Link>
                <Link to='/' className="navbar-brand text-white">GAME OVER</Link>
                <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto" >
                    <li className="nav-item">
                        <Link to="/categoria/ps4" className="nav-link text-white">Ps4</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categoria/ps5" className="nav-link text-white">Ps5</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categoria/xbox" className="nav-link text-white">Xbox</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categoria/nintendo" className="nav-link text-white">Nintendo</Link>
                    </li>
                </ul>
            </div>
            <Link className="navbar-brand text-white" to='cart'> <CartWidget></CartWidget> </Link>
            </div>
    </nav>   
    </div>
  )
}
