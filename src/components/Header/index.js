import React from "react";
// import "./style.css"

const styles = {
    headerStyle: {
        background: "transparent"
    },
    headingStyle: {
        fontSize: 100
    }
}

function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            <h1 class="card-header" style={styles.headerStyle}>I'm Greg Leighton</h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">My portfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/"><i>About Me</i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Projects"><i>Project Portfolio</i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i>Qualifications & CV</i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
