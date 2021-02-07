import React from "react";
// import "./style.css"

const styles = {
    footerStyle: {
        background: "transparent"
    },
    footerFont: {
        fontSize: 15
    }
}

function Footer() {
    return (
        <footer style = {styles.footerStyle} className="footer">
            <h1 style={styles.footerFont}>Greg Leighton</h1>
            
        </footer>
    );
}

export default Footer;