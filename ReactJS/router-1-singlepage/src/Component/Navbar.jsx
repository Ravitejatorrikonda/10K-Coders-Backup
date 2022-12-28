import { Link } from "react-router-dom"
import React from "react"

const Navbar1 = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">single page application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link to='/' className="nav-link">Home</Link> 
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link active" href="#">Features</a> */}
                                <Link to='/Features' className="nav-link">Features</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link active" href="#">Pricing</a> */}
                                <Link to='/Pricing' className="nav-link">Pricing</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link active">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar1