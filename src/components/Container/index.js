import React from "react";
import CV from "../../utils/WebDevResume.pdf";
import picture from "../../utils/Profile_pic.jpg";
import "./style.css";
import { Link } from "react-router-dom";


const styles = {
    containerStyle: {
        background: "transparent"
    },
    containerFont: {
        fontSize: 24
    }
}

function Container() {
    return (
        <section className="container-bgr">
            <section style={styles.containerStyle} className="jumbotron jumbotron-fluid">
                <div className="container">
                <p style={styles.containerFont}>
                Hi, there! Thank you for taking the time to look at my portfolio. I'm a professional historian of the Middle Ages and an aspiring Web Developer. Learning new skills, building new bridges, and creating exciting tools are what drives me, personally and professionally. When I am not coding or writing, I hike, read, (try) to run, and fish. Looking for a new project or application that you'd like to see built? Feel free to get in touch with me! 
            </p>
                </div>
            
            <img className="img-fluid img-thumbnail 50x50" src={picture} alt="responsive"></img>
            <div className="d-flex flex-row">
            <Link to={CV} download>R&eacute;sum&eacute;</Link>
            <Link to="mailto:gregjleighton@gmail.com">Email</Link>
            <Link to="https://github.com/preussenfahrer">GitHub</Link>
            <Link to="https://www.linkedin.com/in/greg-leighton-59b411142/">LinkedIn</Link>
            </div>
        </section>
        </section>

    );
}

export default Container;