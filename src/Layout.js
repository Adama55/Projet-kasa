import React from "react"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import './Layout.css'

function Layout({children}) {
    return(
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout