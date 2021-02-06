import Head from "next/head"
const SEO = ({title ,content}) => {
    return(
        <>
        <Head>
            <meta name="robots" content="index, follow" />
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={content} />
            <link rel="canonical" href="https://realdanilo.github.io/" />
            <meta name="keywords" content="developer, web developer, javascript, csharp, reactjs, redux, MVC, programming" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={content}/>
            <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
            <link rel="icon" href="/favicon.ico" />


        </Head>
        </>
    )
}
SEO.defaultProps = {
    title: "Danilo's porfolio - React developer",
    content:"Javascript and Csharp developer with a focus on React JS. MERN stack. ASP NET MVC. Phoenix - Arizona"
}
export default SEO
