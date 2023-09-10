"use client"
import NavFoot from "../NavFoot/NavFootLayout"
import Image from "next/image"
import Styles from "../Styles/page.module.scss"
import {motion} from 'framer-motion'
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { myProjects } from "./myProjects"




export default function Projects() {

    const [pages, setPages] = useState(0)
    const [animateDirection, setAnimateDirection] = useState(true)

    const left = () => {
        setAnimateDirection(!animateDirection)

        if(pages === 0){
            setPages(myProjects.length-1)
        } else {
            setPages(pages - 1)
        }
    }

    const right = () => {
        setAnimateDirection(!animateDirection)
       
        if(pages === myProjects.length-1){
            setPages(0)
        } else {
            setPages(pages + 1)
        }
    }

    const circleAssign = (x) => {
        setPages(x)
        setAnimateDirection(!animateDirection)
    }

    console.log(typeof(myProjects[pages].description))
    console.log((myProjects[pages].description))

    return (

        <NavFoot>
        <div className={`row ${Styles.contentContainer}`}>


            
            <section className={`col-4 d-flex flex-column justify-content-around`}>
                
                <AnimatePresence initial={false} mode="wait">
                    <motion.div 
                    key={pages}
                    className={`col-10 align-self-center`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit= {animateDirection?{opacity: 0, x:10, y: -5} : {opacity: 0, x:-10, y: -5}}>

                        
                        <video autoPlay muted loop className={`col-12`}>
                            Loading...
                            <source src={myProjects[pages].video} type="video/webm" />
                        </video>

                    </motion.div>
                </AnimatePresence>

                <ul className={`${Styles.projectList}`}>

                    {myProjects.map((item) => (
                        <li className="col-7" style={item.num === pages? {opacity: "1", fontSize: "initial"} : {opacity: "0.50", fontSize: "14px"}} onClick={() => {circleAssign(item.num)}}>
                                {item.title}
                        </li>
                    ))}

                </ul>
                
            </section>








            <section className="col-8 d-flex flex-column" >
                <main className={`p-3 ${Styles.projectMainContainer}`}>
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div 
                        key={pages}
                        
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit= {animateDirection?{opacity: 0, x:10, y: -5} : {opacity: 0, x:-10, y: -5}}>
                            
                            <h1>{myProjects[pages].title}</h1>
                            {myProjects[pages].description}
                            <ul>
                                <li>Completed: {myProjects[pages].date}</li>
                                <li>Focuses on: {myProjects[pages].focus}</li>
                                {myProjects[pages].gitVisit != null? <li><a href={myProjects[pages].gitVisit} target="_blank">GitHub repository</a></li> : null}
                                {myProjects[pages].appVisit != null? <li><a href={myProjects[pages].appVisit} target="_blank">Application</a></li>: null}
                                {myProjects[pages].youTubeVideo != null? <li><a href={myProjects[pages].youTubeVideo} target="_blank">YouTube video</a></li>: null}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </main>

                <div className={`col-5 align-self-center d-flex justify-content-between mt-5  ${Styles.circleArrows}`}>
                    <svg onClick={left} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left-circle-fill col-2" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>

                    <svg onClick={right} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-circle-fill col-2" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </div>

               
            </section>
            
        </div>
        </NavFoot>
    )
  }