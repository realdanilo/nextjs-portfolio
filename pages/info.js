import styles from "../styles/Info.module.css"
import SEO from "../components/SEO"
import Link from "next/link"

export default function(){
    return(
        <>
            <SEO title="Info - Danilo"/>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>About Me</h1>
                    <p>
                        Software Developer located in Phoenix Ara. My main expertise is MERN stack. Currently learning (C#) ASP NET MVC stack.
                    </p>
                    <br/>
                    <Link href="/">Home</Link>
                    <br/>
                </div>
                <div>
                    <h1 className={styles.title}>Stack</h1>
                    <h3>Front End</h3>
                    <p>HTML, CSS, JSS, Javascript, JQuery, React Js, EJS</p>
                    <h3>Back End</h3>
                    <p>Node Js, Express, Mongo DB, MySQL, C#, .NET MVC</p>
                    <h3>Tools</h3>
                    <p>Git, Bash, Visual Studio Code</p>
                </div>
            </div>
        </>
    )
}