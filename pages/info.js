import styles from "../styles/Info.module.css";
import SEO from "../components/SEO";
import Link from "next/link";

export default function Info() {
  return (
    <>
      <SEO title="About Me - Danilo" />
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>About Me</h1>
          <p>
          I found about the development since I started working as a pricing analyst and it has helped me to build excel tools to create sheeets for SAP master updates.
          </p>
          <p>
            During my free time I like to learn about different technologies such as development and networking.
            My expertise is javascript and some c#. Usually I code with React.js or ASP.Net to build applications.
          </p>
          <p>
            I am Comptia Network+, Security+, AWS CCP certified.
          </p>
          <br />
          <a href="https://www.linkedin.com/in/danilomera" target="_blank">&#x2709; Contact</a>
          <a href="https://github.com/realdanilo" target="_blank">
            &#x263C; Github
          </a>

          <br />
        </div>
        <div>
          <h1 className={styles.title}>Stack</h1>
          <h3>Front End</h3>
          <p>Html, Css, Javascript, React</p>
          <h3>Back End</h3>
          <p>Node.js, ASP.NET , MongoDb, MySQL </p>
          <h3>Tools</h3>
          <p>Git, Bash/Linux, VS Code, Google {":)"}</p>
        </div>
      </div>
      <div className={styles.back}>
        <Link href="/">
          <small>Home</small>
        </Link>
      </div>
    </>
  );
}
