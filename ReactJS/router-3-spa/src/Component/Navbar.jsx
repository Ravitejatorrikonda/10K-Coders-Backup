import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        <Link to='/Home' className="nav-link active">Home</Link>
        {/* <a className="nav-link" href="#">Features</a> */}
        <Link to='/Features' className="nav-link active">Features</Link>
        {/* <a className="nav-link" href="#">Pricing</a> */}
        <Link to='/Pricing' className="nav-link active">Pricing</Link>
 
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
