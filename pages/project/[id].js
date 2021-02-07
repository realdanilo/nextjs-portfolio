import projects from "../../utils/data"
import styles from "../../styles/Project.module.css"
import Link from "next/link"
import SEO from "../../components/SEO"

export default function Project({test, project}){
    let { github, description, id, image, main, name,stack, url} = project
    return(
        <>
            <SEO title={`#${id} ${name} - Danilo`} />
            <div className={styles.main}>
                <h1>{name}</h1>
                <p>{description}</p>
                <h3>Stack</h3>
                <ul>
                    {stack.map((x,i)=> <li key={i}>{x}</li>)}
                </ul>
                <h3>Main Features</h3>
                <ul>
                    {main.map((x,i)=> <li key={i}>{x}</li>)}
                </ul>
                <div className={styles.mainNav}>
                    {github ? <a href={github} target="_blank">Github</a> : <p>No Github</p>}
                    <a href={url} target="_blank">Live</a>
                </div>
                <img src={image} alt={name}/>
                <div className={styles.back}>

                <Link href="/projects" >Back</Link>
                </div>
            </div>
        </>
    )
}
export async function getStaticProps({params:{id}}){
    let project = await projects.find(x => x.id == id)
    //find and return project from id param
    return{
        props:{
            test:"hello",
            project
            
        }
    }
}
export async function getStaticPaths(){
    let paths = projects.map(x => ({params:{id: x.id.toString()}}))

    return{
        paths,
        fallback:false
    }
}