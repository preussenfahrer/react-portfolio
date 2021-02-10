import React from "react";
import { Link } from "react-router-dom";

const styles = {
    headerStyle: {
        background: "transparent"
    },
    headingStyle: {
        background: "transparent",
        fontSize: 44
    }
}

function Header() {
    return (
        <header style={styles.headerStyle} className="header margin-bottom">
            <h1 className="card-header" style={styles.headingStyle}>I'm Greg Leighton</h1>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary margin-bottom">
                <div className="container-fluid">
                    <Link to="/react-portfolio" className="navbar-brand">My portfolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/react-portfolio"><i>About Me</i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Projects"><i>Project Portfolio</i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
