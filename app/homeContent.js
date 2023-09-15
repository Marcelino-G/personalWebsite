import Styles from "./Styles/page.module.scss"
import Image from 'next/image'
import profilePic from "/public/profilePic.png"


export default function HomeContent() {
    return (
      <div className={`row ${Styles.contentContainer}`}>
  
        <section className={`align-items-sm-center mt-5 justify-content-sm-between justify-content-md-around justify-content-lg-start mt-lg-0 col-lg-4 d-flex flex-lg-column`}>

          <div className="col-5 col-sm-4 col-lg-10 col-xl-8">
            <Image
                src= {profilePic}
                placeholder="blur"
                // width={250}
                // height={250}
                alt="Profile picture of the author"
                className="img-fluid"
                priority
              />
          </div>

            
            
          <ul className={`col-7 col-md-5 mt-lg-5 col-lg-12 col-xl-10 col-xxl-9 ${Styles.initialList}`}>Profile Snapshot:
            <li>Southern California native</li>
            <li>Bachelor's degree in Psychology</li>
            <li>Self-taught in web development</li>
            <li><a href="https://americorps.gov/" target="_blank" >AmeriCorps</a> alum</li>
          </ul>

        </section>

        <main className="col-12 mt-5 mt-lg-0 col-lg-8">
            <h1 className="text-center text-lg-start p-3">
              Welcome! 
              <br></br>
              I'm Marcelino, and I'm an explorer in the world of technology
            </h1>

            <div className="row p-2">

              <div>
                <ul className={`p-sm-0 d-flex flex-column align-items-sm-center ${Styles.initialList}`}>At this moment, I am:
                  <li>Reviewing <a href="https://www.coursera.org/professional-certificates/google-cybersecurity?" target="_blank">Google's cybersecurity</a> program materials</li>
                  <li>Solving SQL and JavaScript problems on <a href="https://leetcode.com/" target="_blank">LeetCode</a></li>
                  <li>Refreshing my Tableau skills</li>
                </ul>
              </div>

              <div className="flex-column d-flex flex-lg-row">
                <ul className={` align-items-center p-0 col-12 col-lg-6 d-flex flex-column text-sm-center ${Styles.initialList}`}>Web development tools and technologies:
                  <li >HTML</li>
                  <li >CSS</li>
                  <li >Bootstrap</li>
                  <li >SCSS</li>
                  <li >JavaScript</li>
                  <li >React.js</li>
                </ul>

                <ul className={`   align-items-center p-0 col-12 col-lg-6 d-flex flex-column text-sm-center ${Styles.initialList}`}>Data analysis tools and technologies:
                  <li >Microsoft Excel</li>
                  <li >Tableau</li>
                  <li >SQL</li>
                </ul>
              </div>

            </div>

        </main>
      </div>
    )
  }