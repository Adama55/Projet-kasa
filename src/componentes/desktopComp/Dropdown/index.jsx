import React from "react"
import { useState } from "react"
import IconFleche from '../../../assets/IconFleche.svg'
import '../../../styles/Dropdown.css'

function Dropdown ({titre, description}) {
    const [open, setOpen] = useState(false)

    return(
        <div className="dropdown" id={`dropdown-${titre}`}>
            <div className="content-dropdown">
                <h2 className="titre-dropdown">{titre}</h2>
                <a className={`iconFleche-dropdown ${open}`} href={`#dropdown-${titre}`}
                    onClick={
                        () => setOpen(!open)}>
                    <img src= {IconFleche} alt=" icon ouvir ce contenu"/>
                </a>
            </div>
            {
                    open && <div className="description-dropdown"> { description} </div>
            }

        </div>
    )
}

export default Dropdown