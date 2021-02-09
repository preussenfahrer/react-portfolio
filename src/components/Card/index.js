import React from "react";


function Card(props) {
    return (
<div className="card">
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div className="img-container">
            <img alt={props.name} src={props.image} />
            </div>
            <h6 className="card-subtitle mb-2 text-muted"><i>{props.subtitle}</i></h6>
            <a href={props.github} target="_blank" class="btn btn-primary">Click me!</a>
            
            </div>
            </div>
    );
    
}

export default Card;