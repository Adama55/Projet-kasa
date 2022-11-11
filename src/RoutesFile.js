import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import LogementsCard from './pages/LogementsCard'

function RoutesFiles() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/logement/:id" element={<LogementsCard />}/>
                    <Route path="about/*" element={<About />}/>
                    <Route path="*" element={<Error />}/>
                </Routes>
            </Layout>
        </Router> 
    )

}

export default RoutesFiles