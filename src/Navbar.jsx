import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="www.google.come">Chirper</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-3">
                    <li className="nav-item mx-3 active">
                        <a className="nav-link" href="www.google.come">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="www.google.come">Popular Chirps</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="www.google.com">Favorite Chirps</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;