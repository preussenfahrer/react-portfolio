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
            <h1 class="card-header" style={styles.headingStyle}>I'm Greg Leighton</h1>
            <nav class="navbar navbar-expand-md navbar-dark bg-primary margin-bottom">
                <div class="container-fluid">
                    <a class="navbar-brand">My portfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/react-portfolio"><i>About Me</i>
                                </Link>
                            </li>
                            <li class="nav-item">
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
