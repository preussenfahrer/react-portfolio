import React from "react";
// import "./style.css"

const styles = {
    containerStyle: {
        background: "red"
    },
    containerFont: {
        fontSize: 100
    }
}

function Header() {
    return (
        <section style={styles.containerStyle} className="container">
            <p>
                My name is Greg Leighton. In addition to being a professional historian of the Middle Ages, I am also a Web Developer. One of the things that I enjoy most is learning new skills, making new contacts, and building exciting, engaging, and accessible tools for people. I'm currently a certification in Full Stack Web Development from the University of Pennsylvania. When I am not coding, I love to hike, to read, (try) to run, and to fish. Looking for a new project or application that you'd like to see built? Feel free to get in touch with me! 
            </p>
            
        </section>

    );
}

export default Header;