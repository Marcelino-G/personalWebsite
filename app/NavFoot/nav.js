
"use client"
import Link from "next/link"
import Styles from '../Styles/page.module.scss'
import { usePathname } from "next/navigation"

export default function Nav() {

  const pathway = usePathname();

    return (
      <div className="row">
        <nav className={`${Styles.navFont}`}>
          <ul className="mt-3 mt-lg-0 d-flex justify-content-end ">

            <li  className={` col-4 col-sm-3 col-lg-2`}><Link className={`${pathway === "/"? Styles.navExplorer: null}`} href={'/'}>Home</Link></li>
            <li  className={` col-4 col-sm-3 col-lg-2`}><Link className={`${pathway === "/projects"? Styles.navExplorer: null}`} href={'/projects'}>Projects</Link></li>
            <li  className={` col-4 col-sm-3 col-lg-2`}><Link className={`${pathway === "/about_me"? Styles.navExplorer: null}`} href= {'/about_me'}>About Me</Link></li>
            
            
        
          </ul>
        </nav>
      </div>
    )
  }



           



