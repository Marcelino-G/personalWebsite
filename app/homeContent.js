import Styles from "./Styles/page.module.scss"
import Image from 'next/image'
import profilePic from "/public/imgs/IMG_1358.jpg"




export default function HomeContent() {
    return (
      <div className={`row ${Styles.contentContainer}`}>
  
        <section className={`col-4 d-flex flex-column align-items-center justify-content-center`}>

            {}

            <Image
              src= {profilePic}
              placeholder="blur"
              width={250}
              height={250}
              alt="Picture of the author"
              priority
              
            />
            <ul className={`mt-5 ${Styles.initialList}`}>Profile Snapshot:
              <li>Southern California native</li>
              <li>Bachelor's degree in Psychology</li>
              <li>Self-taught in web development</li>
              <li><a href="https://americorps.gov/" target="_blank" >AmeriCorps</a> alum</li>
            </ul>
        </section>

        <main className="col-8 ">
            <h1 className="p-3">
              Welcome! 
              <br></br>
              I'm Marcelino, and I'm an explorer in the world of technology
            </h1>


            <div className="row p-2">



              <div className="">
                <ul className={` d-flex flex-column align-items-center ${Styles.initialList}`}>At this moment, I am:
                  <li>Reviewing <a href="https://www.coursera.org/professional-certificates/google-cybersecurity?" target="_blank">Google's cybersecurity program</a> materials</li>
                  <li>Solving SQL and JavaScript problems on <a href="https://leetcode.com/" target="_blank">LeetCode</a></li>
                  <li>Refreshing my Tableau skills</li>
                </ul>
              </div>

              <div className="d-flex justify-content-evenly">
                <ul className={` col-5 d-flex flex-column align-items-center  ${Styles.initialList}`}>Web development tools and technologies:
                    <li >HTML</li>
                    <li >CSS</li>
                    <li >Bootstrap</li>
                    <li >SCSS</li>
                    <li >JavaScript</li>
                    <li >React.js</li>
                </ul>
                <ul className={` col-5 d-flex flex-column align-items-center  ${Styles.initialList}`}>Data analysis tools and technologies:
                  <li >SQL</li>
                  <li >Tableau</li>
                </ul>
            </div>







            </div>

            



            
            






            {/* <div className="p-3 border">

              <ul className={`col-12 border d-flex ${Styles.initialList}`}>Web development tools and technologies:
                <li className="border col-6">HTML</li>
                <li className="border col-1">CSS</li>
                <li >Bootstrap</li>
                <li >SCSS</li>
                <li >JavaScript</li>
                <li >React.js</li>
              </ul>

              <ul className={`border  ${Styles.initialList}`}>Data analysis tools and technologies:
                <li >SQL</li>
                <li >Tableau</li>
              </ul>


            </div> */}

            
            




        </main>
      </div>
    )
  }
  

  {/* <div className="border col-6 p-3">
              <ul className={` border  ${Styles.initialList}`}>Profile snapshot:
                <li>Born and raised in Southern California</li>
                <li>Earned a Bachelor's degree in Psychology</li>
                <li>Self-taught in web development</li>
                <li>Served communities as an <a href="https://americorps.gov/" target="_blank" >AmeriCorps</a> member</li>
              </ul>
              <ul className={`border  ${Styles.initialList}`}>In this moment, I am:
                <li>Reviewing the material covered in <a href="https://www.coursera.org/professional-certificates/google-cybersecurity?" target="_blank">Google's cybersecurity program</a></li>
                <li>Working through SQL and JavaScript problems on <a href="https://leetcode.com/" target="_blank">LeetCode</a></li>
                <li>Brainstorming future projects</li>
              </ul>
            </div>

            <div className="border col-6 p-3">
              <ul className={` border  ${Styles.initialList}`}>Profile snapshot:
                <li>Born and raised in Southern California</li>
                <li>Earned a Bachelor's degree in Psychology</li>
                <li>Self-taught in web development</li>
                <li>Served communities as an <a href="https://americorps.gov/" target="_blank" >AmeriCorps</a> member</li>
              </ul>
              <ul className={`border  ${Styles.initialList}`}>In this moment, I am:
                <li>Reviewing the material covered in <a href="https://www.coursera.org/professional-certificates/google-cybersecurity?" target="_blank">Google's cybersecurity program</a></li>
                <li>Working through SQL and JavaScript problems on <a href="https://leetcode.com/" target="_blank">LeetCode</a></li>
                <li>Brainstorming future projects</li>
              </ul>
            </div> */}