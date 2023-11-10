import { Inter } from 'next/font/google';
import './globals.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mikey',
  description: 'A website of me...by me!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
