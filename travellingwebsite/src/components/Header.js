import React from 'react'
import { Link } from 'react-router-dom';
export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="textofnav text-light">
          <div className="mainheading">
            <strong>{props.mainHeading}</strong>
          </div>
          <div className="subHeadingofnav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
             <Link to="/policies">Policies</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
