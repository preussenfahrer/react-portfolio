import React from "react";

function Card(props) {
    return (
<div className="card">
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <img alt={props.name} src={props.image}></img>
            <h6 className="card-subtitle mb-2 text-muted"><i>{props.subtitle}</i></h6>
            <p className="card-text">{props.description}</p>
            </div>
            </div>
    );
    
}

export default Card;