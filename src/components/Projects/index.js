import React from "react";
import Container from "../Container/index"
// import "./style.css"

const styles = {
    containerStyle: {
        background: "transparent"
    },
    containerFont: {
        fontSize: 22
    }
}

function Projects() {
    return (
        <section style={styles.containerStyle} className="container">
            <p style={styles.containerFont}>
                Here you can check out some of the projects I've made throughout the journey of honing my skills as a full-stack developer! Some of these apps are live, but others are just to demonstrate the skills I've learned. Feel free to check out the repos (and, if you want, fork them), live links, and video walk demos.
                
            </p>

            <div className="card">
  <div className="card-body">
    <h5 className="card-title">Plant-Scout</h5>
    <h6 className="card-subtitle mb-2 text-muted"><i>Let's go for a walk</i></h6>
    <p className="card-text">PlantScout is a JavaScript based application that allows you to explore local plantlife in your region.</p>
    <a href="https://github.com/preussenfahrer/plant-scout" target="_blank" className="card-link">GitHub Repo</a>
    <a href="https://karajsch.github.io/plant-scout/" target="_blank" className="card-link">Deployed Application</a>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Shop-n-Chef</h5>
    <h6 className="card-subtitle mb-2 text-muted"><i>Turn your grocery list into a passport for new adventures!</i></h6>
    <p className="card-text">Shop-n-Chef is a disposable grocery shopping application where you can not just search for the groceries you need, but also get recipes on how to use them.</p>
    <a href="https://github.com/preussenfahrer/shop_n_chef" target="_blank" className="card-link">GitHub Repo</a>
    <a href="https://shop-n-chef.herokuapp.com/" target="_blank" className="card-link">Deployed Application</a>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">PWA Budget Tracker</h5>
    <h6 className="card-subtitle mb-2 text-muted"><i>A budget is telling your money where to go, instead of asking where it went.</i></h6>
    <p className="card-text">Budget-Tracker allows you to add and subtract expenses and monitor your spending, from anywhere, on any device.</p>
    <a href="https://github.com/preussenfahrer/Budget-Tracker" target="_blank" className="card-link">GitHub Repo</a>
    <a href="#https://morning-garden-03578.herokuapp.com/" target="_blank" className="card-link">Deployed Application</a>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Employee Tracker</h5>
    <h6 className="card-subtitle mb-2 text-muted"><i>Build a functional and easy to use directory of employees for your business</i></h6>
    <p className="card-text">Keep track of the employees for your company with this CLI.</p>
    <a href="https://github.com/preussenfahrer/EmployeeTracker" target="_blank" className="card-link">GitHub Repo</a>
    <a href="https://drive.google.com/file/d/1N5VLuZFXxTiVJvBSZp0YQRpF8TYUGmy_/view" target="_blank" className="card-link">Video Demo</a>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Note-Taker</h5>
    <h6 className="card-subtitle mb-2 text-muted"><i>Record your thoughts, tasks or ideas, and reflect on them.</i></h6>
    <p className="card-text">Note-Taker is a simple app where you can make a list of things to do, or jot down random ideas you have throughout your day.</p>
    <a href="https://github.com/preussenfahrer/notetakerapp" target="_blank" className="card-link">GitHub Repo</a>
    <a href="https://drive.google.com/file/d/1oCOtYvZiA653tQ28nJqmp-Obo0222_qJ/view" target="_blank" className="card-link">Video Demo</a>
  </div>
</div>

        </section>

    );
}

export default Projects;