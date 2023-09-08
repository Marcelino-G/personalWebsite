import Nav from './nav'
import Footer from './footer'
import Styles from '../Styles/page.module.scss'

export default function NavFoot({children}){
  return(
    <div className={` container mt-1`}>
      <Nav/>
      {children}
      <Footer/>
    </div>
  )
}

