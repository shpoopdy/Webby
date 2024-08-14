"use client"
import { createContext, useState } from 'react';
import './globals.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
