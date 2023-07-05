import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Providers from './_providers/providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DappStore',
  description: 'The Next Generation of Blockchain-Powered Apps',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Navbar/>
        {children}
        </Providers>
        </body>
    </html>
    </>
  )
}
