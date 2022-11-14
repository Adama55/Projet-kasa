import React from "react"
import '../../../styles/Tag.css'

function Tag({nom}) {
    return(
        <span className="sl-tag">{nom}</span>
    )
}

export default Tag