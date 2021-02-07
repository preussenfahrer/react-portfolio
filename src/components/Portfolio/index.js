import React from "react";
// import "./style.css"

const styles = {
    containerStyle: {
        background: "transparent"
    },
    containerFont: {
        fontSize: 100
    }
}

function Container() {
    return (
        <section style={styles.containerStyle} className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand"><i>My portfolio</i></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Qualifications and CV</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <p>
                Here you can find a list of selected projects I've made while honing my skills as a full-stack Web Developer. 
            </p>

        </section>

    );
}

export default Container;