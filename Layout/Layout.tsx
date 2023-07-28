import { LayoutProps } from '@/.next/types/app/layout'
import styles from './Layout.module.css'
import cn from 'classnames'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
