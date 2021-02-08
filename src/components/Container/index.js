import React from "react";
import CV from "../../utils/WebDevResume.pdf";
import picture from "../../utils/Profile_pic.jpg"
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
        <section style={styles.containerStyle} className="jumbotron col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-sm-center bg-dark">
            <p style={styles.containerFont}>
            {/* <img className="img-fluid img-thumbnail 50x50" src={picture} alt="responsive"></img> */}
                Hi, there! Thank you for taking the time to look at my portfolio. I'm a professional historian of the Middle Ages and an aspiring Web Developer. Learning new skills, building new bridges, and creating exciting tools are what drives me, personally and professionally. When I am not coding or writing, I hike, read, (try) to run, and fish. Looking for a new project or application that you'd like to see built? Feel free to get in touch with me! 
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-center">
            <a className="px-2" target="_blank" href={CV} download>R&eacute;sum&eacute;</a>
            <a className="px-2" target="_blank" href="mailto:gregjleighton@gmail.com">Email</a>
            <a className="px-2" target="_blank" href="https://github.com/preussenfahrer">GitHub</a>
            <a className="px-2" target="_blank" href="https://www.linkedin.com/in/greg-leighton-59b411142/">LinkedIn</a>
            </div>
        </section>

    );
}

export default Container;