import React from "react";
import Card from "../Card/index";
import projects from "../../projects.json"
import "./style.css";

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
                Here you can check out some of the projects I've made while honing my skills as a full-stack developer! Feel free to check out the repos (and, if you want, fork them), live links, and video demos.
                
            </p>
          <Card 
          name={projects[0].name}
          subtitle={projects[0].subtitle}
          description={projects[0].description}
          />
          <Card 
          name={projects[1].name}
          subtitle={projects[1].subtitle}
          description={projects[1].description}
          />
          <Card 
          name={projects[2].name}
          subtitle={projects[2].subtitle}
          description={projects[2].description}
          />
          <Card 
          name={projects[3].name}
          subtitle={projects[3].subtitle}
          description={projects[3].description}
          />
          <Card 
          name={projects[4].name}
          subtitle={projects[4].subtitle}
          description={projects[4].description}
          />
          <Card 
          name={projects[5].name}
          subtitle={projects[5].subtitle}
          description={projects[5].description}
          />
        </section>
      );
}

export default Projects;