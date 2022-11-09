import React from "react"
import '../../../styles/Thumb.css'


function Thumb({id, image, titre}) {
    
    return(
        <div className="thumb" id={id}>
            <img className="thumb-image" src={image} alt="Thumb"/>
            <div className="thumb-ombre"></div>
            <span className="thumb-titre">{titre}</span>
        </div>
    )
}

export default Thumb