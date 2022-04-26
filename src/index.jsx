import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './style.css'

import Header from './components/Header'
import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogement'
import Error from './pages/Error'
import Footer from './components/Footer'
import ScrollToTop from './hooks/ScrollToTop'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/APropos" element={<APropos />}></Route>
        <Route path="/logement/:id" element={<FicheLogement />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
