import Nav from './nav'
import Footer from './footer'

export default function NavFoot({children}){
  return(
    <div className="container mt-5">
      <Nav/>
      {children}
      <Footer/>
    </div>
  )
}

