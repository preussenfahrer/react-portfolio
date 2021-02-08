import React from "react";
import CV from "../../utils/WebDevResume.pdf"
// import "./style.css"

const styles = {
    containerStyle: {
        background: "transparent"
    },
    containerFont: {
        fontSize: 22
    }
}

function Container() {
    return (
        <section style={styles.containerStyle} className="jumbotron justify-content-center bg-dark w-75 p-3">
            <p style={styles.containerFont}>
                Hi, there! Thank you for taking the time to look at my portfolio. I'm a professional historian of the Middle Ages and aspiring Web Developer. Learning new skills, building new bridges, and creating exciting, engaging, and accessible tools for people are what drives me, personally and professionally. When I am not coding or writing, I hike, read, (try) to run, and fish. Looking for a new project or application that you'd like to see built? Feel free to get in touch with me! 
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-center">
            <a className="px-2" href={CV} download>R&eacute;sum&eacute;</a>
            <a className="px-2" href="mailto:gregjleighton@gmail.com">Email</a>
            <a className="px-2" href="https://github.com/preussenfahrer">GitHub</a>
            <a className="px-2" href="https://www.linkedin.com/in/greg-leighton-59b411142/">LinkedIn</a>
            </div>
        </section>

    );
}

export default Container;