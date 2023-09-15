import "./NewsPreview.css"
import Image from "next/image"

export default function NewsPreview({news})
{
    return(
        <div className="NewsPreview MobileView">
            <div className="NewsImage">
                <Image src="/newsTest.png" alt="" fill className="image"/>
            </div>
            <div className="sportLabel">
                <p>{news.sport}</p>
            </div>
            <div className="newsInfo">
                <h3>{news.title}</h3>
                <p>{news.news.substring(0, 85)}...</p>
                <p className="date">{news.date}</p>
            </div>
        </div>
    )
}