import Styles from "./Styles/page.module.scss"
import Image from 'next/image'
import profilePic from "/public/imgs/IMG_1358.jpg"


export default function HomeContent() {
    return (
      <div className={`row ${Styles.contentContainer}`}>
  
        <section className={`col-4 d-flex flex-column align-items-center justify-content-center`}>

            <Image
              src= {profilePic}
              placeholder="blur"
              width={250}
              height={250}
              alt="Profile picture of the author"
              priority
            />
            
            <ul className={`mt-5 ${Styles.initialList}`}>Profile Snapshot:
              <li>Southern California native</li>
              <li>Bachelor's degree in Psychology</li>
              <li>Self-taught in web development</li>
              <li><a href="https://americorps.gov/" target="_blank" >AmeriCorps</a> alum</li>
            </ul>
        </section>

        <main className="col-8">
            <h1 className="p-3">
              Welcome! 
              <br></br>
              I'm Marcelino, and I'm an explorer in the world of technology
            </h1>

            <div className="row p-2">

              <div>
                <ul className={`d-flex flex-column align-items-center ${Styles.initialList}`}>At this moment, I am:
                  <li>Reviewing <a href="https://www.coursera.org/professional-certificates/google-cybersecurity?" target="_blank">Google's cybersecurity</a> program materials</li>
                  <li>Solving SQL and JavaScript problems on <a href="https://leetcode.com/" target="_blank">LeetCode</a></li>
                  <li>Refreshing my Tableau skills</li>
                </ul>
              </div>

              <div className="d-flex">
                <ul className={`col-6 d-flex flex-column align-items-center ${Styles.initialList}`}>Web development tools and technologies:
                  <li >HTML</li>
                  <li >CSS</li>
                  <li >Bootstrap</li>
                  <li >SCSS</li>
                  <li >JavaScript</li>
                  <li >React.js</li>
                </ul>

                <ul className={`col-6 d-flex flex-column align-items-center ${Styles.initialList}`}>Data analysis tools and technologies:
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