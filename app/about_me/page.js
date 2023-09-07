"use client"
import NavFoot from "../NavFoot/NavFootLayout";
import Styles from "../Styles/page.module.scss"
import Image from "next/image";
import { adobeProjects } from "./adobeProjects"
import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion }  from "framer-motion"

export default function AboutMe() {

    const [pages, setPages] = useState(0)
    const [intervalToggle, setIntervalToggle] = useState(true)
    const [stopInterval, setStopInterval] = useState(true)

    useEffect(() => {

        if(stopInterval === false){
            return () => {
                clearInterval(projectSlide)
            }
        }

        let projectSlide = setInterval(() => {
            setIntervalToggle(!intervalToggle)
        
            if(pages === adobeProjects.length-1){
                setPages(0)
            } else {
                setPages(pages + 1)
            }
            }, 6000)

        return () => {
            clearInterval(projectSlide)
        }

    },[intervalToggle, stopInterval])

    const circleAssign = (x) =>{

        setPages(x)
        setStopInterval(false)

    }

    return (
        <NavFoot>
        <div className={`row ${Styles.contentContainer}`}>
  
            <section className={`col-4 d-flex flex-column justify-content-evenly align-items-center `}>
                
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                    key={pages}
                    className={`col-12 text-center`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit= {{opacity: 0}}>
                            
                        <Image
                        key={adobeProjects.num}
                        src={adobeProjects[pages].image}
                        width={250}
                        height={250}
                        alt="Picture of the author"
                        className={Styles.illustratorFrame}
                        />
                    </motion.div>
                </AnimatePresence>


                <div className={`col-5 d-flex justify-content-around`}>

                    {adobeProjects.map((item) => (
                        <div onClick={() => { circleAssign(item.num)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16" opacity={item.num === pages? "1" : "0.50"}>
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
                            </svg>
                        </div>
                    ))}

                </div>

            </section>

            <main className="col-8 mt-4">
                <h1>Introduction</h1>
                <p className="col-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Consectetur adipiscing elit duis tristique sollicitudin 
                    nibh sit amet commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Consectetur adipiscing elit duis tristique sollicitudin 
                    nibh sit amet commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Consectetur adipiscing elit duis tristique sollicitudin 
                    nibh sit amet commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Consectetur adipiscing elit duis tristique sollicitudin 
                    nibh sit amet commodo.
                </p>
            </main>

        </div>
        </NavFoot>
        
    )
  }