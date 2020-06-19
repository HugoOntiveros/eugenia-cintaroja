import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo_nav.png';
import cart from '../assets/cart.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light" style={{ background: "purple" }}>
            <Link to="/" className="navnavbar-brand">
                <img src={logo} width="30" height="30" alt="" loading="lazy" />
            </Link>

            <div className=" row justify-content-end">
                <Link to="/" className="nav-link text-light">INICIO</Link>
                <Link to="/container-nosotros" className="nav-link text-light">NOSOTROS</Link>
                <Link to="/products" className="nav-link text-light">PRODUCTOS</Link>
                <Link to="/Form" className="nav-link text-light">CONTACTOS</Link>
                <Link to="/Cart" className="nav-link text-light">
                    <img src={cart} width="30" height="30" alt="" loading="lazy" />
                </Link>
            </div>
        </nav >
    )
}

export default Navbar
