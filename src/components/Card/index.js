import React from "react";


function Card(props) {
    return (
<div className="card">
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div className="img-container">
            <img src={props.image} />
            </div>
            <h6 className="card-subtitle mb-2 text-muted"><i>{props.subtitle}</i></h6>
            <p className="card-text">{props.description}</p>
            <p className="card-text">{props.github}</p>
            <p className="card-text">{props.link}</p>
            </div>
            </div>
    );
    
}

export default Card;