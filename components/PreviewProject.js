import Link from "next/link"

export default function PreviewProject({title, image, link}){
    return(
                <Link href={`/project/${link}`}>
            <div className="preview-project">
                <img src={image} alt={title}/>
                    <h3>{title}</h3>
            </div>
                </Link>
    )
}