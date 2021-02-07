import SEO from "../components/SEO"
import styles from "../styles/Projects.module.css"
import PreviewProject from "../components/PreviewProject"
import projects from "../utils/data"
import Link from "next/link"

export default function Projects(){
    return(
        <>
            <SEO title="Projects - Danilo"/>
            <div className={styles.main}>
                <h1>Projects</h1>
                <div className={styles.container}>
                    {projects.map((x)=>(
                        
                            <PreviewProject key={x.id} title={x.name} image={x.image} link={x.id}/>
                    ))}
                </div>

            </div>
        </>
    )
}