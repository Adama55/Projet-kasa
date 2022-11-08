import React from "react"


function Thumb({id, image, titre}) {
    
    return(
        <div className="Thumb">
            <img className="Thumb-image" src={image} alt="Thumb"/>
            <div className="Thumb-sombre"></div>
            <span className="Thumb-titre">{titre}</span>
        </div>
    )
}

export default Thumb