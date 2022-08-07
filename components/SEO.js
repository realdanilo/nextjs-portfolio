import Head from "next/head"
const SEO = ({title ,content}) => {
    return(
        <>
        <Head>
            <meta name="robots" content="index, follow" />
            <meta charSet="utf-8" /> 
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>{title}</title>
            <meta name="description" content={content} />
            <link rel="canonical" href="https://realdanilo.second.github.io" />
            <meta name="keywords" content="react developer, asp.net core, nextjs, html, css" />
            <meta property="og:site_name" content="realdanilo.vercel.app" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://realdanilo.vercel.app" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={content}/>
            <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
            <meta name="apple-mobile-web-title" content={title}/>
            <meta property="author" content="Danilo Mera"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        </>
    )
}
SEO.defaultProps = {
    title: "Danilo's porfolio | Web developer | React.js | ASP.NET",
    content:"Web developer porfolio. Javascript and Csharp developer with a focus on React JS, ASP NET MVC."
}
export default SEO
