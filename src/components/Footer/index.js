import React from "react";
// import "./style.css"

const styles = {
    footerStyle: {
        background: "red"
    },
    footerFont: {
        fontSize: 100
    }
}

function Footer() {
    return (
        <footer style = {styles.headerStyle} className="footer">
            <h1 style={styles.headingStyle}>Greg Leighton</h1>
        </footer>
    );
}

export default Footer;