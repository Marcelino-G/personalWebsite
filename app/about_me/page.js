
"use client"
import NavFoot from "../NavFoot/NavFootLayout";
import Styles from "../Styles/page.module.scss"
import Link from "next/link";


export default function AboutMe() {

    return (
        <NavFoot>
        <div className={`row ${Styles.contentContainer}`}>
  
            <main className="flex-column mt-5 mt-lg-0 flex-lg-row d-flex">

                <div className={`col-lg-6 p-3 pe-xl-4 ${Styles.aboutMeLinks}`}>

                    <p>
                        Welcome to my personal website! I'm Marcelino Gamino, a psychology graduate who transitioned 
                        from focusing on human behavior to immersing myself in information technologies. Despite this 
                        transition between two distinct fields, my core purpose remains, which is to leverage my 
                        knowledge, skills, and abilities towards enhancing quality of life.
                    </p>
                    <p>  
                        For instance, one of my most impactful roles was as a student mentor for at-risk youth. 
                        This position required me to support individuals in constructing appropriate responses to 
                        various situations by reflecting on their thoughts and actions together.
                    </p> 
                    <p>    
                        Since then, my journey has led me to explore technologies and concepts related to web 
                        development, data analysis, and cyber security. Again, my purpose remains unchanged and can be achieved 
                        in various ways within the tech space. Whether it involves adding web page interactivity, 
                        designing dashboards, or monitoring data, my drive is to be part of processes that contribute 
                        to the end user's quality of life and overall experience.
                    </p>  
                    <p>  
                        You might be curious about how this endeavor began. It all started during my college days when 
                        I decided to experiment with code, specifically C#. Within a month, I completed a beginner 
                        “video game making” tutorial that used <a href="https://unity.com/products/unity-engine" target="_blank">Unity</a> and 
                        created my own game. At that point, coding was just a hobby that I had to set 
                        aside due to academic priorities.
                    </p>   
                </div>

                <div className={`col-lg-6 p-3 ps-xl-4 ${Styles.aboutMeLinks}`}>  
                    <p>      
                        Fast forward a few years, I found myself in a professional position I had always imagined myself 
                        being in. However, upon reflection, I could not see fulfillment in the long run. From time to time, 
                        I would still think about “that C# game” and after this realization, I gradually began exploring 
                        different fields of technology before specializing in web development and recently venturing into 
                        data analysis and cyber security. I have questioned whether I belong in the tech world or not and 
                        the answer is yes because the limitless possibilities it presents satisfies my everlasting curiosity 
                        and creative desires.
                    </p>      
                    <p>     
                        I believe that my background in psychology has uniquely prepared me for a role in technology. 
                        While technical skills can be taught and acquired, the ability to empathize, understand, and 
                        effectively communicate with team members and clients is a quality that often sets individuals apart. 
                        These qualities are not easily taught and are a great asset when it comes to team dynamics and 
                        client relationships.
                    </p> 
                    <p>    
                        Now that you’ve gotten to know me a bit, I invite you to explore my <Link href={'/projects'}>projects</Link> where 
                        you’ll find detailed examples of my work in web development. Also, please feel free to connect with me 
                        on <a href="https://www.linkedin.com/in/marcelino-g/" target="_blank">LinkedIn</a> or reach out 
                        via <a href="mailto:marcelino.gamino11@gmail.com">email</a> for an immediate response.
                    </p> 
                </div>
                     
            </main>
        </div>
        </NavFoot>
    )
  }



// import Image from "next/image";
// import { adobeProjects } from "./adobeProjects"
// import { useState } from "react";
// import { useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import { motion }  from "framer-motion"



      // const [pages, setPages] = useState(0)
    // const [intervalToggle, setIntervalToggle] = useState(true)
    // const [stopInterval, setStopInterval] = useState(true)

    // useEffect(() => {

    //     if(stopInterval === false){
    //         return () => {
    //             clearInterval(projectSlide)
    //         }
    //     }

    //     let projectSlide = setInterval(() => {
    //         setIntervalToggle(!intervalToggle)
        
    //         if(pages === adobeProjects.length-1){
    //             setPages(0)
    //         } else {
    //             setPages(pages + 1)
    //         }
    //         }, 6000)

    //     return () => {
    //         clearInterval(projectSlide)
    //     }

    // },[intervalToggle, stopInterval])

    // const circleAssign = (x) =>{

    //     setPages(x)
    //     setStopInterval(false)

    // }


  {/* <section className={`col-3 d-flex flex-column justify-content-evenly align-items-center border border border-dark`}>
                <span>made with illustrator</span>
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

            </section> */}