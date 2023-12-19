import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css";

export default function Navbar(props) {
 
  return (
 <div className="navbar">
    <div className="links">
      <Link to="/"> Shop </Link>
      <Link to="/contact"> Contact </Link>
      <Link to="/cart">
        <ShoppingCart size={30}  />
      </Link>
    </div>
  </div>
  )
}
