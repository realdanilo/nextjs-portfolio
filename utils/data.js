

let projects = [
    {
        id: 12,
        image: "/images/SchoolERP.png",
        name: "School ERP | .NET CORE",
        url: "https://youtu.be/PGSXHYeVU3g",
        github: "https://github.com/realdanilo/MySchoolSystem/tree/InstructorStudent_IdentityUser",
        description: "School ERP system: class enrollment with multiple options, update files to server (rubrics, projects), users with auth, admin priviliges to change passwords and user roles, instructor can grade homework.",
        stack: ["C#","ASP.NET CORE 3" , "EF", "Identity Framework", "MSSQL"],
        main: ["Docker", "ASP.NET Core", "Bootstrap", "LINQ", "Authentication", "Authorization"]
        
    },
    {
        id: 2,
        image: "/images/movie.png",
        name: "Movie Search | Next Js",
        url: "https://danilomera-movie.vercel.app/",
        github: "https://github.com/realdanilo/nextjs-movie",
        description: "Use external API movie databse to find movies by name and id; built with NextJS and modular CSS. SEO performance and UI friendly",
        stack: ["React", "Hooks", "NextJS", "API", "Modular CSS"],
        main: ["useState", "Local Storage", "Pagination", "APIs", "SEO"]
        
    },
    {
        id: 3,
        image: "/images/resort.png",
        name: "Hotel | React Js",
        url: "https://danilomera-hotel.netlify.app",
        github: "https://github.com/realdanilo/hotel",
        description: "Content Management System and React. Filter hotels dynamically (in a fast way, no loading!) and finds information about them. Re build OOP project to new hook syntax! Always learning!",
        stack: ["React", "Contentful", "Hooks"],
        main: ["useReducer Async", "CMS", "API"]
    },
    {
        id: 1,
        image: "/images/plumbing.png",
        name: "E-commerce MVP | Next Js",
        url: "https://realdanilo-ecommerce.vercel.app/?searchType=description&searchInput=abs",
        github: "https://github.com/realdanilo/plumbing_products",
        description: "VMTS internal website developed to look up product by SKU or description. Adapted to mock an ecommerce website.",
        stack: ["React", "Hooks", "NextJS", "MongoDb"],
        main: ["useContext", "Ecommerce", "Mobile", "SEO", "Modular Component"]
        
    },
    {
        id:4,
        image:"/images/blog.png",
        name:"Blog | Node Js",
        url:"https://danilomera-blog.herokuapp.com/blog",
        github:"",
        description:"CRUD RESTful blog application with (google) auth2",
        stack:["NodeJS","Bootstrap","EJS", "Mongo","Heroku"],
        main:["passport", "google auth2","dashboards"]
        
    },
    // {
    //     id:5,
    //     image: "/images/concert.png",
    //     name:"Concert",
    //     url:"https://danilomera-concert.netlify.app",
    //     github:"",
    //     description:"HTML CSS mobile friendly band website",
    //     stack:["HTML", "CSS"],
    //     main:["mobile first","flexbox","queries"]
    // },
    {
        id: 6,
        image: "/images/roofstore.png",
        name: "Roof Store",
        url: "https://danilomera-roofstore.netlify.app/",
        github: "https://github.com/realdanilo/roofstore",
        description: "From design to live site, using static technology",
        stack: ["HTML", "CSS", "Javascript"],
        main: ["Mobile CSS", "Flexbox/Grid system"]
    },
    {
        id: 7,
        image: "/images/beatles.png",
        name: "Beatles",
        url: "https://danilomera-beatles.netlify.app/",
        github: "",
        description: "Mobile first Beatles static website. I added some widgets such as Spotify, Graph, and Concert feedback",
        stack: ["HTML", "CSS", "Javascript"],
        main: ["DOM manipulation", "CSS queries", "API"]
    },
    {
        id: 8,
        image: "/images/yelpcamp.png",
        name: "Social Media | Node Js",
        url: "https://danilocamp.herokuapp.com/",
        github: "https://github.com/realdanilo/yelpcamp",
        description: "I advance my bootcamp project and included extra features that optimizes the website, makes more dynamic, and relates to a real world app. For example you can upload images, create and login a user, admin access, set a map location, and reference likes between posts.",
        stack: ["Node", "Express", "Mongo DB", "Bootstrap", "Passport", "Cloudinary"],
        main: ["REST", "Authentication", "Admin settings", "Cascade Delete", "Geomaping", "API"]

    },
    {
        id: 9,
        image: "/images/recipe.png",
        name: "Recipe App | React Js",
        url: "https://danilomera-recipe.netlify.app/",
        github: "https://github.com/realdanilo/recipeapp",
        description: "Use of modern React, routing, and context to build an amazing recipe app. Super optimized!",
        stack: ["React", "Hooks"],
        main: ["useReducer", "useContext", "customHooks", "Local Storage"]
    },
    // {
    //     id: 10,
    //     image: "/images/color.png",
    //     name: "Color",
    //     url: "https://danilomera-colorapp.netlify.app/",
    //     github: "https://github.com/realdanilo/colorapp",
    //     description: "Bootcamp project for React. Here I learned to use OOP with modern technology, learned development life cycle methods, and use of MaterialUI components",
    //     stack: ["React", "Material UI", "NPM modules"],
    //     main: ["OOP", "Routing", "Optimization/Memoization", "Life Cycle", "withStyles"]
    // },
    // {
    //     id:11,
    //     image:"/images/markdown.png",
    //     name:"#Markdown App",
    //     url:"https://danilomera-markdown.netlify.app/",
    //     github:"https://github.com/realdanilo/markdown-react",
    //     description:"Quick react application to learn markdown",
    //     stack:["React", "Third Party Libraries"],
    //     main:["Hooks","Markdown"]
    // }
    {
        id:11,
        image:"/images/subnetting.png",
        name:"IPv4 Subnetting (video)",
        url:"https://www.youtube.com/watch?v=Nl8-lqgyvtY",
        github:"",
        description:"Video explaining ipv4 subnetting, finding subnets and host, and binary weight on IP segment -easiest way possible. No cheating!",
        stack:["Networking", "IP Subnetting", "Infrastructure"],
        main:["subnetting","binary","segmentation"]
    }
    
]
export default projects