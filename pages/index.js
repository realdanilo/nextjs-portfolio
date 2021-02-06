import styles from '../styles/Home.module.css'
import SEO from "../components/SEO"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <SEO/>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Hey, </h1>
          <h1>This is</h1>
          <h1 className={styles.yellow}>Danilo</h1>
        </div>
        
        <div className={styles.navigation}>
          <Link href="/projects">&#xd7; Projects</Link>
          <Link href="/info">&#x2709; Info</Link>
        </div>
      </div>
    </>
  )
}
