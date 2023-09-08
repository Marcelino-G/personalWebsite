import Styles from "./Styles/page.module.scss"
import Image from 'next/image'



export default function HomeContent() {
    return (
      <div className={`row ${Styles.contentContainer}`}>
  
        <section className={`col-4 d-flex align-items-center justify-content-center `}>
            <Image
              src= "/imgs/IMG_1358.jpg"
              width={250}
              height={250}
              alt="Picture of the author"
            />
        </section>

        <main className="col-8">
            <h1 className="p-3">
              Welcome! 
              <br></br>
              My name is Marcelino, and I am an explorer in the world of technology
            </h1>

            <div className="d-flex">


              <div className="p-3">
                <ul className={`  ${Styles.initialList}`}>Profile snapshot:
                  <li>Born and raised in Southern California</li>
                  <li>Earned a Bachelor's degree in Psychology</li>
                  <li>Self-taught in web development</li>
                  <li>Served communities as an <a href="https://americorps.gov/" target="_blank" >AmeriCorps</a> member</li>
                </ul>
                <ul className={`  ${Styles.initialList}`}>In this moment, I am:
                  <li>Reviewing the material covered in <a href="https://www.coursera.org/professional-certificates/google-cybersecurity?" target="_blank">Google's cybersecurity program</a></li>
                  <li>Working through SQL and JavaScript problems on <a href="https://leetcode.com/" target="_blank">LeetCode</a></li>
                  <li>Brainstorming future projects</li>
                </ul>
              </div>

              <div className="p-3 ">
                <ul className={`    ${Styles.initialList}`}>Web development tools and technologies:
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>SCSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                </ul>
                <ul className={` ${Styles.initialList}`}>Data analysis tools and technologies:
                  <li>SQL</li>
                  <li>Tableau</li>
                </ul>
              </div>

            </div>
            
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