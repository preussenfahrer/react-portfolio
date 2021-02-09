import React from "react";
import "./style.css";



function Card(props) {
    return (
    <div className="card">
        <div className="card-body md-4">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-success"><i>{props.subtitle}</i></h6>
        <a href={props.github} target="_blank" class="btn btn-primary">Click me!</a>   
        </div>
        </div>
    );
    
}

export default Card;