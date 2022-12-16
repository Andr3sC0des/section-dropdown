import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Remotework from './components/Remotework'
import Sidebar from './components/Sidebar'
import "./style.sass"

import heroDesktop from "./images/image-hero-desktop.png"
import heroMobile from "./images/image-hero-mobile.png"
import Attribution from './components/Attribution'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Attribution />
    <Sidebar />
    <Header />
    <main className='main'>
      <Remotework />

      <picture>
        <source className='main__imagedesktop' media="(min-width: 1024px)" srcSet={heroDesktop} />
        <img className='main__imagemobile' src={heroMobile} alt="" />
      </picture>

    </main>
  </React.StrictMode>
)
