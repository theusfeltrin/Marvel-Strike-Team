import React, { ReactNode } from 'react'
import { TiGroup } from 'react-icons/ti'
import ironmanIcon from '../../assets/ironman_icon.png'
import './mainStyles.sass'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className='wrapper'>
    <header className='header'>
      <div className="container headerContainer">
        <div className="logo">
          <img src={ironmanIcon} alt="iron man mask icon" />
          <span>Marvel Strike Team</span>
        </div>
        <button className='headerButton'>Your Team <TiGroup /></button>
      </div>
    </header>
    <main className='main'>
      {children}
    </main>
    <footer className='footer'>
      <div className="container">
      </div>
    </footer>
  </div>
)
