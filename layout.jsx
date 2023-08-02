import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Hannan's TechBlog",
  description: 'Generated by Hannan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='font-body'>
      <Header />
      <section className='flex'>
        <aside className='w-1/4'>
          <SideBar />
        </aside>
        <main className='w-3/4'>{children}</main>
      </section>
      <Footer />
    </html>
  )
}
 