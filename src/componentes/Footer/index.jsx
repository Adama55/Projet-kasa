import React from "react"
import LogoFooter from '../../assets/LogoFooter.png'
import '../../styles/Footer.css'


function Footer() {
    return (
        <footer>
            <div id="box-footer">
                <img src={LogoFooter} alt="Logo" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    )
}

export default Footer