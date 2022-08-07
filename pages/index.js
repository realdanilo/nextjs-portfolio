import styles from '../styles/Home.module.css'
import SEO from "../components/SEO"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <SEO/>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Front-End</h1>
          <h1>Dev</h1>
          <h1 className={styles.yellow}>Danilo</h1>
        </div>
        
        <div className={styles.navigation}>
          <Link  href="/projects">&#10003; Projects</Link>
          <Link  href="/info">&#8505; Info</Link>
        </div>
      </div>
    </>
  )
}
