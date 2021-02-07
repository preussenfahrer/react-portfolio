import React from "react";
import Container from "../Container/index"
// import "./style.css"

const styles = {
    containerStyle: {
        background: "transparent"
    },
    containerFont: {
        fontSize: 100
    }
}

function Projects() {
    return (
        <section style={styles.containerStyle} className="container">
            <p>
                Here you can check out some of the projects I've made throughout the journey of honing my skills as a full-stack developer! 
            </p>

        </section>

    );
}

export default Projects;