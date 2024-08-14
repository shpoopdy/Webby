"use client"
import { createContext, useContext, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


//const inter = Inter({ subsets: ['latin'] })

export const ThemeContext = createContext(null);


export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={ {theme, toggleTheme} }>
      <html lang="en">
        <body id={theme}>
          <Navbar  />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeContext.Provider>
  )
}
