import React from "react"
import '../../../styles/Banner.css'

function Banner({image, texte}) {
    return(
        <div className="banner">
            <img className="banner-image" src={image} alt="bannière"/>
            <div className="banner-ombre"></div>
            <span className="banner-text">{texte}</span>
        </div>
    )
}

export default Banner