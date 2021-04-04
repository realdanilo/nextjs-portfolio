import styles from "../styles/Info.module.css"
import SEO from "../components/SEO"

export default function Info (){
    return(
        <>
            <SEO title="Info - Danilo"/>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>About Me</h1>
                    <p>
                         Developer located in Phoenix area (willing to relocate). My main expertise is MERN stack. Currently learning .NET MVC + Entity Framework.
                    </p>
                    <br/>
                    <a href="mailto:danilomera.10@gmail.com">&#x2709; Contact</a>
                    <a href="https://github.com/realdanilo" target="_blank">&#x263C; Github</a>
                   
                    <br/>
                </div>
                <div>
                    <h1 className={styles.title}>Stack</h1>
                    <h3>Front End</h3>
                    <p>Html, CSS, Javascript, JQuery, Bootstrap, React + Redux, Next Js</p>
                    <h3>Back End</h3>
                    <p>Node Js, Express, Mongo DB, MySQL, .NET MVC</p>
                    <h3>Tools</h3>
                    <p>Git, Bash, Visual Studio Code</p>
                </div>
            </div>
        </>
    )
}