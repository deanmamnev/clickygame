import React from 'react';
import "./ImageCard.css";



const ImageCard = props => (

    

    <div
    className="notCard col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
    key={props.id}
    style = {{backgroundImage: 'url(' + props.image + ')'}}
    onClick={() => props.handleClick(props.id, props.clicked)}
    
    >
    </div>
);

export default ImageCard;