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

import logements from './local-json/logements.json'

function getIds() {
  const datas = [...logements]
  const ids = []
  for (let data of datas) {
    ids.push(data.id)
  }
  return ids
}
const ids = getIds()

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
        {/* <Route path="/:id" element={<FicheLogement />}></Route> */}
        {ids.map((id) => (
          <Route
            key={id}
            // exact
            strict
            path={`/${id}`}
            element={<FicheLogement id={id} />}
          >
            {/* {console.log(id)} */}
          </Route>
        ))}

        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
