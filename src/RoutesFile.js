import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

import Home from './pages/Home'
import About from './pages/About'
//import Footer from './componentes/Footer'
import Error from './pages/Error'

function RoutesFiles() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="about/*" element={<About />}/>
                    <Route path="*" element={<Error />}/>
                </Routes>
            </Layout>
        </Router> 
    )

}

export default RoutesFiles