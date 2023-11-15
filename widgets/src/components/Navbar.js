import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui menu">
      <Link className="item" to="/">Accordion</Link> 
  
      <Link className="item" to="/searchbar">Search Bar</Link> 
      
      <Link className="item" to="/dropdown">Dropdown</Link> 

        <Link className="item" to="/translate">Translate</Link>
    </div>
  );
};

export default Navbar;
