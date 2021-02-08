import React from "react";
import CV from "../../utils/WebDevResume.pdf"
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
            <p>
                Hi! My name is Greg. In addition to being a professional historian of the Middle Ages, I am also a Web Developer. One of the things that I enjoy most is learning new skills, making new contacts, and building exciting, engaging, and accessible tools for people. I'm currently pursuing a certification in Full Stack Web Development from the University of Pennsylvania. When I am not coding, I love to hike, to read, (try) to run, and to fish. Looking for a new project or application that you'd like to see built? Feel free to get in touch with me! 
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-center">
    <a className="px-2" href={CV} download>CV</a>
    <a className="px-2" href="mailto:gregjleighton@gmail.com">Email</a>
    <a className="px-2" href="https://github.com/preussenfahrer">GitHub</a>
    <a className="px-2" href="https://www.linkedin.com/in/greg-leighton-59b411142/">LinkedIn</a>
    </div>

        </section>

    );
}

export default Container;