import React from "react";
// import "./style.css"

const styles = {
    headerStyle: {
        background: "red"
    },
    headingStyle: {
        fontSize: 100
    }
}

function Header() {
    return (
        <header style = {styles.headerStyle} className="header">
            <h1 style={styles.headerStyle}>I'm Greg Leighton</h1>
            <div className = "links">
                <a href = "/">Home</a>
            </div>
        </header>
    );
}

export default Header;
