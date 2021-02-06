import styles from "../styles/Info.module.css"
import SEO from "../components/SEO"

export default function(){
    return(
        <>
            <SEO title="Info - Danilo"/>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>About Me</h1>
                    <p>
                        Software Developer located in Phoenix area. My main expertise is MERN stack. Currently learning (C#) ASP NET MVC.
                    </p>
                    <br/>
                    <a href="mailto:danilomera.10@gmail.com">&#x2709; Contact</a>
                    <a href="https://github.com/realdanilo" target="_blank">&#x263C; Github</a>
                   
                    <br/>
                </div>
                <div>
                    <h1 className={styles.title}>Stack</h1>
                    <h3>Front End</h3>
                    <p>HTML, CSS, JSS, Javascript, JQuery, React, Next Js</p>
                    <h3>Back End</h3>
                    <p>Node Js, Express, Mongo DB, MySQL, C#, .NET MVC</p>
                    <h3>Tools</h3>
                    <p>Git, Bash, Visual Studio Code</p>
                </div>
            </div>
        </>
    )
}