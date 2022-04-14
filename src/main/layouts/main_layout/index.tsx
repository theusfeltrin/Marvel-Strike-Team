import React, { ReactNode } from 'react'
import ironmanIcon from '../../assets/ironman_icon.png'
import './mainStyles.sass'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className='wrapper'>
    <header className='header'>
      <div className="container headersContainer">
        <div className="logo">
          <img src={ironmanIcon} alt="iron man mask icon" />
          <span>Marvel Strike Team</span>
        </div>
        <button className='headerButton'>Your Team
        <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 9.5C6.15469 9.5 7.5 8.15469 7.5 6.5C7.5 4.84531 6.15469 3.5 4.5 3.5C2.84531 3.5 1.5 4.84531 1.5 6.5C1.5 8.15469 2.84531 9.5 4.5 9.5ZM25.5 9.5C27.1547 9.5 28.5 8.15469 28.5 6.5C28.5 4.84531 27.1547 3.5 25.5 3.5C23.8453 3.5 22.5 4.84531 22.5 6.5C22.5 8.15469 23.8453 9.5 25.5 9.5ZM27 11H24C23.175 11 22.4297 11.3328 21.8859 11.8719C23.775 12.9078 25.1156 14.7781 25.4062 17H28.5C29.3297 17 30 16.3297 30 15.5V14C30 12.3453 28.6547 11 27 11ZM15 11C17.9016 11 20.25 8.65156 20.25 5.75C20.25 2.84844 17.9016 0.5 15 0.5C12.0984 0.5 9.75 2.84844 9.75 5.75C9.75 8.65156 12.0984 11 15 11ZM18.6 12.5H18.2109C17.2359 12.9688 16.1531 13.25 15 13.25C13.8469 13.25 12.7687 12.9688 11.7891 12.5H11.4C8.41875 12.5 6 14.9188 6 17.9V19.25C6 20.4922 7.00781 21.5 8.25 21.5H21.75C22.9922 21.5 24 20.4922 24 19.25V17.9C24 14.9188 21.5812 12.5 18.6 12.5ZM8.11406 11.8719C7.57031 11.3328 6.825 11 6 11H3C1.34531 11 0 12.3453 0 14V15.5C0 16.3297 0.670312 17 1.5 17H4.58906C4.88438 14.7781 6.225 12.9078 8.11406 11.8719Z" fill="white"/>
        </svg>
        </button>
      </div>
    </header>
    <main className='main'>
      {children}
    </main>
    <footer className='footer'>
      <div className="container footersContainer">
        <span>Data provided by Marvel. © 2020 MARVEL</span>
        <span>Developed by Matheus T. Feltrin</span>
      </div>
    </footer>
  </div>
)
