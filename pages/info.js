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
            I am a business analyst at Van Marcke. I manage the pricing
            structure and discounts for 3 different states. With VBA or python I
            write complex formulas for business needs such as SAP import sheets
            for specific products/pricing.
          </p>
          <p>
            My main expertise is Javascript. I like working with React, and I
            often use Next.js as my primary framework.
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
          <p>Html, Css, Bootstrap, Javascript, Jquery, React, Redux, Next.js</p>
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
